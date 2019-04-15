var input = require('fs').readFileSync('2830.txt', 'utf8');
var lines = input.split('\r\n');

var K = parseInt(lines[0]);
var L = parseInt(lines[1]);

if((K <= 8 && L>= 9) || (L <= 8 && K>= 9)){
    console.log("final");
}
else if(K > L) {
    if( K <= 8 && L <= 8){
        if(K <= 4 && L <= 4){
            if( (K - L) == 1){
                console.log("oitavas");
            } else if (K - L == 2 || K - L == 3){
                console.log("quartas");
            }else
                console.log("semifinal");
        } else if ((K >= 5 || K <= 8) && (L >= 5 || L <= 8 )) {
            if( (K - L) == 1){
                console.log("oitavas");
            } else if (K - L == 2 || K - L == 3){
                console.log("quartas");

            }else
                console.log("semifinal");
        }
    }
} else  {
    if( K <= 8 && L <= 8){
        if(K <= 4 && L <= 4){
            if( (L - K) == 1){
                console.log("oitavas");
            } else if (L - K == 2 || K - L == 3){
                console.log("oitavas");

            }else
                console.log("semifinal");
        } else if ((K >= 5 || K <= 8) && (L >= 5 || L <= 8 )) {
            if( (L - K) == 1){
                console.log("oitavas");
            } else if (L - K == 2 || K - L == 3){
                console.log("quartas");

            }else
                console.log("semifinal");
        }
    }
}