let formulario = document.querySelector( " form" );
let inputTarefa = document.querySelector("input");
let limpar = document.getElementById('#limpar');
let btnmarcarTodas = document.getElementById('marcar-todos')

btnmarcarTodas.addEventListener('click', marcarTodas);


function marcarTodas(evento) {
    evento.preventDefault()

    let marcarTodos = document.querySelectorAll('li')
    console.log(marcarTodos)
    for (const marcacao of marcarTodos) {
    marcacao.classlist.add('concluido')
    }
}

// função de cadastrar tarefas
function cadastrartarefa(evento) {
    evento.preventDefault();

    let valorInput = inputTarefa.value;
    let itemdalista = document.createElement('li');
    itemdalista.innerHTML = valorInput;
    itemdalista.addEventListener('click', marcartarefasconcluidas);

    let lista = document.querySelector('ul');
    lista.appendChild(itemdalista);
    inputTarefa.value = '';
}


// funçao para marcar as tarefas
function marcartarefasconcluidas(evento) {
    let marcartarefa = evento.target
    marcartarefa.classlist.toggle('feito');
}

//Form

formulario.addEventListener('submit', cadastrartarefa)
