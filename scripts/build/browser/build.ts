import path from 'path';
import { build } from 'esbuild';

import { BrowsersListPlugin } from '../../../plugins/browserslist';
import * as CONSTANTS from '../../constants';

build({
  entryPoints: [`${CONSTANTS.SRC_DIR}/index.js`],
  minify: true,
  bundle: true,
  outfile: 'dist/count-up-down.min.js',
  plugins: [BrowsersListPlugin],
  define: {
    PATH_TO_PACKAGE_JSON: `"${path.join(CONSTANTS.ROOT_DIR, 'package.json')}"`
  }
}).catch((err) => {
  console.error(err);
  process.exit(1);
});
