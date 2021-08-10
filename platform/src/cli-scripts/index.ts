import { doAdd } from './add';
import { runTask } from './common';
import { doCopy } from './copy';
import { doOpen } from './open';
import { doUpdate } from './update';

async function doUpdateTask() {
  return await runTask('Updating Tauri plugins', async () => {
    return await doUpdate();
  });
}

async function doAddTask() {
  return await runTask('Adding Tauri platform', async () => {
    return doAdd();
  });
}

async function doCopyTask() {
  return await runTask('Copying Web App to Tauri platform', async () => {
    return await doCopy();
  });
}

async function doOpenTask() {
  return await runTask(
    'Opening Tauri platform - The first run of this command can take several minutes to show the app.',
    async () => {
      return await doOpen();
    },
  );
}

(async () => {
  const scriptToRun = process.argv[2] ? process.argv[2] : null;
  if (scriptToRun !== null) {
    switch (scriptToRun) {
      case 'add':
        await doAddTask();
        await doCopyTask();
        // await doUpdateTask();
        break;
      case 'copy':
        await doCopyTask();
        break;
      case 'run':
        await doOpenTask();
        break;
      case 'open':
        await doOpenTask();
        break;
      case 'update':
        throw new Error(`Invalid script chosen: ${scriptToRun}`);
      // await doUpdateTask();
      // break;
      case 'sync':
        throw new Error(`Invalid script chosen: ${scriptToRun}`);
      // await doCopyTask();
      // await doUpdateTask();
      // break;
      default:
        throw new Error(`Invalid script chosen: ${scriptToRun}`);
    }
  } else {
    throw new Error(`Invalid script chosen: ${scriptToRun}`);
  }
})();
