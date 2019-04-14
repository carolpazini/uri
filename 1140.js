		var input = require('fs').readFileSync('1140.txt', 'utf8');
		var lines = input.split('\r\n');


		var totFrases = lines.length; //todas as frases

		for (var j = 0; j <= totFrases; j++){
			 var frase = lines[j]; // pega as frases bonitinho

			if( frase == "*" ){
				break; // quebra o loop infinito
			}
			frase = lines[j].toLowerCase(); // padroniza a frase
				
		    var qtdPalavras = frase.split(" ").length; //pega as palavras
		    var letraPadrao = frase.split(" ")[0].charAt(0); //pega as letras
		    var count = 0; // coloca um contador

		    for (var i = 0; i < qtdPalavras; i++){

		        if(frase.split(" ")[i].charAt(0) === letraPadrao){       	
		        	count++ //ve se as primeiras letras sai iguais
		        }

		    }
			// checa as coisas
		    if (count === qtdPalavras){
		        console.log("Y");
		    }
		    else {
		        console.log("N");
		    }
		    	
			
			
		}
