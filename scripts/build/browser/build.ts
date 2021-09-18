import { build } from 'esbuild';

import { BrowsersListPlugin } from '../../../plugins/browserslist';
import * as CONSTANTS from '../../constants';

build({
  entryPoints: [`${CONSTANTS.DIST_DIR}/dist/cjs/index.js`],
  minify: true,
  bundle: true,
  outfile: 'dist/count-up-down.min.js',
  plugins: [BrowsersListPlugin],
  platform: 'browser'
}).catch((err) => {
  console.error(err);
  process.exit(1);
});
