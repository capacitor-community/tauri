import { join } from 'path';

import { runExec, errorLog } from './common';

export async function doOpen(): Promise<void> {
  const configData = JSON.parse(process.env.CAPACITOR_CONFIG);
  const usersProjectDir = process.env.CAPACITOR_ROOT_DIR;
  const destDir = join(usersProjectDir, 'tauri');
  try {
    await runExec(`cd ${destDir} && npm run build && cd src-tauri/target/debug && ${configData.appName}.exe`);
  } catch (e) {
    errorLog(e.message);
    throw e;
  }
}
