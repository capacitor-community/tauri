import { existsSync } from 'fs';
import { copySync, removeSync } from 'fs-extra';
import { join } from 'path';

import { errorLog } from './common';

export async function doCopy(): Promise<void> {
  const usersProjectDir = process.env.CAPACITOR_ROOT_DIR;
  // const configData = JSON.parse(process.env.CAPACITOR_CONFIG!);
  const builtWebAppDir = process.env.CAPACITOR_WEB_DIR;
  const destDir = join(usersProjectDir, 'tauri', 'app');

  try {
    if (existsSync(destDir)) removeSync(destDir);
    copySync(builtWebAppDir, destDir);
  } catch (e) {
    errorLog(e.message);
    throw e;
  }
}
