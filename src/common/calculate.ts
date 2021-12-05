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
 * @param anchorDate The anchor date
 * @param comparedDate The second date to be compared
 */
export function calculate(anchorDate = new Date(), comparedDate = new Date()) {
  let years = 0;
  let months = 0;
  let days = 0;
  let hours = 0;
  let minutes = 0;
  let seconds = 0;
  let type: 'countdown' | 'countup' | 'exact';

  // Get raw time.
  const anchorDateMs = anchorDate.getTime();
  const comparedDateMs = comparedDate.getTime();
  const diff = anchorDateMs - comparedDateMs;

  if (diff < 0) {
    type = 'countup';
  } else if (diff > 0) {
    type = 'countdown';
  } else {
    type = 'exact';
  }

  // Start from seconds first.
  seconds = anchorDate.getSeconds() - comparedDate.getSeconds();

  if (seconds < 0) {
    // When the seconds is negative, then we will take `type` into consideration.
    if (type === 'countdown') {
      seconds += ONE_MINUTE_IN_SECONDS;
      minutes--;
    } else {
      seconds = Math.abs(seconds);
    }
  }

  // Minutes.
  minutes += anchorDate.getMinutes() - comparedDate.getMinutes();

  if (minutes < 0) {
    // When the minutes is negative, then we will take `type` into consideration.
    if (type === 'countdown') {
      minutes += ONE_HOUR_IN_MINUTES;
      hours--;
    } else {
      minutes = Math.abs(minutes);
    }
  }

  // Hours.
  hours += anchorDate.getHours() - comparedDate.getHours();

  if (hours < 0) {
    // When the hours is negative, then we will take `type` into consideration.
    if (type === 'countdown') {
      hours += ONE_DAY_IN_HOURS;
      days--;
    } else {
      hours = Math.abs(hours);
    }
  }

  // Days.
  days += anchorDate.getDate() - comparedDate.getDate();

  if (days < 0) {
    // When the days is negative, then we will take `type` into consideration.
    if (type === 'countdown') {
      days += getNumberOfDaysInMonth(anchorDate);
      months--;
    } else {
      days = Math.abs(days);
    }
  }

  // Months.
  months += anchorDate.getMonth() - comparedDate.getMonth();

  if (months < 0) {
    // When the months is negative, then we will take `type` into consideration.
    if (type === 'countdown') {
      months += ONE_YEAR_IN_MONTHS;
      years--;
    } else {
      months = Math.abs(months);
    }
  }

  // Years.
  years += anchorDate.getFullYear() - comparedDate.getFullYear();

  if (years < 0) {
    // When the years is negative, then we will take `type` into consideration.
    if (type === 'countdown') {
      years += ONE_YEAR_IN_MONTHS;
    } else {
      years = Math.abs(years);
    }
  }

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
