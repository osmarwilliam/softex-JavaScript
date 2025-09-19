import rl from 'readline-sync';

function adicionarTarefa(listaTarefas){
    let tarefa = rl.question("Escreva a sua tarefa: ");
    listaTarefas.push(tarefa)
}

function listarTarefas(listaTarefas){

    if (listaTarefas.length == 0) {
        console.log("\n!!!Adicione primeiramente uma tarefa!!!\n");
        return;
    }
    console.log("\n")
    listaTarefas.forEach(element => {
        console.log(`${element}`);
    });
    return 1;
}

function removerTarefa(listaTarefas){
    if (listarTarefas(listaTarefas) == undefined){
        return;
    }
    
    let index = rl.question("\nEscolha uma das tarefas para ser excluídas: ")
    listaTarefas.splice(index - 1, 1);
}

export {adicionarTarefa, listarTarefas, removerTarefa};