var input = require('fs').readFileSync('2830.txt', 'utf8');
var lines = input.split('\r\n');

var K = parseInt(lines[0]);
var L = parseInt(lines[1]);

if (parseInt((L - 1) / 2) == parseInt((K - 1) / 2)) {
console.log("oitavas");
return;
}

if (parseInt((L - 1) / 4) == parseInt((K - 1)/ 4)) {
console.log("quartas");
return;
}

if (parseInt((L - 1) / 8) == parseInt((K - 1)/ 8)) {
console.log("semifinal");
return;
}

if (parseInt((L - 1) / 16) == parseInt((K - 1)/ 16)) {
console.log("final");
return;
}
