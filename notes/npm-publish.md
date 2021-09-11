We need to exclude more from these. Perhaps `lib` can be ignored, as well as `README.md`, `LICENSE`, Prettier stuff. For `npm`, it will automatically `build` anyway, so...

```
npm notice
npm notice 📦  count-up-down@0.0.1
npm notice === Tarball Contents ===
npm notice 11B   .prettierignore
npm notice 106B  .prettierrc
npm notice 1.1kB LICENSE
npm notice 202B  babel.config.js
npm notice 1.9kB lib/plugins/browserslist.js
npm notice 1.7kB lib/scripts/build/browser/build.js
npm notice 1.3kB lib/scripts/build/node/build.js
npm notice 3.2kB lib/src/calculate.js
npm notice 489B  lib/scripts/constants.js
npm notice 1.6kB dist/count-up-down-node.min.js
npm notice 1.5kB dist/count-up-down.min.js
npm notice 447B  lib/src/index-node.js
npm notice 130B  lib/scripts/build/index.js
npm notice 246B  lib/src/index.js
npm notice 6.6kB jest.config.js
npm notice 1.0kB lib/src/render.js
npm notice 870B  package.json
npm notice 386B  tsconfig.json
npm notice 2.3kB README.md
npm notice 83B   lib/plugins/browserslist.d.ts
npm notice 756B  plugins/browserslist.ts
npm notice 11B   lib/scripts/build/browser/build.d.ts
npm notice 11B   lib/scripts/build/node/build.d.ts
npm notice 497B  scripts/build/browser/build.ts
npm notice 317B  scripts/build/node/build.ts
npm notice 167B  lib/src/calculate.d.ts
npm notice 5.3kB src/__tests__/calculate.test.ts
npm notice 3.1kB src/calculate.ts
npm notice 77B   lib/scripts/constants.d.ts
npm notice 195B  scripts/constants.ts
npm notice 82B   lib/src/index-node.d.ts
npm notice 82B   src/index-node.ts
npm notice 49B   lib/scripts/build/index.d.ts
npm notice 210B  lib/src/index.d.ts
npm notice 49B   scripts/build/index.ts
npm notice 266B  src/index.ts
npm notice 217B  lib/src/render.d.ts
npm notice 987B  src/render.ts
npm notice === Tarball Details ===
npm notice name:          count-up-down
npm notice version:       0.0.1
npm notice package size:  11.5 kB
npm notice unpacked size: 37.4 kB
npm notice shasum:        e038f432cb245093cb12a13391856ddd6bdc72c9
npm notice integrity:     sha512-RiVx0P50L67V8[...]rpbkM4nJAIQvQ==
npm notice total files:   38
npm notice
```
