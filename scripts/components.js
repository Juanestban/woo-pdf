const fs = require('fs');
const path = require('path');
const { templateComponent, templateCSS } = require('./templates');

const args = process.argv.filter((_, idx) => idx > 1);

// node ./scripts/components.js Footer type=components === default [components | pages]
// yarn gc
const [componentName /** typePath */] = args;
const fileComponent = templateComponent(componentName);
const fileIndex = `export { default as ${componentName} } from './${componentName}';
export type { ${componentName}Props } from './${componentName}';`;

const dir = process.cwd();
const getPath = (component) =>
  path.resolve(dir, `components/${componentName}/${component}`);

// paths
const componentPath = getPath(`${componentName}.tsx`);
const indexPath = getPath('index.ts');
const stylesPath = getPath(`${componentName}.module.css`);

const rute = path.resolve(dir, `components/${componentName}`);

if (!fs.existsSync(rute)) fs.mkdirSync(rute);

// file component
fs.writeFileSync(componentPath, fileComponent);

// file index
fs.writeFileSync(indexPath, fileIndex);

// file style
fs.writeFileSync(stylesPath, templateCSS);

console.log('[🍕] created component!');
