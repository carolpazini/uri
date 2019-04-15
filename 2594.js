var input = require('fs').readFileSync('2594.txt', 'utf8');
var lines = input.split('\r\n');

var quantidade = parseInt(lines[0])
var listStr = new Array()
var codigo;
var palavra;
var index
var j;
var indexCompleto
var w = 1

for (z = 0; z < quantidade; z++){

listStr = lines[w].toString().split(" ")
codigo = lines[w+1].toString()
index = 0
j = 0
indexCompleto = ""

for (i = 0; i < listStr.length; i++) {

        palavra = listStr[i];

        if (palavra == codigo) {
           
            if (j == 0) {
                indexCompleto = index
                
            } else {
                indexCompleto = indexCompleto + " " + index
            }
            j = j + 1;

        }
        index = index + palavra.length + 1
    }
    if (j != 0) {
        console.log(indexCompleto);
        
    }else {
        console.log("-1");
    
    }
w = w + 2

}

