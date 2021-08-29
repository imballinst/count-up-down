export function renderToDivs({
  years,
  months,
  days,
  hours,
  minutes,
  seconds
}: {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}) {
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
