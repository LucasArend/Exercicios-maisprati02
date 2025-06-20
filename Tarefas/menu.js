import {ehDataValida} from './tarefa1.js';
import {jogoAdvinhacao} from './tarefa2.js';
import {palavrasUnicas} from './tarefa3.js';
import {fatorial} from './tarefa4.js';
import {debounce} from './tarefa5.js';
import {memoize} from './tarefa6.js';
import {nomesOrdenadosPorPreco} from './tarefa7.js';
import {somarVendasPorCliente} from './tarefa8.js';
import {convert} from './tarefa9.js';
import promptSync from 'prompt-sync';
let prompt = promptSync();

function callAgrupamento(){
    const vendas = [];

    console.log("insira o nome da pessoa e a venda feita, finalize para ordenar as pessoas por quando gastaram\n");

while (true) {
  const cliente = prompt("Digite o nome do cliente (deixe vazio para encerrar):");

  if (!cliente) {
    break; // Encerra se o nome do cliente for vazio ou cancelado
  }

  const totalInput = prompt(`Digite o total da venda para ${cliente}:`);
  const total = parseFloat(totalInput);

  if (isNaN(total)) {
    alert("Total inválido. Tente novamente.");
    continue;
  }

  vendas.push({ cliente, total });
}

const resultado = somarVendasPorCliente(vendas);
console.log("Total de vendas por cliente:", resultado);
}

function callOrdenacao(){
  let produtos = [];

  console.log("insira o nome do prduto e o preço, finalize para ordenar os produtos pelo custo\n");

while (true) {
  let nome = prompt("Digite o nome do produto (deixe vazio para encerrar): ");

  if (!nome) {
    break;
  }
 
  let preco = parseInt(prompt("Digite o preço do produto: "));

  if (isNaN(preco)) {
    alert("Preço inválido. Tente novamente.");
    continue;
  }

  produtos.push({ nome, preco });
}

let nomes = nomesOrdenadosPorPreco(produtos);
console.log(nomes);
}


async function callDebounce(){
  function mensagem(texto) {
    console.log(texto);
  }

  let texto = prompt("Insira uma frase para ser utilizada no exemplo de delay: ");
  let delay = parseInt(prompt("Insira quanto tempo deseja que a mensagem demore (em milissegundos): "));

  const debounced = debounce(() => mensagem("\n"+texto), delay);

  
  await debounced(); 



}

function callFatorial(){
  let numero = parseInt(prompt("Informe o numero que deseja fazer fatorial: "));
  console.log(fatorial(numero));
}

function validarData() {
  console.log("\n Validação de Data");
  let dia = parseInt(prompt("Informe o dia: "));
  let mes = parseInt(prompt("Informe o mês: "));
  let ano = parseInt(prompt("Informe o ano: "));
  let validate = ehDataValida(dia, mes, ano);
  if (validate){
    console.log("\nData Valida!")
  }else{
    console.log("\nData invalida!")
  }
}

function callConvert(){
  console.log("insira 2 valores eles serão usados no exemplo de conversão de objetos para pares e vice-versa\n")
  let primeiraPalavra = prompt("Informe o primeiro valor: ");
  let segundaPalavra = prompt("Informe o segundo valor: ");
  convert(primeiraPalavra, segundaPalavra)
}

function exibirMenu() {
  console.log(`
==========================
        MENU DE OPÇÕES
==========================
1 - Validação de Data
2 - Jogo de Adivinhação
3 - Remover palavras repetidas
4 - Fatorial
5 - Enviar mensagem com delay
6 - Memoization
7 - Mapeamento e Ordenação
8 - Agrupamento por Propriedade
9 - Conversão Entre Formatos
0 - Sair
==========================
  `);
}

export async function executarOpcao(opcao) {
  switch (opcao) {
    case 1:
      validarData();
      break;
    case 2:
      jogoAdvinhacao();
      break;
    case 3:
      palavrasUnicas();
      break;
    case 4:
      callFatorial();
      break;
    case 5:
      await callDebounce();
      break;
    case 6:
      memoize();
      break;
    case 7:
      callOrdenacao();
      break;
    case 8:
      callAgrupamento();
      break;
    case 9:
      callConvert()
      break;
    case 0:
      console.log("\n Encerrando o programa...");
      break;
    default:
      console.log("\n Opção inválida! Tente novamente.");
  }
}


let opcao = -1;

while (opcao !== 0) {
  console.clear(); // Limpa o console
  exibirMenu();
  
  let entrada = prompt("Escolha uma opção: ");
  opcao = Number(entrada);

  if (isNaN(opcao)) {
    console.log("\n Entrada inválida! Digite um número.");
  } else {
    await executarOpcao(opcao);
  }

  if (opcao !== 0) {
    prompt("\n🔸 Pressione [ENTER] para continuar...");
  }
}

console.log("\n Programa finalizado.");