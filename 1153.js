var input = require('fs').readFileSync('1153.txt', 'utf8');
var lines = input.split('\r\n');

var N = parseInt(lines[0]);
var fatorial = 1;


for (var i = 1; i<= N; i++){

    fatorial = fatorial * i;

}
    console.log(fatorial);