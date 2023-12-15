export {};

export type EventKey = string | symbol;
export type EventHandler<T = any> = (payload: T) => void;
export type EventMap = Record<EventKey, EventHandler>;
export type Bus<E> = Record<keyof E, E[keyof E][]>;

/**
 * Shell, 혹은 Angular에서 수신
 * 웹컴포는트들은 아래와 같이 호출
 * ex ) window.routerEventChannel.emit('keRouterNavigator', {path, event});
 *
 */
export interface EventBus<T extends EventMap> {
  on<Key extends keyof T>(key: Key, handler: T[Key]): () => void; //구독

  off<Key extends keyof T>(key: Key, handler: T[Key]): void; //해제

  once<Key extends keyof T>(key: Key, handler: T[Key]): void; //1번만

  emit<Key extends keyof T>(key: Key, ...payload: Parameters<T[Key]>): void; //발행
}

declare global {
  interface Window {
    routerEventChannel: EventBus<{ keRouterNavigator: EventHandler }>;
  }

  namespace JSX {
    interface IntrinsicElements {
      'sample-angular-root': any; //angular tag
    }
  }
}
