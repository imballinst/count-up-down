import { build } from 'esbuild';

import * as CONSTANTS from '../../constants';

build({
  entryPoints: [`${CONSTANTS.SRC_DIR}/index-node.js`],
  bundle: true,
  outfile: 'dist/count-up-down-node.js',
  format: 'cjs',
  plugins: []
}).catch((err) => {
  console.error(err);
  process.exit(1);
});
