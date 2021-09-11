const { calculate } = require('../../dist/count-up-down-node.min');

const date = new Date();
const date1HourBefore = new Date(date.getTime() - 3600 * 1000);

console.log(calculate(date, date1HourBefore));
