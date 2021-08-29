import esbuild from 'esbuild';
import * as CONSTANTS from '../../constants';

esbuild
  .build({
    entryPoints: [`${CONSTANTS.SRC_DIR}/index.ts`],
    bundle: true,
    minify: true,
    outfile: 'build/count-up-down.js',
    plugins: [
      {
        name: 'test',
        setup: (build) => {
          build.initialOptions.target;
        }
      }
    ]
  })
  .catch(() => process.exit(1));
