import { doAdd } from './add';
import { doCopy } from './copy';
import { doOpen } from './open';
// import { doUpdate } from './update';

/*
async function doUpdateTask() {
  return await doUpdate();
}
*/

async function doAddTask() {
  return await doAdd();
}

async function doCopyTask() {
  return await doCopy();
}

async function doOpenTask() {
  return await doOpen();
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
