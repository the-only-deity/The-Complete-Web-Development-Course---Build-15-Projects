//module
console.log(module);

const greeting = require('./lib/greeting.js');
greeting();

const average = require('./lib/school.js').average;
console.log(average([70, 55, 90, 89.144]));

console.log(require('./lib/school.js').grades);