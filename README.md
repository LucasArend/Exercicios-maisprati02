#Lista de Exercícios 02

###### [+PraTi & Codifica Edu]

Este projeto é a entrega da lista de exercícios 02 do curso Dev. Full Stack Jr. (+PraTi & Codifica), feito em JavaScript com Node.js.


## Pré-Requisitos

Para rodar este projeto na sua máquina é necessário fazer a instalação do [Node.js](https://nodejs.org/en). O pacote npm será usado para instalar dependências e rodar scripts de build e execução do projeto, então é necessário usar um terminal com permissão para rodar scripts.

## Instalação

1. Clone ou baixe este repositório:

```bash
  cd sua-pasta
  https://github.com/LucasArend/Exercicios-maisprati02.git
```

2. Execute o script para baixar as dependências necessárias:

```sh
  cd Exercicios-maisprati02\Tarefas
  npm install prompt-sync
```

Este comando irá instalar o `prompt-sync`, necessário para possibilitar a entrada de dados via linha de comando.

## Execução

Entre na pasta Exercicios-maisprati02/Tarefas

node "menu.js"

Para escolher o exercício que deseja executar digite o número do exercício e enter. Para encerrar a execução, é só digitar 0 quando for escolher um exercício.



## Importante

**Certifica-se de estar no diretório certo antes da execução de qualquer comando.**

## Lista:


1. Validação de Datas

Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores
formarem uma data real (meses de 28–31 dias, ano bissexto para
fevereiro) e false caso contrário.

2. Jogo de Adivinhação

Escreva um script que gere um número aleatório de 1 a 100 e peça ao
usuário, para adivinhar. Use while para repetir até acertar, contando
tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado.

3. Palavras Únicas

Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair
todas as palavras únicas e exibi-las em um array.


4. Fatorial Recursivo

Implemente function fatorial(n) de forma recursiva; trate n < 0 lançando
um Error, e n === 0 retornando 1.

5. Debounce

Crie function debounce(fn, delay) que receba uma função fn e um delay
em ms, retornando uma nova função que só executa fn se não for
chamada novamente dentro do intervalo.

6. Memoization

Implemente function memoize(fn) que armazene em cache chamadas
anteriores de fn (por argumentos), retornando resultados instantâneos em
repetidas invocações.

7. Mapeamento e Ordenação

Dado um array produtos = [{ nome, preco }, …], crie uma função que
retorne um novo array apenas com os nomes, ordenados por preço
crescente, usando map, sort.

8. Agrupamento por Propriedade

Em vendas = [{ cliente, total }, …], use reduce para gerar um objeto onde
cada chave é um cliente e o valor é a soma de todos os seus total.

9. Conversão Entre Formatos

Escreva duas funções:
○ paresParaObjeto(pares) recebe um array de pares [ [chave,valor], … ] e retorna o objeto equivalente.
○ objetoParaPares(obj) faz o inverso, retornando um array de pares.
