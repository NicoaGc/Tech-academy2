const prompt = require('prompt-sync')();

let numeros = [1,-2,9,-7,6,4,-5,8,9,10];
let qtdNumerosnegativos = 0, somaNumerosPositivos=0;

for(let i=0;i<10;i++){
    if (numero[i] < 0){
        qtdNumerosnegativos++;
    }else{
        somaNumerosPositivos = somaNumerosPositivos + numero[i];
    }
}

console.log("Existiu" +qtdNumerosnegativos+" números negativos");