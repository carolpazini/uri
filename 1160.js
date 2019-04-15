var input = require('fs').readFileSync('1160.txt', 'utf8');
var lines = input.split('\r\n');

var T = parseInt( lines[0]);


var PA = parseInt( lines[1]);
var PB = parseInt( lines[1]);

var ANOS = parseInt;

var G1 = parseFloat( lines[1]);
var G2 = parseFloat( lines[1]);


for(var i = 0; i < T; i++) {

    var X = parseInt( lines[i]);

    var X = PA.split(" ")+PB.split(" ")+G1.split(" ")+G2.split(" ");


    while(PA <= PB) {

       var PA1 = ((PA * G1)/100)+PA;
       var PB1 = ((PB * G2)/100)+PB;

       var PA = PA1;
       var PB = PB1;

       ANOS++;
    }
    if(ANOS > 100) {
        console.log("Mais de 1 seculo.");
    }
    
    else {
        console.log(ANOS +" anos");
    }
      
}