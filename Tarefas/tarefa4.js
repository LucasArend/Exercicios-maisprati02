// 4. Fatorial Recursivo
// Implemente function fatorial(n) de forma recursiva; trate n < 0 lançando
// um Error, e n === 0 retornando 1.

function fatorial(n) {
  if (n < 0) {
    console.log("O numero não pode ser zero!");
  }
  if (n === 0) {
    return 1;
  }
  return n * fatorial(n - 1);
}

fatorial(3)