import { build } from 'esbuild';

import * as CONSTANTS from '../../constants';

build({
  entryPoints: [`${CONSTANTS.DIST_DIR}/esm/node/index.js`],
  bundle: true,
  minify: true,
  outfile: 'dist/count-up-down-node.min.js',
  format: 'cjs',
  platform: 'node',
  plugins: []
}).catch((err) => {
  console.error(err);
  process.exit(1);
});
