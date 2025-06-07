interface ImportMetaEnv {
  readonly VITE_AUTH0_AUDIENCE: string;
  readonly VITE_AUTH0_BACKEND_AUDIENCE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}