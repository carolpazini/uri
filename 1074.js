var input = require('fs').readFileSync('1074.txt', 'utf8');
var lines = input.split('\r\n');


var N = parseInt( lines[0]);
var i = parseInt( lines[1]);
var X = i++;

for (i > 1; i++;){ 


        if (X%2 == 0 && X>0){
            console.log ("EVEN POSITIVE");
        }
        else if(X%2 == 0 && X<0){
            console.log ("EVEN NEGATIVE");
        }
        else if(X%2 != 0 && X>0){
            console.log ("ODD POSITIVE");
        }
        else if(X%2 != 0 && X<0){
            console.log ("ODD NEGATIVE");
        }
        else if(X == 0)
            console.log ("NULL");
}