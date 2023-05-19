const formulario = document.querySelector('form')
const inputTarefa = document.querySelector('input')

function tarefaFeita(evento) {
    let tarefa = document.querySelector('li')
    let tarefaClicada = evento.target;
    tarefaClicada.classList.toggle('feito');
   
}

function marcarTodas(evento) {
    let marcarTodasTarefas = document.querySelectorAll('li');
    for(const marcarItens of marcarTodasTarefas){
        marcarItens.classList.toggle('feito');
    }
} 
marcarTodos.addEventListener('click', marcarTodas)

function deletarTodos(evento) {
    let deletarTodasTarefas = document.querySelectorAll('li');
    for(const deletaritens of deletarTodasTarefas){
        deletaritens.remove()
    }
    
}
limpar.addEventListener('click', deletarTodos)


function cadastrarTarefa(evento) {
    evento.preventDefault();
    let valorInput = inputTarefa.value;
    let itemDaLista = document.createElement('li');
    itemDaLista.innerHTML = valorInput;
    itemDaLista.addEventListener('click', tarefaFeita)

    let buttonDeletar = document.createElement('button');
    itemDaLista.appendChild(buttonDeletar)
    buttonDeletar.addEventListener('click', function(){
    itemDaLista.remove()
        })

    let lista = document.querySelector('ul');
    lista.appendChild(itemDaLista);
    inputTarefa.value = '';
}
//criou o parametro evento basicamente pra usar o preventDefault 
//só criamos o intem li da lista porq a lista já foi criada no html

formulario.addEventListener('submit', cadastrarTarefa)

// tentativas de Adicionar a lixeira 
//  let buttonDeletar = document.createElement('button');
//  buttonDeletar.innerHTML = '<img src="./trash.png" alt="Delete">';
//  buttonDeletar.addEventListener('click', function(){
//      itemDaLista.remove();
//  });

// let buttonDeletar = document.createElement('button');
// let imgDeletar = document.createElement('img');
// imgDeletar.src ='./trash.png';
// imgDeletar.alt = 'Delete'
// buttonDeletar.appendChild(imgDeletar);
// buttonDeletar.addEventListener('click', function(){
//     itemDaLista.remove()
// })



