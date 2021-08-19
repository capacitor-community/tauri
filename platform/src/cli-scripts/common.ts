import execa from 'execa';
import { readFileSync, writeFileSync } from 'fs';

export function readJSON(pathToUse: string): { [key: string]: any } {
  const data = readFileSync(pathToUse, 'utf8');
  return JSON.parse(data);
}

export function writePrettyJSON(path: string, data: any): void {
  return writeFileSync(path, JSON.stringify(data, null, '  ') + '\n');
}

export async function runExecWithInput(command: string): Promise<string> {
  const { stdout, stderr } = await execa.command(command, {
    stdio: 'inherit',
    shell: true,
  });
  if (stderr) {
    return stdout + stderr;
  } else {
    return stdout;
  }
}

export const log = console.log;

const TIME_UNITS = ['s', 'ms', 'μp'];

export function formatHrTime(hrtime: any): string {
  let time = hrtime[0] + hrtime[1] / 1e9;
  let index = 0;
  for (; index < TIME_UNITS.length - 1; index++, time *= 1000) {
    if (time >= 1) {
      break;
    }
  }
  return time.toFixed(2) + TIME_UNITS[index];
}
