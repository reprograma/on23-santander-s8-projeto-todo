const formulario = document.querySelector ("form");
const inputTarefa = document.querySelector ("input");


const botaoMarcartodos = document.querySelector ("#marcar-todos");
botaoMarcartodos.addEventListener("click", marcartodos)

let lista = document.querySelector("ul");
    

const botaoLimpar = document.querySelector ("#limpar")
botaoLimpar.addEventListener("click", limpar)


function marcartodos (evento) {
 const marcarTodosItens = document.querySelectorAll ("li")
 for (const marcacao of marcarTodosItens){
    marcacao.classList.add ("feito");
 }   
}

function limpar () {
 lista.innerHTML = ""
}


function marcarTarefaComoFeita (evento){
let tarefaClicada = evento.target;
tarefaClicada.classList.toggle("feito");
}


function cadastrarTarefa (evento) {
    evento.preventDefault();
    let valorInput = inputTarefa.value;
    let itemDaLista = document.createElement("li");
    let deleteItem = document.createElement("i");
    deleteItem.classList.add("fa-solid");
    deleteItem.classList.add("fa-trash-can");
    itemDaLista.innerHTML = valorInput;
    inputTarefa.value = "";
    itemDaLista.addEventListener("click", marcarTarefaComoFeita)
    deleteItem.addEventListener ("click", function(){
        itemDaLista.remove ()
    } )

    // let lista = document.querySelector("ul");
    lista.appendChild(itemDaLista);
    itemDaLista.appendChild(deleteItem);  
    
    formulario.appendChild(lista);
    
}

formulario.addEventListener ("submit", cadastrarTarefa);



    


   







    
    



    

