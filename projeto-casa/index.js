const button = document.querySelector('.button-add-task');
const input = document.querySelector('.input-task');
const listadeTarefas = document.querySelector('.list-tasks');

let minhaLista = [];

function adicionarTarefas() {
  minhaLista.push({
    
  tarefa: input.value,
  concluida: false
})

 input.value = '';

 mostrarTarefas();
}
function mostrarTarefas() {
  let novaListaTarefa = '';

  minhaLista.forEach((item, index) => {
    novaListaTarefa = novaListaTarefa + `
         
        <li class="task ${item.concluida && "done"}">
            <img src="./img/img-ok.jpg" alt="Tarefa realizada" onclick="marcarTarefa(${index})"/>
            <p>${item.tarefa}</p>
            <img src="./img/trash.png" alt="apagar tarefa" onclick="deletarItem(${index})"/>
        </li>    
         `  
        
  })

listadeTarefas.innerHTML = novaListaTarefa;

}

function marcarTarefa(index){
    minhaLista[index].concluida = !minhaLista[index].concluida

    mostrarTarefas();
}

function deletarItem(index){
    minhaLista.splice(index, 1)

    mostrarTarefas();

}


button.addEventListener("click", adicionarTarefas);
