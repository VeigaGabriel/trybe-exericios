// 🚀 Crie uma função que receba uma frase como parâmetro e retorne a maior palavra da frase.

// Exemplo:


  // const longestWord = "Antônio foi no banheiro e não sabemos o que aconteceu"; // retorna 'aconteceu'
// De olho na dica 👀: Nesse exercício, será necessário utilizar os conhecimentos sobre array, método split e loop for/of.

// const maiorPalavra = (frase) => {
//   for (i in frase) {
//     console.log(i, frase.split())
//   }
// }
// maiorPalavra('oi tudeeeo bem')

// const maiorPalavra2 = (frase) => frase.split(' ').sort();
// console.log(maiorPalavra2("Antônio foi no banheiro e não sabemos o que aconteceu com ele"))

const longestWord = (text) => {
  const wordArray = text.split(' ');
  let maxLength = 0;
  let result = '';

  for (const word of wordArray) {
      if (word.length > maxLength) {
        console.log(word)
          maxLength = word.length;     
          result = word;
      }
  }

  return result;
}

console.log(longestWord('Antonio foi ao banheiro e não sabemos o que aconteceu'));

// Bônus (opcional): Tente fazer o mesmo exercício utilizando o método array.sort().