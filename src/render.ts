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

  yearsDiv.innerHTML = appendZeros(years);
  monthsDiv.innerHTML = appendZeros(months);
  daysDiv.innerHTML = appendZeros(days);
  hoursDiv.innerHTML = appendZeros(hours);
  minutesDiv.innerHTML = appendZeros(minutes);
  secondsDiv.innerHTML = appendZeros(seconds);
}

function appendZeros(value: number) {
  if (value < 10) {
    return `0${value}`;
  }

  return `${value}`;
}
