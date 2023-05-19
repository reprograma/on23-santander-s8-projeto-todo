const formulario = document.querySelector("form");
const inputTarefa = document.querySelector("input");
const btnMarcarTodos = document.getElementById("marcar-todos");
const btnLimpar = document.getElementById("limpar");

let listaHtml = document.querySelector("ul");

formulario.addEventListener("submit", cadastrarTarefa);
btnMarcarTodos.addEventListener("click", riscarTodasTarefas);
btnLimpar.addEventListener("click", limparTarefas);

function cadastrarTarefa(evento) {
  evento.preventDefault(); //impedir que a pagina recarregue
  let valorInput = inputTarefa.value;
  let listaTarefa = document.createElement("li");
  listaTarefa.innerHTML = valorInput;
  listaHtml.appendChild(listaTarefa);
  listaTarefa.addEventListener("click", riscarUmaTarefaFeita);
  inputTarefa.value = "";

  let botaoDeletar = document.createElement("button");
  botaoDeletar.addEventListener("click", deletarTarefa)
  listaTarefa.appendChild(botaoDeletar);

  if (valorInput == 0) {
    document.getElementById("mensagemDeErro").style.display = "block";
  } else {
    document.getElementById("mensagemDeErro").style.display = "none";
  }
}

function deletarTarefa(evento) {
listaHtml.removeChild(  evento.target.parentElement)
}


function riscarUmaTarefaFeita(e) {
  let tarefaClicada = e.target;
  tarefaClicada.classList.toggle("feito");
}

function riscarTodasTarefas() {
  let riscarTarefas = document.querySelectorAll("li");
  for (let marcacao of riscarTarefas) {
    marcacao.classList.toggle("feito");
  }
}

function limparTarefas() {
  listaHtml.innerHTML = "";
}
