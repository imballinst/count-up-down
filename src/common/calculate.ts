import { CountResult } from './types';

// Types.
type ResultKeys = keyof CountResult;

// Constants.
const ONE_MINUTE_IN_SECONDS = 60;

const ONE_HOUR_IN_MINUTES = 60;
const ONE_HOUR_IN_SECONDS = ONE_MINUTE_IN_SECONDS * 60;

const ONE_DAY_IN_HOURS = 24;
const ONE_DAY_IN_SECONDS = ONE_HOUR_IN_SECONDS * 24;
const ONE_DAY_IN_MILLISECONDS = ONE_DAY_IN_SECONDS * 1000;

const ONE_YEAR_IN_MONTHS = 12;
// Re-assign functions from JavaScript engine.
const { floor } = Math;

/**
 * Calculates the difference of 2 dates. When the numbers inside `result` are negatives,
 * then it means it is count down and when they are positives, then it means it is count up.
 * This also reflects in the `type` field in the function return.
 *
 * @param date1 The base date
 * @param date2 The second date to be compared
 */
export function calculate(date1 = new Date(), date2 = new Date()) {
  let type: 'countdown' | 'countup' | 'exact';

  // Get raw time.
  const date1Ms = date1.getTime();
  const date2Ms = date2.getTime();
  const diff = date1Ms - date2Ms;

  if (diff < 0) {
    type = 'countup';
  } else if (diff > 0) {
    type = 'countdown';
  } else {
    type = 'exact';
  }

  const { years, months, days, hours, minutes, seconds } =
    type === 'countdown' ? getDiff(date1, date2) : getDiff(date2, date1);

  return {
    result: processResult({ years, months, days, hours, minutes, seconds }),
    type
  };
}

// Helper functions.
function getNumberOfDaysInMonth(date: Date) {
  const endOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);

  return endOfMonth.getDate();
}

function processResult(rawResult: CountResult) {
  const result: CountResult = {
    days: 0,
    hours: 0,
    minutes: 0,
    months: 0,
    seconds: 0,
    years: 0
  };
  const keys = Object.keys(rawResult) as ResultKeys[];

  keys.forEach((k) => {
    const value = rawResult[k];
    result[k] = value < 0 ? Math.abs(value) : value;
  });

  return result;
}

function getDiff(biggerDate: Date, smallerDate: Date) {
  let years = 0;
  let months = 0;
  let days = 0;
  let hours = 0;
  let minutes = 0;
  let seconds = 0;

  if (biggerDate.valueOf() !== smallerDate.valueOf()) {
    // Start from seconds first.
    seconds = biggerDate.getSeconds() - smallerDate.getSeconds();

    if (seconds < 0) {
      seconds += ONE_MINUTE_IN_SECONDS;
      minutes--;
    }

    // Minutes.
    minutes += biggerDate.getMinutes() - smallerDate.getMinutes();

    if (minutes < 0) {
      minutes += ONE_HOUR_IN_MINUTES;
      hours--;
    }

    // Hours.
    hours += biggerDate.getHours() - smallerDate.getHours();

    if (hours < 0) {
      hours += ONE_DAY_IN_HOURS;
      days--;
    }

    // Days.
    days += biggerDate.getDate() - smallerDate.getDate();

    if (days < 0) {
      days += getNumberOfDaysInMonth(smallerDate);
      months--;
    }

    // Months.
    months += biggerDate.getMonth() - smallerDate.getMonth();

    if (months < 0) {
      months += ONE_YEAR_IN_MONTHS;
      years--;
    }

    // Years.
    years += biggerDate.getFullYear() - smallerDate.getFullYear();

    if (years < 0) {
      years += ONE_YEAR_IN_MONTHS;
    }
  }

  return {
    years,
    months,
    days,
    hours,
    minutes,
    seconds
  };
}
