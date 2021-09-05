// Constants.
const ONE_YEAR_IN_MONTHS = 12;
const ONE_DAY_IN_HOURS = 24;
const ONE_HOUR_IN_MINUTES = 60;
const ONE_MINUTE_IN_SECONDS = 60;

const ONE_HOUR_IN_SECONDS = ONE_MINUTE_IN_SECONDS * 60;
const ONE_DAY_IN_SECONDS = ONE_HOUR_IN_SECONDS * 24;
const ONE_DAY_IN_MILLISECONDS = ONE_DAY_IN_SECONDS * 1000;
// Re-assign functions from JavaScript engine.
const { floor } = Math;

export function calculate(date1 = new Date(), date2 = new Date()) {
  // Not sure what is the correct term, I use "smaller" and "bigger"
  // because technically as time progresses, the milliseconds also increases.
  let smallerDate = date1;
  let biggerDate = date2;
  let years: number;
  let months: number;
  let days: number;
  let hours: number;
  let minutes: number;
  let seconds: number;
  let type: 'countdown' | 'countup' | 'exact';

  // Get raw time.
  let smallerMilliSeconds = smallerDate.getTime();
  let biggerMilliSeconds = biggerDate.getTime();
  let diff = biggerMilliSeconds - smallerMilliSeconds;

  if (diff < 0) {
    type = 'countdown';
    diff = Math.abs(diff);
    // Flip the variables.
    biggerDate = date1;
    biggerMilliSeconds = date1.getTime();

    smallerDate = date2;
    smallerMilliSeconds = date2.getTime();
  } else if (diff > 0) {
    type = 'countup';
  } else {
    type = 'exact';
  }

  // We can cut off years first as the number of days is static, 365 or 366.
  years = biggerDate.getFullYear() - smallerDate.getFullYear();

  // For months and days, however, it's a little bit tricky.
  const smallerMonth = smallerDate.getMonth();
  const biggerMonth = biggerDate.getMonth();

  // Don't forget to subtract this if date, hours, minutes, seconds is lesser.
  months = biggerMonth - smallerMonth;

  // Days.
  const smallerDateInMonth = smallerDate.getDate();
  const biggerDateInMonth = biggerDate.getDate();

  days = biggerDateInMonth - smallerDateInMonth;

  // We use this to calculate time.
  const daysRemainder = Math.floor((diff % ONE_DAY_IN_MILLISECONDS) / 1000);

  // Time.
  hours = floor(daysRemainder / ONE_HOUR_IN_SECONDS);
  const hoursRemainder = daysRemainder % ONE_HOUR_IN_SECONDS;

  minutes = floor(hoursRemainder / ONE_MINUTE_IN_SECONDS);
  const minutesRemainder = hoursRemainder % ONE_MINUTE_IN_SECONDS;

  seconds = minutesRemainder % ONE_MINUTE_IN_SECONDS;

  // Check hours.
  if (days > 0 && daysRemainder > 0) {
    days--;
  }

  // // Check days.
  // if (days < 0) {
  //   days += getNumberOfDaysInMonth(biggerDate);
  //   months--;
  // }

  // if (months < 0) {
  //   months = ONE_YEAR_IN_MONTHS + months;
  //   years--;
  // }

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

function processResult(rawResult: { [index: string]: number }) {
  const result: { [index: string]: number } = {};

  Object.keys(rawResult).forEach((k) => {
    const value = rawResult[k];
    result[k] = value < 0 ? Math.abs(value) : value;
  });

  return result;
}
