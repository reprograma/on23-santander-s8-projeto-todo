const formulario = document.querySelector('form');
const inputTarefa = document.querySelector('input');

function cadastrarTarefa(evento) {
  // impedir que o formulário recarregue a página
  evento.preventDefault();
  let valorInput = inputTarefa.value;
  let itemDaLista = document.createElement('li');
  itemDaLista.innerHTML = valorInput;

  let lista = document.querySelector('ul');
  lista.appendChild(itemDaLista);
}

formulario.addEventListener('submit', cadastrarTarefa);
