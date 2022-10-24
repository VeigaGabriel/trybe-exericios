// Crie um algoritmo que simula o jogo “pedra, papel e tesoura” levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// “Player 1 won” ou “A Ties” ou “Player 2 won”.
// Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade. Imprima no console seguindo o exemplo: “A pessoa é maior de idade”.
// Bônus: Crie a condição utilizando operador ternário.


// function pedraPapelTesoura2() {

  // let player1 = {
  //   pedra: 'pedra',
  //   papel: 'papel',
  //   tesoura: 'tesoura'
  // }

//   let player2 = {
//     pedra: 'pedra',
//     papel: 'papel',
//     tesoura: 'tesoura'
//   }

  // if (player1.pedra && player2.tesoura || player1.papel && player2.pedra || player1.tesoura && player2.papel) {
  //   console.log("Vitória do player 1!!")
  // } else if(player1 == player2) {
  //   console.log("Empate")
  // } else {
  //   console.log("Vitória do player 2!!")
  // }
// }
// pedraPapelTesoura2()

function pedraPapelTesoura (p1, p2) {
  if (p1 == 'pedra' && p2 == 'tesoura' || p1 == 'papel' && p2 == 'pedra' || p1 == 'tesoura' && p2 == 'papel') {
    console.log("Vitória do player 1!!")
  } else if (p1 == p2) {
    console.log("Empate.")
  } else {
    console.log("Vitória do player 2!!")
  }
}

pedraPapelTesoura('pedra', 'pedra')
pedraPapelTesoura('tesoura', 'papel')

