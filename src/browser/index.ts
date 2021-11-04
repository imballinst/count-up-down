/**
 * In the browser module, all functions are not only re-exported, but they are also exposed
 * in the `window` object. This is for ease of use, so that we can call them directly in the browser.
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

export { calculate, renderToDivs };
