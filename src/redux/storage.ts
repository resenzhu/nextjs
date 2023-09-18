import createWebStorage from 'redux-persist/lib/storage/createWebStorage';

const createNoopStorage = (): {
  getItem: (_key: string) => Promise<null>;
  setItem: (_key: string, value: string) => Promise<string>;
  removeItem: (_key: string) => Promise<void>;
} => ({
  getItem: (_key: string): Promise<null> => Promise.resolve(null),
  setItem: (_key: string, value: string): Promise<string> =>
    Promise.resolve(value),
  removeItem: (_key: string): Promise<void> => Promise.resolve()
});

const storage =
  typeof window !== 'undefined'
    ? createWebStorage('local')
    : createNoopStorage();

export default storage;
