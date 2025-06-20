// 3. Palavras Únicas
// Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair
// todas as palavras únicas e exibi-las em um array.

import promptSync from 'prompt-sync'

export function palavrasUnicas(){

    const prompt = promptSync()

    let texto = prompt("Insira um texto com palavras repetidas para extrair as palavras unicas: ");
    const palavras = texto.split(" ");
    const unicas = [];

    for (let i = 0; i < palavras.length; i++) {
    let palavraAtual = palavras[i];
    let encontrada = false;

    for (let j = 0; j < unicas.length; j++) {
        if (palavraAtual === unicas[j]) {
        encontrada = true;
        break;
        }
    }

    
    if (!encontrada) {
        unicas.push(palavraAtual);
    }
    }

    console.log(unicas);
}