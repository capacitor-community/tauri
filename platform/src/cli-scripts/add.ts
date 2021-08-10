import { existsSync, renameSync } from 'fs';
import { copySync } from 'fs-extra';
import { join } from 'path';

import { readJSON, runExec, writePrettyJSON } from './common';

export async function doAdd(): Promise<void> {
  //console.log(process.env.CAPACITOR_ROOT_DIR);
  //console.log(process.env.CAPACITOR_WEB_DIR);
  //console.log(process.env.CAPACITOR_CONFIG);
  const usersProjectDir = process.env.CAPACITOR_ROOT_DIR;
  const platformNodeModuleTemplateDir = join(
    usersProjectDir,
    'node_modules',
    '@capacitor-community',
    'tauri',
    'template',
  );
  const destDir = join(usersProjectDir, 'tauri');
  let usersProjectCapConfigFile: string | undefined = undefined;
  let configFileName: string | undefined = undefined;

  const configFileOptions = {
    ts: join(usersProjectDir, 'capacitor.config.ts'),
    js: join(usersProjectDir, 'capacitor.config.js'),
    json: join(usersProjectDir, 'capacitor.config.json'),
  };
  if (existsSync(configFileOptions.ts)) {
    usersProjectCapConfigFile = configFileOptions.ts;
    configFileName = 'capacitor.config.ts';
  } else if (existsSync(configFileOptions.js)) {
    usersProjectCapConfigFile = configFileOptions.js;
    configFileName = 'capacitor.config.js';
  } else {
    usersProjectCapConfigFile = configFileOptions.json;
    configFileName = 'capacitor.config.json';
  }

  const configData = JSON.parse(process.env.CAPACITOR_CONFIG);

  if (!existsSync(destDir)) {
    copySync(platformNodeModuleTemplateDir, destDir);
    copySync(usersProjectCapConfigFile, join(destDir, configFileName));
    // writeFileSync(
    //   join(destDir, "capacitor.config.json"),
    //   JSON.stringify(configData)
    // );
    renameSync(join(destDir, 'gitignore'), join(destDir, '.gitignore'));

    const appName: string = configData.appName;
    const platformPackageJson = readJSON(join(destDir, 'package.json'));
    const rootPackageJson = readJSON(join(usersProjectDir, 'package.json'));
    platformPackageJson.name = appName;
    if (rootPackageJson.repository) {
      platformPackageJson.repository = rootPackageJson.repository;
    }
    writePrettyJSON(join(destDir, 'package.json'), platformPackageJson);

    const platformTauriConfigJson = readJSON(
      join(destDir, 'src-tauri', 'tauri.conf.json'),
    );
    platformTauriConfigJson.package.productName = appName;
    platformTauriConfigJson.tauri.windows[0].title = appName;
    writePrettyJSON(
      join(destDir, 'src-tauri', 'tauri.conf.json'),
      platformTauriConfigJson,
    );

    await runExec(`cd ${destDir} && npm i`);
  } else {
    throw new Error('Tauri platform already exists.');
  }
}
