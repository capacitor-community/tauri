/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const esbuild = require('esbuild');
const { readdirSync } = require('fs');
const { join } = require('path');
const tar = require('tar');

async function packTemplate() {
  const templateSrc = join('./', 'template');
  const destTemplateFilePath = join('./', 'template.tar.gz');
  const files = [];
  readdirSync(templateSrc).forEach(file => {
    files.push(file);
  });
  await tar.create(
    { gzip: true, file: destTemplateFilePath, cwd: templateSrc },
    files,
  );
  console.log(`Packed ${destTemplateFilePath}!`);
}

async function buildCliScrpts() {
  await esbuild.build({
    entryPoints: ['src/cli-scripts/index.ts'],
    bundle: true,
    outfile: 'dist/cli-scripts/cap-scripts.js',
    platform: 'node',
    target: 'node14',
    minify: true,
    external: [
      'child_process',
      'fs',
      'path',
      'fs-extra',
      'crypto',
      'chalk',
      'ora',
    ],
  });
}

(async () => {
  try {
    await buildCliScrpts();
    await packTemplate();
    console.log('\nPlatform Build Complete.\n');
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();
