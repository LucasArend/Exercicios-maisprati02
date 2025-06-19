// 6. Memoization
// Implemente function memoize(fn) que armazene em cache chamadas
// anteriores de fn (por argumentos), retornando resultados instantâneos em
// repetidas invocações.

function memoize(fn) {
  const cache = new Map();

  return function (...args) {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      console.log("Resultado armazenado: "+ cache.get(key));
      return
      
    }

    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
}

function soma(a, b) {
  console.log("Resultado: "+ (a + b) + ", novo resultado encontrado, armazenando...");
  return a + b;
}

const memoizedSoma = memoize(soma);

memoizedSoma(1, 2); 
memoizedSoma(1, 2);
memoizedSoma(1, 2);
memoizedSoma(2, 3); 