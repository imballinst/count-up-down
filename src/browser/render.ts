import { CountResult } from '../common/types';

/**
 * This functions renders the number of years, months, days, hours, minutes, and seconds to the DOM.
 * Behind the scene, it also pads the numbers. For example, the number `9` becomes "09". To render a complete
 * timer (from years to seconds), there must be elements in the DOM with the ID `years`, `months`, `days`, `hours`,
 * `minutes`, and `seconds`. Partial rendering is also supported, e.g. if you only want to render `years`, `months`,
 * and `days`, then only 3 elements with these IDs need to exist in the DOM.
 *
 * @param {CountResult} countResult The number of years, months, days, hours, minutes, and seconds in number.
 */
export function renderToDivs({
  years,
  months,
  days,
  hours,
  minutes,
  seconds
}: CountResult) {
  // Fill into the divs.
  const yearsDiv = document.getElementById('years');
  const monthsDiv = document.getElementById('months');
  const daysDiv = document.getElementById('days');
  const hoursDiv = document.getElementById('hours');
  const minutesDiv = document.getElementById('minutes');
  const secondsDiv = document.getElementById('seconds');

  render(yearsDiv, years);
  render(monthsDiv, months);
  render(daysDiv, days);
  render(hoursDiv, hours);
  render(minutesDiv, minutes);
  render(secondsDiv, seconds);
}

function render(el: HTMLElement | null, value: number) {
  if (el === null) {
    return;
  }

  let htmlContent = `${value}`;

  // Pad numbers when less than 2 digits.
  if (value < 10) {
    htmlContent = `0${value}`;
  }

  el.innerHTML = htmlContent;
}
