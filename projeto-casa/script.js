const botaoCadastrar = document.querySelector('form button');
const formulario = document.querySelector('form')
const inputTarefa = document.querySelector('input');

function marcarTarefaComoFeita(evento) {
    let tarefa = evento.target;
    tarefa.classList.toggle("feito");
}

function marcarTodos() {
    let listaTarefas = document.querySelectorAll("li");
    let textoButao = document.getElementById("marcar-todos");

    if (textoButao.innerHTML === "Marcar todos") {
        for (let tarefa of listaTarefas) {
            tarefa.classList.add("feito");
        }
        textoButao.innerHTML = "Desmarcar todos"
    } else {
        for (let tarefa of listaTarefas) {
            tarefa.classList.remove("feito");
        }
        textoButao.innerHTML = "Marcar todos"

    }

}

function cadastrarTarefa(evento) {
    evento.preventDefault();
    let valorInput = inputTarefa.value;
    let itemDaLista = document.createElement('li');
    let botaoExcluir= document.createElement("button");

    botaoExcluir.addEventListener('click', excluirItem)
    itemDaLista.innerHTML = valorInput;
    itemDaLista.addEventListener('click', marcarTarefaComoFeita);

    let lista = document.querySelector('ul');
    lista.appendChild(itemDaLista);
    itemDaLista.appendChild(botaoExcluir)
}
function excluirItem(evento){
    let item = evento.target.parentNode;
    item.remove();
}

formulario.addEventListener('submit', cadastrarTarefa);

