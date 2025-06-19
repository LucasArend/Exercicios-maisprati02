// 2. Jogo de Adivinhação
// Escreva um script que gere um número aleatório de 1 a 100 e peça ao
// usuário, para adivinhar. Use while para repetir até acertar, contando
// tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado
import promptSync from 'prompt-sync'

export function jogoAdvinhacao(){

    const prompt = promptSync()

    const numeroAleatorio = Math.floor(Math.random() * 100) + 1;

    let tentativas = 0;
    let acertou = false;

    while (!acertou) {
    let entrada = prompt("Adivinhe o número entre 1 e 100:");
    let palpite = Number(entrada);
    tentativas++;

    if (palpite < numeroAleatorio) {
        console.log("Mais alto!");
    } else if (palpite > numeroAleatorio) {
        console.log("Mais baixo!");
    } else if (palpite === numeroAleatorio) {
        console.log(`Parabéns! Você acertou o número ${numeroAleatorio} em ${tentativas} tentativas.`);
        acertou = true;
    } else {
        console.log("Digite um número válido.");
    }
    }
}
jogoAdvinhacao()