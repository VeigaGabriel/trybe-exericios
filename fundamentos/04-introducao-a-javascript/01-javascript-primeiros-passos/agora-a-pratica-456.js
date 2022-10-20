// --------- PROGRAMA 4 --------------
// 🚀 Utilize if/else para fazer um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. 
// Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. 
// Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro.

// Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus.
// Um ângulo será considerado inválido se não tiver um valor positivo.


function isTriangle (angulo1, angulo2, angulo3) {
	if (angulo1 == 0 || angulo2 == 0 || angulo3 == undefined) { // || angulo1 !== Number || angulo2 !== Number || angulo3 !== Number) {
		triangleIs = 'Erro, defina os 3 valores do triângulo'
	} else if (angulo1 + angulo2 + angulo3 == 180) {
    triangleIs = true
  } else if (angulo1 + angulo2 + angulo3 > 180) {
  	triangleIs = false
  } else {
    triangleIs = "Erro, desconhecido, verifique os valores;"
  } console.log(triangleIs)
}

isTriangle(90, 90, 90)
console.log(90 + 90 + 90)







// --------- PROGRAMA 5 --------------
// Utilize switch/case para fazer um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com 
// letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).

// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.

// Exemplo: bishop (bispo) -> diagonals (diagonais)



// CÓDIGO ------------------------







// --------- PROGRAMA 6 --------------
// Utilize if/else para fazer um programa que converta uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A

// Porcentagem >= 80 -> B

// Porcentagem >= 70 -> C

// Porcentagem >= 60 -> D

// Porcentagem >= 50 -> E

// Porcentagem < 50 -> F

// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.




// CÓDIGO ---------------------------