#! /usr/bin/env node
const shell = require('shelljs');
const path = require('path');
const fs = require('fs');
const dir = process.cwd();

const folder = fs.readdirSync(path.resolve(dir, 'public'));
const filesForRemove = [/workbox-+\w*\.js|(\.map)/gi, /sw\.js|(\.map)/gi];
console.clear();

for (const filename of folder) {
  if (filesForRemove[0].test(filename) || filesForRemove[1].test(filename)) {
    console.log(`[⭕] file ${filename} removed`);
    fs.rmSync(path.resolve(dir, `public/${filename}`));
  }
}

console.log('[🟢] cleanned file unused');
shell.exec('yarn next-dev');
