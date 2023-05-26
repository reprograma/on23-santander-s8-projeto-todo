const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const msgErro = document.getElementById("erro")

function addTask(){
    if (inputBox.value === ""){
        msgErro.textContent = 'Por favor, insira uma tarefa.';
    } else{

    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li); 
    let imagem = document.createElement("img");
    imagem.src= "./trash.png";
    li.appendChild(imagem);
    span.innerHTML = "";
    
    }
   
inputBox.value = "";

}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("check");
    }
    else if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
    }
    }, false);

    function marcarTodos() {
        const tarefas = document.getElementsByTagName("li");
        
        for (let i = 0; i < tarefas.length; i++) {
          tarefas[i].classList.add("check");
        }
    }
    

