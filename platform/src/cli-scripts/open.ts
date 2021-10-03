import chalk from 'chalk';
import { platform } from 'os';
import { join } from 'path';

import { runExecWithInput, log, formatHrTime } from './common';

export async function doOpen(): Promise<void> {
  const start = process.hrtime();
  log(`\n${chalk.bold('Tauri Platform:')} Starting open/run task 🚀`);
  log(
    `\n${chalk.bold(
      'Tauri Platform:',
    )} 🚨 Note: The first run of this command can take several minutes to show the app. 🚨`,
  );
  const configData = JSON.parse(process.env.CAPACITOR_CONFIG);
  const usersProjectDir = process.env.CAPACITOR_ROOT_DIR;
  const destDir = join(usersProjectDir, 'tauri');
  log(`\n${chalk.bold('Tauri Platform:')} Building Tauri app 🚧`);
  await runExecWithInput(`cd ${destDir} && npm run build`);
  const elapsed = process.hrtime(start);
  log(
    `\n${chalk.bold(
      'Tauri Platform:',
    )} Tauri app build complete ✅ - ${formatHrTime(elapsed)}\n`,
  );
  const osPlatform = platform();
  if (osPlatform === 'win32') {
    log(`\n${chalk.bold('Tauri Platform:')} Running windows app ⚡\n`);
    await runExecWithInput(
      `cd ${destDir} && cd src-tauri/target/debug && ${configData.appName}.exe`,
    );
  } else if (osPlatform === 'darwin') {
    log(`\n${chalk.bold('Tauri Platform:')} Running macOS app ⚡\n`);
    await runExecWithInput(
      `cd ${destDir} && src-tauri/target/debug/${configData.appName}`,
    );
  } else if (osPlatform === 'linux') {
    log(`\n${chalk.bold('Tauri Platform:')} Running linux app ⚡\n`);
    await runExecWithInput(
      `cd ${destDir} && src-tauri/target/debug/${configData.appName}`,
    );
  } else {
    throw new Error(
      'Sorry but your OS is not supported by the open/run command at this time.',
    );
  }
}
