export {};

interface Shell {
  navigate?: (
    path: string,
    options?: {
      state?: any;
    },
  ) => void;
}

declare global {
  interface Window {
    get shell(): Shell;
  }
}
