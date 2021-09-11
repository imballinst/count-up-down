const { calculate } = require('count-up-down');

const ONE_HOUR_AGO = new Date(new Date().getTime() - 3600 * 1000);

console.log(calculate(new Date(), ONE_HOUR_AGO));
