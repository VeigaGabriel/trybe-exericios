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

quadradoComAsterisco(10)

// Atenção! Note que esse exercício é bem mais complexo que o anterior! Não basta, aqui, imprimir somente asteriscos. Você precisará de uma lógica para imprimir espaços também.

// Depois, faça uma pirâmide com n asteriscos de base:
// Copiar
// n = 5

//   *
//  ***
// *****

// Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:
// Copiar
// Por último, façamos com que a variável seja incrementada com o valor correspondente a cada loop;
// n = 7

//    *
//   * *
//  *   *
// *******
// Faça um programa que diz se um número definido numa variável é primo ou não.
// Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão dele por quaisquer outros números dá resto diferente de zero.

// Dica: você vai precisar de fazer um loop que vá de 0 ao número definido. Além disso, vai precisar fazer uma checagem a cada iteração e armazenar os resultados em algum lugar.
//;