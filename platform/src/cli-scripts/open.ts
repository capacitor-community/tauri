import { platform } from 'os';
import { join } from 'path';

import { runExec, errorLog } from './common';

export async function doOpen(): Promise<void> {
  const configData = JSON.parse(process.env.CAPACITOR_CONFIG);
  const usersProjectDir = process.env.CAPACITOR_ROOT_DIR;
  const destDir = join(usersProjectDir, 'tauri');
  try {
    const osPlatform = platform();
    if (osPlatform === 'win32') {
      await runExec(
        `cd ${destDir} && npm run build && cd src-tauri/target/debug && ${configData.appName}.exe`,
      );
    } else if (osPlatform === 'darwin') {
      await runExec(
        `cd ${destDir} && npm run build && src-tauri/target/debug/${configData.appName}`,
      );
    } else {
      throw new Error(
        'Sorry but your OS is not supported by the open/run command at this time.',
      );
    }
  } catch (e) {
    errorLog(e.message);
    throw e;
  }
}
