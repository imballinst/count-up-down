# count-up-down

This is the base repository that I use to create a simple static page for counting up or down.

## How to Use

### Browser

We are using [jsDelivr](https://www.jsdelivr.com/) to distribute the package for browser usage. The HTML snippet is as the following.

```html
<div class="root">
  <div class="row">
    <div class="wrapper">
      <div class="value" id="years"></div>
      <div class="unit">years</div>
    </div>
    <div class="wrapper">
      <div class="value" id="months"></div>
      <div class="unit">months</div>
    </div>
    <div class="wrapper">
      <div class="value" id="days"></div>
      <div class="unit">days</div>
    </div>
  </div>
  <div class="row">
    <div class="wrapper">
      <div class="value" id="hours"></div>
      <div class="unit">hours</div>
    </div>
    <div class="wrapper">
      <div class="value" id="minutes"></div>
      <div class="unit">minutes</div>
    </div>
    <div class="wrapper">
      <div class="value" id="seconds"></div>
      <div class="unit">seconds</div>
    </div>
  </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/count-up-down@0.2.0/dist/count-up-down.min.js"></script>
<script>
  const ONE_HOUR_AGO = new Date(new Date().getTime() - 3600 * 1000);

  window.addEventListener('load', () => {
    // This will render to the divs with the ID "years", "months", and so on.
    renderToDivs(calculate(ONE_HOUR_AGO, new Date()).result);

    setInterval(() => {
      renderToDivs(calculate(ONE_HOUR_AGO, new Date()).result);
    }, 1000);
  });
</script>
```

### Node

To install the package, if you are using `npm`:

```bash
# NPM.
npm install --save count-up-down

# Or, if you are using yarn:
yarn add count-up-down
```

Then, do this in your file:

```ts
import { calculate } from 'count-up-down';

const ONE_HOUR_AGO = new Date(new Date().getTime() - 3600 * 1000);

console.log(calculate(new Date(), ONE_HOUR_AGO));
```

## Documentation

The API documentation is generated using [`typedoc`](https://github.com/TypeStrong/typedoc). Below are the links to the browser and Node package:

1. [Browser](./api/docs/modules/browser.md)
2. [Node](./api/docs/modules/node.md)

To re-generate the documentation, we can do `yarn generate:doc` on the the root of this repository.

## Development

### Prerequisites

1. [Yarn](https://yarnpkg.com/) Classic (v1)
2. [Node.js®](https://nodejs.org/) LTS (at least v14)

After that, on root project, do this to install the dependencies:

```bash
yarn
```

### Folder Information

The following is the information on each of the important folders in this repository.

1. `plugins` folder contains the plugins for `esbuild`
2. `scripts` folder contains build scripts
3. `src` folder contains the main library code

## Versioning

This library follows semantic versioning. Please visit https://semver.org for more information.

## License

See [LICENSE](./LICENSE).
