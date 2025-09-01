import rl from '../node_modules/readline-sync/lib/readline-sync.js';


import { adicionarTarefa, listarTarefas, removerTarefa } from "./modulo/functions.js"

function gerenciadorTarefas(){
    const opcoes = ["adicionar uma tarefa", "listar todas as tarefas", "remover uma tarefa"];
    let optionSelectByUser = 1;
    let listaTarefas = [];
    while (optionSelectByUser != -1){
        optionSelectByUser = rl.keyInSelect(opcoes, "Escolha uma das oppçes: ", {cancel : "Sair do gerenciador"} );
        
        if (optionSelectByUser === 0 ){
            adicionarTarefa(listaTarefas);
        } else if(optionSelectByUser === 1){
            listarTarefas(listaTarefas);
        } else if (optionSelectByUser === 2){
            removerTarefa(listaTarefas);
        } else{
            console.log("Saindo do gerenciador...")
        }

    }
}

gerenciadorTarefas();
