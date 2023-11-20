export {};

interface Shell {
  navigate?: (path: string) => void;
}

declare global {
  interface Window {
    get shell(): Shell;
  }
}
