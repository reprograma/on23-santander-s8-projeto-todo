const formulario = document.querySelector('form');
const inputTarefa = document.querySelector('input');

function cadastrarTarefa() {
  let valorInput = inputTarefa.value;
  let itemDaLista = document.createElement('li');
  itemDaLista.innerHTML = valorInput;

  let lista = document.querySelector('ul');
  lista.appendChild(itemDaLista);
}

formulario.addEventListener('submit', cadastrarTarefa);
