const formulario = document.querySelector('form');
const inputTarefa = document.querySelector('input');
let marcarTodosOsItens = document.getElementById('marcar-todos');
let lista = document.querySelector('ul');

marcarTodosOsItens.addEventListener('click', marcarTodas);

/*botao de marcar todos os itens*/
function marcarTodas (evento){
    let marcarItens = document.querySelectorAll('li')
    for (const item of marcarItens) {
        item.classList.add('feito')
    }
}

/*botao de limpar todos os itens*/
const botaoLimpar = document.getElementById('limpar')
botaoLimpar.addEventListener('click', limpar)

function limpar() {
    lista.innerHTML = '';
}

/*para ficar verde ao clicar na tarefa*/
function marcarTarefaComoFeita(evento) {
    let tarefaClicada = evento.target; /*com o query selector, só vai clicar no primeiro, com o target, ele consegue ver qual elemento foi clicado*/
    tarefaClicada.classList.toggle('feito');
}

/*para cadastrar uma tarefa*/
function cadastrarTarefa(evento) {
    /* Estamos usando o prevent.Default porque estamos usando o submit e serve para não recarregar a página sumindo o valor do input. //
     Coloquei o parâmetro para poder usar o prevent.Default//
     */
    evento.preventDefault();
    let valorInput = inputTarefa.value;
    let li = document.createElement('li'); /*criando o li, que vai estar dentro do ul que já está no html.*/
    li.innerHTML = valorInput;
    li.addEventListener('click', marcarTarefaComoFeita);

    // let lista = document.querySelector('ul');
    lista.appendChild(li);
    inputTarefa.value = '';
    /* o value = '' está tirando o valor do input quando clicamos em enviar, para poder digitar outra coisa sem precisar apagar.*/

}

formulario.addEventListener('submit', cadastrarTarefa);
