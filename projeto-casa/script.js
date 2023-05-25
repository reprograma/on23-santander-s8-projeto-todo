
// Elementos HTML
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const markAllButton = document.getElementById("markAllButton");
const clearButton = document.getElementById("clearButton");
const errorText = document.getElementById("errorText");
const taskList = document.getElementById("taskList");

// Lista de tarefas
let tasks = [];

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
  updateMarkAllButton();
}


// Função para exibir a lista de tarefas
function renderTasks() {
  taskList.innerHTML = "";

  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];

    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.addEventListener("change", function() {
      tasks[i].completed = checkbox.checked;
      renderTasks();
      updateMarkAllButton();
    });

    const span = document.createElement("span");
    span.textContent = task.title;

    const deleteButton = document.createElement("img");
    deleteButton.src="../projeto-casa/trash.png"
    deleteButton.alt = "Excluir";
    deleteButton.addEventListener("click", function() {
      deleteTask(i);
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteButton);
    taskList.appendChild(li);
  }

  updateMarkAllButton();
}

// Função para atualizar o estado do botão "Marcar Todos"
function updateMarkAllButton() {
  const allCompleted = tasks.every(task => task.completed);
  markAllButton.textContent = allCompleted ? "Desmarcar Todos" : "Marcar Todos";
}

// Função para adicionar uma nova tarefa
function addTask() {
  const title = taskInput.value.trim();

  if (title === "") {
    errorText.textContent = "Erro: a tarefa não pode estar vazia.";
    return;
  }

  const task = {
    title: title,
    completed: false
  };

  tasks.push(task);
  renderTasks();
  taskInput.value = "";
  errorText.textContent = "";
}

// Função para marcar ou desmarcar todas as tarefas
function toggleAllTasks() {
  const allCompleted = tasks.every(task => task.completed);

  tasks.forEach(task => {
    task.completed = !allCompleted;
  });

  renderTasks();
  updateMarkAllButton();
}

// Função para limpar a lista de tarefas
function clearTasks() {
  tasks = [];
  renderTasks();
  updateMarkAllButton();
}


// Eventos dos botões
addButton.addEventListener("click", addTask);
markAllButton.addEventListener("click", toggleAllTasks);
clearButton.addEventListener("click", clearTasks);
