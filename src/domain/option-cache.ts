import type { Options } from './options';
import type { StoragePort } from './session';

export interface OptionCachePorts {
  storage: StoragePort;
  merge: (data: Options) => void;
  setLoading: (value: boolean) => void;
  setFetching: (value: boolean) => void;
  markFetched: () => void;
  delay: (ms: number) => Promise<void>;
  consume: () => Promise<{ data: Options }>;
}
// SHR-MT-R01: raw cache has no version/age/schema/identity validation.
export async function hydrateOptions(
  pathname: string,
  alreadyFetched: boolean,
  ports: OptionCachePorts,
) {
  if (!pathname.includes('motortrade-roadrisks') || alreadyFetched) return;
  const cache = ports.storage.getItem('motorTradeOptions');
  if (cache) {
    ports.merge(JSON.parse(cache));
    ports.markFetched();
    return;
  }
  ports.setFetching(true);
  ports.setLoading(true);
  try {
    await ports.delay(300);
    const response = await ports.consume();
    ports.merge(response.data);
    ports.storage.setItem('motorTradeOptions', JSON.stringify(response.data));
    ports.markFetched();
  } finally {
    ports.setFetching(false);
    ports.setLoading(false);
  }
}
