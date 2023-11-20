export {};

interface Shell {
  navigate?: (
    path: string,
    options?: {
      replace?: boolean;
      state?: any;
      preventScrollReset?: boolean;
      relative?: any;
    },
  ) => void;
}

declare global {
  interface Window {
    get shell(): Shell;
  }
}
