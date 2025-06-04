
//let livros = ["hp1", "hp2", "hp3", "hp4", "hp5", "hp6", "hp7"];
//do{
    //    for(let i=0;i<livros.length;i++){
        //        console.log("posição " + i +" livro: " + livros[i]);
        //    }
        //    livros.pop();
        //    console.log("---------------------------");
        //}while(livros.length != 0);
        //
        
        //let digitado = prompt ("Digite a tarefa: ")
        //let pergunta = prompt ("Deseja inserir uma tarefa: (s/n) ");
        //do{
            //    if (pergunta == s || S || N || n){
                //        let digitado = prompt ("Digite a tarefa: ")
                //    }
                //}while(pergunta == s || S || N || n)
                
const prompt = require("prompt-sync")();
let tarefas = [],tarefamoment;

do{
    tarefamoment = prompt("Digite a tarefa: ");
    tarefas.push(tarefamoment);
    for(let i=0;i<tarefas.length;i++){
        console.log("posição "+i+" - Tarefa: " + tarefas[i]);
    }
}