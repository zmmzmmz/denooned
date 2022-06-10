import { includeFile } from "./file-handlers.ts";

/* TYPES */

import type { EtaConfig } from "./config.ts";

interface GenericData {
  [index: string]: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

/* END TYPES */

/**
 * Called with `includeFile(path, data)`
 */

export async function includeFileHelper(
  this: EtaConfig,
  path: string,
  data: GenericData,
): Promise<string> {
  const templateAndConfig = await includeFile(path, this);
  return templateAndConfig[0](data, templateAndConfig[1]);
}
