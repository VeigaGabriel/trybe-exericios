// Escreva um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo:
// Copiar
// n = 5

// *****
// *****
// *****
// *****
// *****

function quadradoComAsterisco(quantidade) {
  let asterisco = "*";
  for (let i = 0; quantidade > i;i++){
    console.log(asterisco.repeat(quantidade))
  }
}

// quadradoComAsterisco(10)

// Faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:
// Copiar
// n = 5

// *
// **
// ***
// ****
// *****

function escadaComAsterisco(quantidade) {
  let asterisco = [];
  for (let i = 0 ; quantidade > i; i++) {
    asterisco.push("*");
  console.log(asterisco.join(''));
  }
}

// escadaComAsterisco(3)

// Agora inverta o lado do triângulo. Por exemplo:
// Copiar
// n = 5

//     *
//    **
//   ***
//  ****
// *****

// function escadaInversaComAsterisco(quantidade) {
//   for (let i = 0; quantidade > i;i++){
//     console.log(" ".repeat(quantidade - 1).substring(i) + "*".repeat(i + 1)); // Gabriel Veiga Turma 28 A
//   }
// }

// escadaInversaComAsterisco(10)

function quadradoComAsterisco(quantidade) {
  for (let i = 0; quantidade > i;i++){
    console.log(" ".repeat(quantidade - i -1) + "*".repeat(i + 1));    // Nathan Nunes Turma 16 B
  }
}

// quadradoComAsterisco(10)

// Atenção! Note que esse exercício é bem mais complexo que o anterior! Não basta, aqui, imprimir somente asteriscos. Você precisará de uma lógica para imprimir espaços também.

// Depois, faça uma pirâmide com n asteriscos de base:
// Copiar
// n = 5

//   *
//  ***
// *****

function trianguloPerfeitoComAsterisco(quantidade) {
  for (let i = 0; quantidade > i;i++){
    console.log(" ".repeat(quantidade - 1).substring(i) + "*".repeat(i + 1) + "*".repeat(i));
  }
}

// trianguloPerfeitoComAsterisco(10)

// Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:
// Copiar
// Por último, façamos com que a variável seja incrementada com o valor correspondente a cada loop;
// n = 7

//    *
//   * *
//  *   *
// *******

function trianguloContornoAsterisco(quantidade) {
  for (let i = 0; quantidade > i;i++){
    triangulo = " ".repeat(quantidade - 1).substring(i) + "*" + " ".repeat(i + i).substring(1)
    if (i == 0) {
      console.log(triangulo)
    } else if (i > 0 && i < quantidade - 1) {
      console.log(triangulo + "*".repeat(1))
    }
    if (i == quantidade - 1) {
      console.log("*".repeat(quantidade + quantidade - 1))
    }
  }
}

// trianguloContornoAsterisco(10)

// Faça um programa que diz se um número definido numa variável é primo ou não.

function isPrime(num){
  if(num == 2 || num == 3){
  result = `O número ${num} é primo!`
  } else if (num == 1) {
  result = `O número ${num} não é primo!`
  } else {
    for (let i = 2;i < num;i++) {
      if (num % i !== 0) {
        return console.log(`O número ${num} é primo!`)
      } else {
        return console.log(`O número ${num} não é primo!`)
      }
    }

  } 
  

}

// isPrime(5)
// isPrime(7)
// isPrime(8)
// isPrime(11)
// isPrime(14)
// isPrime(15)
// isPrime(16)
// isPrime(17)
// isPrime(18)
// isPrime(18)
// isPrime(23)
// isPrime(29)




// Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão dele por quaisquer outros números dá resto diferente de zero.

// Dica: você vai precisar de fazer um loop que vá de 0 ao número definido. Além disso, vai precisar fazer uma checagem a cada iteração e armazenar os resultados em algum lugar.

