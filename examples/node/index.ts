import { calculate } from 'count-up-down';

const ONE_HOUR_AGO = new Date(new Date().getTime() - 3600 * 1000);

// {
//   result: { days: 0, hours: 1, minutes: 0, months: 0, seconds: 0, years: 0 },
//   type: 'countdown'
// }
console.log(calculate(new Date(), ONE_HOUR_AGO));
