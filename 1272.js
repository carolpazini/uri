var input = require('fs').readFileSync('1272.txt', 'utf8');
var lines = input.split('\r\n');

var testes = parseInt(lines[0]);
var frase = new Array(); //todas as frases

	for (var i = 0; i < testes; i++){
	
        var frase = lines[i+1].toString().split(" "); 
        var palavra;
        var msg = ""; 

	for (var j = 0; j < frase.length; j++){
        palavra = frase[j];
        msg = msg + palavra.substring(0,1);

    }
        console.log(msg);
    }