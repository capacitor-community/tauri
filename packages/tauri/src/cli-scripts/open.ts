import { join } from 'path';

import { runExec, errorLog } from './common';

export async function doOpen(): Promise<void> {
  const usersProjectDir = process.env.CAPACITOR_ROOT_DIR;
  const destDir = join(usersProjectDir, 'tauri');
  try {
    await runExec(`cd ${destDir} && npm run dev`);
  } catch (e) {
    errorLog(e.message);
    throw e;
  }
}
