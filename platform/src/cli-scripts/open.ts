import { platform } from 'os';
import { join } from 'path';

import type { TaskInfoProvider } from './common';
import { runExec, errorLog } from './common';

export async function doOpen(
  taskInfoMessageProvider: TaskInfoProvider
): Promise<void> {
  taskInfoMessageProvider('preparing - Note: The first run of this command can take several minutes to show the app.')
  const configData = JSON.parse(process.env.CAPACITOR_CONFIG);
  const usersProjectDir = process.env.CAPACITOR_ROOT_DIR;
  const destDir = join(usersProjectDir, 'tauri');
  try {
    taskInfoMessageProvider('builing tauri app');
    await runExec(
      `cd ${destDir} && npm run build`,
    );
    const osPlatform = platform();
    if (osPlatform === 'win32') {
      taskInfoMessageProvider('running tauri windows app');
      await runExec(
        `cd ${destDir} && cd src-tauri/target/debug && ${configData.appName}.exe`,
      );

    } else if (osPlatform === 'darwin') {
      taskInfoMessageProvider('running tauri macOS app');
      await runExec(
        `cd ${destDir} && src-tauri/target/debug/${configData.appName}`,
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
