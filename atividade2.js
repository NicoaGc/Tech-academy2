const prompt = require('prompt-sync')();
let numeros = [1,2,3,4,5,6,7,8,9,10];
let media = [];
let soma = 0,qtd;

qtd = prompt("Digite a quantidade de números que deseja calcular a média: ");

for (let i = 0; i <qtd; i++) {
    numeros[i] = number(prompt("Digite o número: "+i));
    soma = soma + numeros[i];
}
media=soma /7;
console.log(media);