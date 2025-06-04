const prompt = require('prompt-sync')();
let nomes = [], notas = [];
let continuar, i=0;

do{
    nomes[i]= prompt("Informe o nome: ");
    i++;
    continuar = prompt("Deseja continuar? (s/n): ");
}while(continuar == 's' || continuar == 'S')

//console.log("Foram informados" + i + " nomes");
//console.log(nomes);

for(let i=0; i<nomes.length; i++){
    notas[i] = prompt("Informe a nota do aluno " + nomes[i] + ":");
}

for(let i=0; i<nomes.length; i++){
    console.log("Nome: " + nomes[i] + " Nota: " + notas[i]);
}