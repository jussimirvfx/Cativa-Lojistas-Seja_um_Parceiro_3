import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

type MetaPixelConfig = {
  PIXEL_ID?: string;
  ACCESS_TOKEN?: string;
  TEST_EVENT_CODE?: string;
};

type LeadData = Record<string, unknown> & {
  name?: string;
  email?: string;
  phone?: string;
  city?: string;
  state?: string;
  zip?: string;
  country?: string;
};

type FbqFunction = {
  (...args: unknown[]): void;
  queue?: unknown[][];
  loaded?: boolean;
  version?: string;
};

declare global {
  interface Window {
    fbq?: FbqFunction;
    _fbq?: FbqFunction;
  }
}

const MetaPixelContext = createContext({ isInitialized: false });

let metaPixelConfig: MetaPixelConfig = {};
let initializedPixelId: string | null = null;

const standardEvents = new Set(['PageView', 'Lead', 'CompleteRegistration', 'Contact']);

export function configureMetaPixel(config: MetaPixelConfig): void {
  metaPixelConfig = config;
}

const getPixelId = (pixelId?: string) => pixelId || metaPixelConfig.PIXEL_ID;

const initializeMetaPixel = (pixelId?: string) => {
  if (typeof window === 'undefined') return false;

  const resolvedPixelId = getPixelId(pixelId);
  if (!resolvedPixelId) return false;

  if (!window.fbq) {
    const fbq: FbqFunction = (...args: unknown[]) => {
      fbq.queue = fbq.queue || [];
      fbq.queue.push(args);
    };

    fbq.queue = [];
    fbq.loaded = true;
    fbq.version = '2.0';
    window.fbq = fbq;
    window._fbq = fbq;

    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://connect.facebook.net/en_US/fbevents.js';
    document.head.appendChild(script);
  }

  if (initializedPixelId !== resolvedPixelId) {
    window.fbq('init', resolvedPixelId);
    initializedPixelId = resolvedPixelId;
  }

  return true;
};

const cleanEventPayload = (data: Record<string, unknown> = {}) => {
  const payload: Record<string, unknown> = {};

  Object.entries(data).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      payload[key] = value;
    }
  });

  return payload;
};

const sendPixelEvent = (eventName: string, params?: Record<string, unknown>) => {
  if (!initializeMetaPixel()) return;

  const eventType = standardEvents.has(eventName) ? 'track' : 'trackCustom';
  window.fbq?.(eventType, eventName, cleanEventPayload(params));
};

export function MetaPixelProvider({ children }: { children: ReactNode; userData?: Record<string, unknown> }) {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    setIsInitialized(initializeMetaPixel());
  }, []);

  return (
    <MetaPixelContext.Provider value={{ isInitialized }}>
      {children}
    </MetaPixelContext.Provider>
  );
}

export function MetaPixel({ pixelId }: { pixelId?: string }) {
  useEffect(() => {
    if (!initializeMetaPixel(pixelId)) return;
    window.fbq?.('track', 'PageView');
  }, [pixelId]);

  return null;
}

export function useMetaPixel() {
  const context = useContext(MetaPixelContext);

  return {
    isInitialized: context.isInitialized,
    trackLead: async (leadData: LeadData) => {
      sendPixelEvent('Lead', leadData);
    },
    trackLeadQualificado: async (leadData: LeadData) => {
      sendPixelEvent('LeadQualificado', leadData);
    },
    trackEvent: async (eventName: string, params?: Record<string, unknown>) => {
      sendPixelEvent(eventName, params);
    },
    trackPageView: async (userData?: Record<string, unknown>) => {
      sendPixelEvent('PageView', userData);
    },
  };
}
