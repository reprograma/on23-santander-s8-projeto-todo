const formulario = document.querySelector("form");
const inputTarefa = document.querySelector("input");
let botaoMarcarTodos = document.getElementById("marcar-todos")
let botaoDeletarTodos = document.getElementById('limpar');
let deletarLista = document.querySelector("ul")



//função para indicar que a tarefa foi concluida
function tarefaConcluida(evento) {
    console.log(evento.target)
    let tarefaClicada = evento.target
    tarefaClicada.classList.toggle('checked')

}

function marcarTodasTarefas() {
    let itemDaListaDeTarefas = document.querySelectorAll('li');
    itemDaListaDeTarefas.forEach(function (li) {
        if (li.classList.contains('checked')) {
            li.classList.remove('checked');
        } else {
            li.classList.add('checked');
        }
    });

    // Verificar se todos os itens estão marcados para 
    let todosMarcados = [...itemDaListaDeTarefas].every(function containsCheckedClass(li) {
        return li.classList.contains('checked');
    });

    // Para atualizar o texto do botão descamarcar e marcar
    if (todosMarcados) {
        botaoMarcarTodos.textContent = 'Desmarcar Todos';
    } else {
        botaoMarcarTodos.textContent = 'Marcar Todos';
    }
}

// Adicionar o evento de clique ao botão para chamar a função
botaoMarcarTodos.addEventListener('click', marcarTodasTarefas);


function cadastrarTarefas(evento) {
    evento.preventDefault();
    let divButton = document.createElement("div")

    let itemTarefa = inputTarefa.value;
    let itemLista = document.createElement("li");
    itemLista.innerHTML = itemTarefa;

    itemLista.addEventListener("click", tarefaConcluida);
    let lista = document.querySelector("ul");

    inputTarefa.value = '';


    let imgDelete = document.createElement('button');

    imgDelete.addEventListener('click', deletarTarefa);

    //
    divButton.appendChild(itemLista);
    divButton.appendChild(imgDelete);
    lista.appendChild(divButton);
}


formulario.addEventListener("submit", cadastrarTarefas);



function deletarTarefa(evento) {
    deletarLista.removeChild(evento.target.parentElement)

}



function limparTodos() {
    let lista = document.querySelector('ul');
    lista.innerHTML = '';
}
botaoDeletarTodos.addEventListener('click', limparTodos);


