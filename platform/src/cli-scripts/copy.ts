import chalk from 'chalk';
import { existsSync } from 'fs';
import { copySync, removeSync } from 'fs-extra';
import { join } from 'path';

import { formatHrTime, log } from './common';

export async function doCopy(): Promise<void> {
  const start = process.hrtime();
  log(`\n${chalk.bold('Tauri Platform:')} Starting copy task 🚀`);
  const usersProjectDir = process.env.CAPACITOR_ROOT_DIR;
  const builtWebAppDir = process.env.CAPACITOR_WEB_DIR;
  const destDir = join(usersProjectDir, 'tauri', 'app');

  log(
    `\n${chalk.bold(
      'Tauri Platform:',
    )} Copying ${builtWebAppDir} into ${destDir} ✨`,
  );
  if (existsSync(destDir)) removeSync(destDir);
  copySync(builtWebAppDir, destDir);
  const elapsed = process.hrtime(start);
  log(
    `\n${chalk.bold('Tauri Platform:')} Copy task complete ✅ - ${formatHrTime(
      elapsed,
    )}\n`,
  );
}
