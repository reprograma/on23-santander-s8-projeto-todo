const formulario = document.querySelector("form");
const inputTarefa = document.querySelector("input");
let marcarTodosOsItens = document.getElementById("marcar-todos");
let lista = document.querySelector("ul");

marcarTodosOsItens.addEventListener("click", marcarTodas);

/*botao de marcar todos os itens*/
function marcarTodas(evento) {
  let marcarItens = document.querySelectorAll("li");
  for (const item of marcarItens) {
    item.classList.add("feito");
  }
}

/*botao de limpar todos os itens*/
const botaoLimpar = document.getElementById("limpar");
botaoLimpar.addEventListener("click", limpar);

function limpar() {
  lista.innerHTML = "";
}

/*para ficar verde ao clicar na tarefa*/
function marcarTarefaComoFeita(evento) {
  let tarefaClicada =
    evento.target; /*com o query selector, só vai clicar no primeiro, com o target, ele consegue ver qual elemento foi clicado*/
  tarefaClicada.classList.toggle("feito");
}

/*para deletar apenas um item com a lixeira*/
function deletarTarefa(evento) {
  lista.removeChild(evento.target.parentElement);
  /*target é alvo em inglês, o evento.target é para saber quem sofreu a ação daquele evento e o parentElement serve para navegar pelos elementos da "família"*/
}

/*para cadastrar uma tarefa*/
function cadastrarTarefa(evento) {
  /* Estamos usando o prevent.Default porque estamos usando o submit e serve para não recarregar a página sumindo o valor do input. //
     Coloquei o parâmetro para poder usar o prevent.Default//
     */
  evento.preventDefault();
  let valorInput = inputTarefa.value;
  let li =
    document.createElement(
      "li"
    ); /*criando o li, que vai estar dentro do ul que já está no html.*/
  li.innerHTML = valorInput;
  li.addEventListener("click", marcarTarefaComoFeita);

  let botaoLixeira = document.createElement("button");
  li.appendChild(
    botaoLixeira
  ); /*o li é a mãe onde queremos colocar o botão e entre parênteses o filho*/
  botaoLixeira.addEventListener("click", deletarTarefa);

  // let lista = document.querySelector('ul'); /*comentada porque foi realocada lá para cima*/
  lista.appendChild(li);
  inputTarefa.value = "";
  /* o value = '' está tirando o valor do input quando clicamos em enviar, para poder digitar outra coisa sem precisar apagar.*/
}

formulario.addEventListener("submit", cadastrarTarefa);
