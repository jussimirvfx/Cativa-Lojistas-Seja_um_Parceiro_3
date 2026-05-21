declare module '@jussimirvfx/meta-pixel-tracking' {
  import type { ReactNode } from 'react';

  type MetaPixelConfig = {
    PIXEL_ID?: string;
    ACCESS_TOKEN?: string;
    TEST_EVENT_CODE?: string;
  };

  type MetaPixelData = Record<string, unknown>;

  export function configureMetaPixel(config: MetaPixelConfig): void;

  export function MetaPixelProvider(props: {
    children: ReactNode;
    userData?: MetaPixelData;
  }): JSX.Element;

  export function MetaPixel(props: {
    pixelId?: string;
  }): JSX.Element;

  export function useMetaPixel(): {
    isInitialized: boolean;
    initializePixel: (pixelId?: string) => void;
    trackLead: (leadData: MetaPixelData) => Promise<unknown>;
    trackLeadQualificado: (leadData: MetaPixelData) => Promise<unknown>;
    trackEvent: (eventName: string, params?: MetaPixelData, options?: MetaPixelData) => Promise<unknown>;
    trackPageView: (userData?: MetaPixelData) => Promise<unknown>;
  };
}
