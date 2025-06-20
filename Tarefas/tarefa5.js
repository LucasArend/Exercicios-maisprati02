// 5. Debounce
// Crie function debounce(fn, delay) que receba uma função fn e um delay
// em ms, retornando uma nova função que só executa fn se não for
// chamada novamente dentro do intervalo.

export function debounce(fn, delay) {
  let timeout;
console.time('Tempo de processamento');
  return function (...args) {
    
    return new Promise((resolve) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        resolve(fn.apply(this, args));
      }, delay);
    });
  };
}
