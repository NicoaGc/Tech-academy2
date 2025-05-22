const prompt = require("prompt-sync")();
let numeros = [5,9,7,6,70,60,34,11,25];
let valor = prompt("Qual valor será buscado: ");
let posicao = null;

for(let i=0;i<10;i++){
    if(numeros[i] == valor){
        posicao = i;
    }
}

if(posicao == null){
    console.log("Valor não encontrado" +valor);
}else{
    console.log("O Valor " + valor + " encontrado na posição: " + posicao);
}