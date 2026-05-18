/// <reference types="vite/client" />

declare module '@jussimirvfx/meta-pixel-tracking' {
  import type { ReactNode } from 'react';

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

  export function configureMetaPixel(config: MetaPixelConfig): void;
  export function MetaPixelProvider(props: { children: ReactNode; userData?: Record<string, unknown> }): JSX.Element;
  export function MetaPixel(props: { pixelId?: string }): JSX.Element;
  export function useMetaPixel(): {
    trackLead: (leadData: LeadData) => Promise<void>;
    trackLeadQualificado: (leadData: LeadData) => Promise<void>;
    trackEvent: (eventName: string, params?: Record<string, unknown>, options?: Record<string, unknown>) => Promise<void>;
    trackPageView: (userData?: Record<string, unknown>) => Promise<void>;
    isInitialized: boolean;
  };
}
