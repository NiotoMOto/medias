declare var require: (string) => any;

interface Array<T> {
  includes(obj: any): boolean;
}

interface Window {
  __INIT__: {
    state: any;
    paths: {
      store: string;
      container: string;
    };
  };
}

declare module Types {
  type Filter<T> = (arg: T) => boolean;

  type Key = string | symbol | number;

  interface Action {
    type: string;
  }
}
