const prompt = require('prompt-sync')();
const montaObjeto = (nomeAluno) => {
    let aluno = {
        nome: undefined,
        idade: undefined,
        turma: undefined
    }
    aluno.nome = nomeAluno;
    aluno.idade = prompt("Informe a idade do "+nomeAluno+": ");
    aluno.turma = prompt("Informe a turma do "+nomeAluno+": ");
    return aluno;
}

let sala = [];
for (let i = 0; i < 3; i++) {
    sala.push(montaObjeto)
}