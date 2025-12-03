const precos = [100, 200, 300, 400];

const precoComTaxa = precos.map((preco) => {
  return preco + 10;
});

console.log(precoComTaxa);

const nomes = ["Ana", "Beto", "Carla"];

const crachas = nomes.map((nome) => {
  return `Funcionário:${nome}`;
});

console.log(crachas);

const numeros = [10, 20, 30];

const strings = numeros.map((numero) => String(numero));

console.log(strings);

const produtos = [
  { id: 1, nome: "Mouse", preco: 50 },
  { id: 2, nome: "Teclado", preco: 150 },
  { id: 3, nome: "Monitor", preco: 500 },
];

const nomesP = produtos.map((produto) => String(produto.nome));

console.log(nomesP);

const produtos2 = [
  { id: 1, nome: "Mouse", preco: 50 },
  { id: 2, nome: "Teclado", preco: 150 },
  { id: 3, nome: "Monitor", preco: 500 },
];

const valores = produtos2.map(
  (produto) => `<li>${produto.nome} e ${produto.preco}</li>`
);

console.log(valores);

const precos2 = [10, 200, 500, 35, 15, 90];

const promocao = precos2.filter((preco) => {
  return preco < 50;
});

console.log(promocao);

const promocao2 = [10, 35, 15];

const total = promocao2.reduce((acumulador, numeroatual) => {
  return acumulador + numeroatual;
});

console.log(total);

const carrinho = [
  { nome: "Teclado", preco: 100, tipo: "eletronico" },
  { nome: "Livro", preco: 30, tipo: "livro" },
  { nome: "Mouse", preco: 50, tipo: "eletronico" },
  { nome: "Cadeira", preco: 400, tipo: "moveis" },
];

const carrinhoPrecos = carrinho.filter((item) => {
  return item.tipo === "eletronico"
});

const valorTotal = carrinhoPrecos.reduce((acumulador, valorTOtal) => {
  return acumulador + valorTOtal.preco;
}, 0);

console.log(valorTotal);
