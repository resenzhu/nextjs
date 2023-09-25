import createWebStorage from 'redux-persist/lib/storage/createWebStorage';

const createNoopStorage = (): {
  getItem: (key: string) => Promise<null>;
  setItem: (key: string, value: string) => Promise<string>;
  removeItem: (key: string) => Promise<void>;
} => ({
  getItem: (_key): Promise<null> => Promise.resolve(null),
  setItem: (_key, value): Promise<string> =>
    Promise.resolve(value),
  removeItem: (_key): Promise<void> => Promise.resolve()
});

const storage =
  typeof window === 'undefined'
    ? createNoopStorage()
    : createWebStorage('session');

export default storage;
