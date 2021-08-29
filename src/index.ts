import { calculate } from './calculate';
import { renderToDivs } from './render';

declare global {
  interface Window {
    calculate: typeof calculate;
    renderToDivs: typeof renderToDivs;
  }
}

window.calculate = calculate;
window.renderToDivs = renderToDivs;
