// Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

function verifyPalindrome (palavra) {
  let palavraInversa = palavra.split("").reverse("").join("");
  if (palavra == palavraInversa) {
    return true
  }
  return false
  
};
// console.log(verifyPalindrome("arara"))
// console.log(verifyPalindrome("Olá"))

// --------------------------------

// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function maiorValor(){
  let valores = [2, 3, 6, 7, 10, 1];
  let maior = Math.max(...valores);
    for (i in valores) {
      if (valores[i] == maior) {
      return i
      };
    }
};
// console.log(maiorValor())

// --------------------------------

// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.


function menorValor(){
  let valores = [2, 4, 6, 7, 10, 0, -3];
  let menor = Math.min(...valores);
    for (i in valores) {
      if (valores[i] == menor) {
      return i
      }
    }
};
// console.log(menorValor())

// --------------------------------

// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

function maiorPalavra() {
  let nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']
  let valores = [0]
  let maiorValor;
  for (i of nomes) {
    valores.push(i.length)
  }
  maiorValor = Math.max(...valores)
  for (index of nomes) {
    if (index.length == maiorValor){
      return index
    }
  }
}
// console.log(maiorPalavra())
// maiorPalavra()
// Valor esperado no retorno da função: Fernanda.

// --------------------------------

// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
function conta() {
  let nums = [2, 3, 2, 5, 8, 2, 3];
console.log ('abbcda'.toString())
}
console.log(conta())

// Array de teste: [2, 3, 2, 5, 8, 2, 3];.

// Valor esperado no retorno da função: 2.

// --------------------------------

// Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.

// Valor de teste: N = 5.

// Valor esperado no retorno da função: 1+2+3+4+5 = 15.

// --------------------------------

// Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.

// Valor de teste: 'trybe' e 'be'

// Valor esperado no retorno da função: true

// verificaFimPalavra('trybe', 'be');

// Retorno esperado: true
// verificaFimPalavra('joaofernando', 'fernan');

// Retorno esperado: false
