import { build } from 'esbuild';

import * as CONSTANTS from '../../constants';

build({
  entryPoints: [`${CONSTANTS.DIST_DIR}/esm/node/index.js`],
  bundle: true,
  minify: true,
  outfile: 'dist/count-up-down-node-esm.min.js',
  format: 'esm',
  platform: 'node',
  plugins: []
}).catch((err) => {
  console.error(err);
  process.exit(1);
});
