import storage from '@redux/storage';

export type PersistConfig = {
  key: string;
  storage: typeof storage;
  version: number;
  whitelist: string[];
};

export const createPersistConfig = ({
  key,
  whitelist = []
}: {
  key: string;
  whitelist?: string[];
}): PersistConfig => ({
  key: key,
  storage: storage,
  version: 1,
  whitelist: whitelist
});
