var input = require('fs').readFileSync('1160.txt', 'utf8');
var lines = input.split('\r\n');

var T = parseInt( lines[0]);
var infos = new Array(); //cria um novo array

for (var i = 0; i < T; i++){

    var infos =  lines[i+1].toString().split(" ");
//quebra a linha separa os dados

    var PA = parseFloat (infos[0]) ;
    var PB = parseFloat (infos[1]) ;
    var G1 = parseFloat (infos[2]) ;
    var G2 = parseFloat (infos[3]) ;
//aqui em cima dos dados estao bonitinhos e separadinhos

    var resultado;

    for(a = 1; a<101;a++){
//verificando a quantidade de anos

        resultado = 0;

        var PA1 = parseInt ((PA * G1)/100)+PA;
        var PB1 = parseInt ((PB * G2)/100)+PB;
 
        var PA = PA1;
        var PB = PB1;
 


        if (PA > PB) {
            resultado = 1
            console.log(a + " anos.")
            break;
        }
    }
        
        if (resultado == 0) {
         console.log("Mais de 1 seculo.")
        }


    }

    

