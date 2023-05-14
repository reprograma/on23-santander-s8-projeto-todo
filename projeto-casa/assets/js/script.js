const formulario = document.querySelector('form')
const inputBox = document.getElementById('input-tarefas')
const btnMarcarTodas = document.getElementById('btn-marcar')
const btnApagarTodos = document.getElementById('btn-limpar')
let lista = document.querySelector('ul') 

function adcionarTarefa(evento){
    evento.preventDefault()
    let inputTxt = inputBox.value

    let div = document.createElement('div') //cria uma div para abrigar cada tarefa
    div.classList.add('div-tarefa') //class pra o check e o texto ficarem lado a lado

    let check = document.createElement('input') //cria um input checkbox
    check.setAttribute('type','checkbox')
    check.addEventListener('change', marcarTarefa)

    let itemLista = document.createElement('li') //cria um li e poe o texto do input dentro
    itemLista.innerHTML = inputTxt

    let btnApagar = document.createElement('button')
    btnApagar.addEventListener('click', apagarTarefa)

    itemLista.appendChild(check)
    div.appendChild(itemLista) //coloca o li e check como filhos da div
    div.appendChild(btnApagar)
    lista.appendChild(div) // coloca a div como filha do ul
}

formulario.addEventListener('submit', adcionarTarefa)

function marcarTarefa(){
    let itemLista = this.parentNode

    if(this.checked){
        itemLista.classList.add('checked')
    }else{
        itemLista.classList.remove('checked')
    }
}


function marcarTodasAsTarefas(){
    let AllCheckboxes = document.querySelectorAll('input[type="checkbox"]')
    let allChecked = true;
    AllCheckboxes.forEach((checkDaVez) => {
        if(checkDaVez.checked === false){
            allChecked = false;
        }
    });
    AllCheckboxes.forEach((checkDaVez) => {
        checkDaVez.checked = !allChecked;
        marcarTarefa.call(checkDaVez)
    });
}

btnMarcarTodas.addEventListener('click', marcarTodasAsTarefas) 

function apagarTarefa(evento){
    let item = evento.target.parentElement 
    lista.removeChild(item)
}

function apagarTodasAsTarefas(){
    let allDivs = document.querySelectorAll('ul div')
    allDivs.forEach((divDaVez) => lista.removeChild(divDaVez))
}

btnApagarTodos.addEventListener('click', apagarTodasAsTarefas)