import { calculate } from 'count-up-down';

const ONE_HOUR_AGO = new Date(new Date().getTime() - 3600 * 1000);

console.log(calculate(new Date(), ONE_HOUR_AGO));
// This is to demonstrate the error if we pass `123` to `calculate`.
console.log(calculate(123, ONE_HOUR_AGO));
