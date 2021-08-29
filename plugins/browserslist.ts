import { Plugin } from 'esbuild';
import browserslist from 'browserslist';
import fs from 'fs/promises';

export const BrowsersListPlugin: Plugin = {
  name: 'esbuild-plugin-browserslist',
  setup: async (build) => {
    const pathToPackageJson = build.initialOptions.define?.PATH_TO_PACKAGE_JSON;

    if (pathToPackageJson) {
      const purePath = pathToPackageJson.replace(/\"/g, '');
      const file = await fs.readFile(purePath, 'utf-8');
      const json = JSON.parse(file);

      if (json.browserslist) {
        const browsers = browserslist(json.browserslist);
        const esbuildBrowsers = browsers.map((browser) =>
          browser.replace(/\s+/g, '')
        );
        build.initialOptions.target = esbuildBrowsers;
      }
    }
  }
};
