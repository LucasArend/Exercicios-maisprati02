// Mapeamento e Ordenação
// Dado um array produtos = [{ nome, preco }, …], crie uma função que
// retorne um novo array apenas com os nomes, ordenados por preço
// crescente, usando map, sort.


function nomesOrdenadosPorPreco(produtos) {
  return produtos
    .sort((a, b) => a.preco - b.preco)
    .map(produto => produto.nome);    
}

const produtos = [
  { nome: "Relogio", preco: 200 },
  { nome: "Teclado", preco: 50 },
  { nome: "Sofa", preco: 1200 },
  { nome: "Geladeira", preco: 3000 },
  { nome: "WebCam", preco: 300 },
  { nome: "Carregador Smartphone", preco: 30 }
];

const nomes = nomesOrdenadosPorPreco(produtos);
console.log(nomes); 