import type {WebStorage} from 'redux-persist';
import sessionStorage from 'redux-persist/lib/storage/session';

export type PersistConfig = {
  key: string;
  storage: WebStorage;
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
  storage: sessionStorage,
  version: 1,
  whitelist: whitelist
});
