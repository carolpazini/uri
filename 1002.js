var input = require('fs').readFileSync('1002.txt', 'utf8');
var lines = input.split('\r\n');


var r = parseFloat( lines[0]);


console.log("A="+ (3.14159*(r*r)).toFixed(4));