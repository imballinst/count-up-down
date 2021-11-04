/**
 * As opposed to the Node module, the browser module doesn't export anything. Instead,
 * the `calculate` function is exported to the `window` object. Additionally, there is
 * another `renderToDivs` function that can be used to render the numbers to the DOM.
 *
 * @module
 */

import { calculate } from '../common/calculate';
import { renderToDivs } from './render';

declare global {
  interface Window {
    calculate: typeof calculate;
    renderToDivs: typeof renderToDivs;
  }
}

window.calculate = calculate;
window.renderToDivs = renderToDivs;
