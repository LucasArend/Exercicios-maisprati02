// 6. Memoization
// Implemente function memoize(fn) que armazene em cache chamadas
// anteriores de fn (por argumentos), retornando resultados instantâneos em
// repetidas invocações.

import promptSync from 'prompt-sync';

export function memoize(){

  const prompt = promptSync();

  function memoize(fn) {
    const cache = new Map();

    return function (...args) {
      const key = JSON.stringify(args);

      if (cache.has(key)) {
        console.log("Resultado armazenado: " + cache.get(key));
        return cache.get(key);
      }

      const result = fn.apply(this, args);
      cache.set(key, result);
      return result;
    };
  }

  function soma(a, b) {
    console.log("\nResultado: " + (a + b) + ", novo resultado encontrado, armazenando...\n");
    return a + b;
  }

  let memoizedSoma = memoize(soma);

  while (true) {
    let inputA = prompt("Digite o primeiro número (0 para sair): ");
    let inputB = prompt("Digite o segundo número (0 para sair): ");

    let a = parseInt(inputA, 10);
    let b = parseInt(inputB, 10);

    if (a === 0 && b === 0) {
      break;
    }

    memoizedSoma(a, b);
  }
}