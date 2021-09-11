import { calculate } from '../../lib/src/calculate';

const date = new Date();
const date1HourBefore = new Date(date.getTime() - 3600 * 1000);

console.log(calculate(date, date1HourBefore));
// This will result in TypeError because `123` can't be assigned as type `Date`.
// console.log(calculate(123, date1HourBefore));
