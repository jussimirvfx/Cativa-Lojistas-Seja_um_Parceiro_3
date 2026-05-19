/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_FORM_WEBHOOK_URL?: string;
  readonly VITE_WEBHOOK_TOKEN?: string;
  readonly VITE_META_PIXEL_ID?: string;
  readonly VITE_META_API_ACCESS_TOKEN?: string;
  readonly VITE_META_TEST_EVENT_CODE?: string;
  readonly GEMINI_API_KEY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
