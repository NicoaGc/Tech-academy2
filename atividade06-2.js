const prompt = require('prompt-sync')();
let nomes = []
let continuar, i=0;

do{
    nomes[i]= prompt("Informe o nome: ");
    i++;
    continuar = prompt("Deseja continuar? (s/n): ");
}while(continuar == 's' || continuar == 'S')

console.log("Foram informados" + i + " nomes");
console.log(nomes);