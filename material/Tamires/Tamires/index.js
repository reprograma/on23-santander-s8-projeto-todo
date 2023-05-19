let produto = [
    {
      nome: "TV 20 polegadas",
      categoria: "Áudio e Vídeo",
      preco: 1500
    },
    {
      nome: "Mouse",
      categoria: "Informática",
      preco: 70
    },
    {
      nome: "Teclado",
      categoria: "Informática",
      preco: 350 
    },
    {
      nome: "Aparelho de Som",
      categoria: "Áudio e Vídeo",
      preco: 600
    },
    {
      nome: "Sanduicheira",
      categoria: "Eletrodomésticos",
      preco: 130
    },
    {
      nome: "Microondas 20L",
      categoria: "Eletrodomésticos",
      preco: 800
    },
    {
      nome: "Geladeira Frost Free",
      categoria: "Eletrodomésticos",
      preco: 2100
    },
    {
      nome: "Carregador de Notebook Dell",
      categoria: "Informática",
      preco: 140
    },
    {
      nome: "Caixa de Som JBL",
      categoria: "Áudio e Vídeo",
      preco: 230
    },
    {
      nome: "Webcam",
      categoria: "Informática",
      preco: 330
    },
    {
      nome: "Fogão 4 Bocas",
      categoria: "Eletrodomésticos",
      preco: 680
    },
    {
      nome: "Monitor 24 Polegadas",
      categoria: "Informática",
      preco: 900
    },
    {
      nome: "Air Fryer",
      categoria: "Eletrodomésticos",
      preco: 450
    }
  ]

const botao = document.querySelector('button');
const input = document.querySelector('input')
const nomeProduto = document.getElementById("nome-produto");
let precoProduto = document.querySelector("#preco-produto");
const catergoriaProduto = document.getElementById("categoria-produto");

function pesquisarProdutos(){
  let pesquisa = input.value;
for (let produto of produtos) {
    if(produto.nome === pesquisa){
        nomeProduto.innerHTML = produto.nome;
        precoProduto.innerHTML = produto.preco;
        catergoriaProduto.innerHTML = produto.categoria;
    }
  }
}
botao.addEventListener('click', pesquisarProdutos)