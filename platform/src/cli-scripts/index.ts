import chalk from 'chalk';

import { doAdd } from './add';
import { log } from './common';
import { doOpen } from './open';
// import { doCopy } from './copy';
// import { doUpdate } from './update';

/*
async function doUpdateTask() {
  return await doUpdate();
}
*/

async function doAddTask() {
  return await doAdd();
}

/*
async function doCopyTask() {
  return await doCopy();
}
*/

async function doOpenTask() {
  return await doOpen();
}

(async () => {
  const scriptToRun = process.argv[2] ? process.argv[2] : null;
  if (scriptToRun !== null) {
    switch (scriptToRun) {
      case 'add':
        await doAddTask();
        // await doCopyTask();
        // await doUpdateTask();
        break;
      case 'copy':
        log(
          `\n${chalk.bold(
            'Tauri Platform:',
          )} Copy isn't necessary on the Tauri platform, as it uses your build folder from the web app directly 👍\n`,
        );
        // await doCopyTask();
        break;
      case 'run':
      case 'open':
        await doOpenTask();
        break;
      case 'update':
        throw new Error(`Invalid script chosen: ${scriptToRun}`);
      // await doUpdateTask();
      // break;
      case 'sync':
        throw new Error(`Invalid script chosen: ${scriptToRun}`);
      // await doSyncTask();
      // await doUpdateTask();
      // break;
      default:
        throw new Error(`Invalid script chosen: ${scriptToRun}`);
    }
  } else {
    throw new Error(`Invalid script chosen: ${scriptToRun}`);
  }
})();
