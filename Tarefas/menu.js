import {ehDataValida} from './tarefa1.js';
import {jogoAdvinhacao} from './tarefa2.js';
import {palavrasUnicas} from './tarefa3.js';
import {fatorial} from './tarefa4.js';
import {debounce} from './tarefa5.js';
// import {jogoAdvinhacao} from './tarefa6.js';
// import {jogoAdvinhacao} from './tarefa7.js';
// import {jogoAdvinhacao} from './tarefa8.js';
import {convert} from './tarefa9.js';
import promptSync from 'prompt-sync';
const prompt = promptSync();

function callDebounce(){
  function mensagem(texto) {
    console.log(texto);
  }
  let texto = prompt("Insira uma frase para ser utilizada no exemplo de delay: ");
  let delay = parseInt(prompt("\ninsira quanto tempo deseja que a mensagem demore (o tempo é calculado em milissegundos): "));
  debounce(() => mensagem(texto),delay)();


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
    console.log("Data Valida!")
  }else{
    console.log("Data invalida!")
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

async function executarOpcao(opcao) {
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
      break;
    case 7:
      break;
    case 8:
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
  
  const entrada = prompt("Escolha uma opção: ");
  opcao = Number(entrada);

  if (isNaN(opcao)) {
    console.log("\n Entrada inválida! Digite um número.");
  } else {
    executarOpcao(opcao);
  }

  if (opcao !== 0 && opcao !== 5) {
    prompt("\n🔸 Pressione [ENTER] para continuar...");
  }
}

console.log("\n Programa finalizado.");