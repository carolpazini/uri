var input = require('fs').readFileSync('1001.txt', 'utf8');
var lines = input.split('\r\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
var a = parseInt( lines[0]);
var b = parseInt( lines[1]);

    console.log("X = "+ (a+b));