const formulario = document.querySelector('form');
const inputTarefa = document.querySelector('input');
let botaoMarcarTodos = document.getElementById('marcar-todos')



function marcarTarefaComoFeita(evento) {
  let tarefaClicada = evento.target;
  tarefaClicada.classList.toggle('feito');
  // poderia ser direto assim também
  evento.target.classList.toggle('feito');
}


function marcarTodasTarefas() {
    let itensDaListaDeTarefas = document.querySelectorAll('li');
    itensDaListaDeTarefas.forEach(function (li) {
        if (li.classList.contains('checked')) {
            li.classList.remove('checked');
        } else {
            li.classList.add('checked');
        }
    });

    // Verificar se todos os itens estão marcados para 
    let todosMarcados = [...itensDaListaDeTarefas].every(function containsCheckedClass(li) {
        return li.classList.contains('checked');
      });

    // Atualizar o texto do botão com base no estado atual
    if (todosMarcados) {
        botaoMarcarTodos.textContent = 'Desmarcar Todos';
    } else {
        botaoMarcarTodos.textContent = 'Marcar Todos';
    }
}

// Adicionar o evento de clique ao botão
botaoMarcarTodos.addEventListener('click', marcarTodasTarefas);
  
  function marcarTarefa(evento) {
    evento.target.classList.toggle('checked');
  }
  
  function deletarTarefa(evento) {
    ul.removeChild(evento.target.parentElement);
  }

function cadastrarTarefa(evento) {
  // impedir que o formulário recarregue a página
  evento.preventDefault();
  let valorInput = inputTarefa.value;
  let itemDaLista = document.createElement('li');
  itemDaLista.innerHTML = valorInput;
  itemDaLista.addEventListener('click', marcarTarefaComoFeita)

  let lista = document.querySelector('ul');
  lista.appendChild(itemDaLista);
  inputTarefa.value = '';

}
formulario.addEventListener('submit', cadastrarTarefa);


let botaoLimparTodos = document.getElementById('limpar');
botaoLimparTodos.addEventListener('click', limparTodos);

function limparTodos() {
    let lista = document.querySelector('ul');
    lista.innerHTML = '';
  }

formulario.appendChild(botaoLimparTodos);


