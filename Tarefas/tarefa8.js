// Agrupamento por Propriedade
// Em vendas = [{ cliente, total }, …], use reduce para gerar um objeto onde
// cada chave é um cliente e o valor é a soma de todos os seus total.


const vendas = [
  { cliente: "Lucas", total: 100 },
  { cliente: "Joao", total: 200 },
  { cliente: "Lucas", total: 50 },
  { cliente: "Pedro", total: 300 },
  { cliente: "Joao", total: 100 },
  { cliente: "Gustavo", total: 100 },
  { cliente: "Gustavo", total: 100 }
];


export function somarVendasPorCliente(vendas) {
  return vendas.reduce((acumulador, venda) => {
    const { cliente, total } = venda;

    if (acumulador[cliente]) {
      acumulador[cliente] += total;
    } else {
      acumulador[cliente] = total;
    }

    return acumulador;
  }, {});
}

const resultado = somarVendasPorCliente(vendas);
console.log(resultado);