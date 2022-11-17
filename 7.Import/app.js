var moment = require('moment');

console.log(moment('1999-12-31').format('DD/MM/YYYY').toString());

var module = require('./module');
module.multiply(5);
module.divide(12);