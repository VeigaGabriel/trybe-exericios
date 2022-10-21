// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_operators

// --------- PROGRAMA 4 --------------
// 🚀 Utilize if/else para fazer um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. 
// Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. 
// Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro.

// Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus.
// Um ângulo será considerado inválido se não tiver um valor positivo.


function isTriangle (angulo1, angulo2, angulo3) {
	if (angulo1 == 0 || angulo2 == 0 || angulo3 == undefined || typeof angulo1 !== 'number' || typeof angulo2 !== 'number' || typeof angulo3 !== 'number') {
		triangleIs = 'Erro, defina os 3 valores do triângulo'
	} else if (angulo1 + angulo2 + angulo3 == 180) {
    triangleIs = true
  } else if (angulo1 + angulo2 + angulo3 > 180) {
  	triangleIs = false
  } else {
    triangleIs = "Erro, desconhecido, verifique os valores;"
  } console.log(triangleIs)
}

isTriangle(60, 60, 60)









// --------- PROGRAMA 5 --------------
// Utilize switch/case para fazer um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com 
// letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).

// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.

// Exemplo: bishop (bispo) -> diagonals (diagonais)
function pecaXadrez(peca) {
	let pecaFaz = '';
	switch(peca.toLowerCase()) {
		case "rei":
			pecaFaz = 'Pode mover-se em qualquer direção, porém apenas uma casa por vez, como indicam os pontos vermelhos na figura abaixo.'
			break;
		
		case "Dama":
			pecaFaz = 'Assim como o Rei, pode mover-se em qualquer direção (vertical, horizontal e diagonal), porém quantas casas quiser, desde que estejam livres.'
			break;
			
		case "Torre":
			pecaFaz = 'Move-se em linha reta, tanto na vertical quanto na horizontal, quantas casas quiser.'
			break;
				
		case "Bispo":
			pecaFaz = 'Move-se na diagonal, quantas casas quiser. O Bispo que iniciar a partida em uma casa branca somente poderá transitar pelas brancas, enquanto o \
			Bispo que inicia em uma casa preta somente poderá transitar pelas casas pretas.'
			break;
					
		case "Cavalo":
			pecaFaz = 'É a única peça que pode saltar sobre as outras peças do tabuleiro, sejam elas amigas ou inimigas. \
			O movimento executado pelo Cavalo é conhecido por “um-dois” ou “em L”. \
			Ele pode andar duas casas na horizontal e uma na vertical, ou duas na vertical e uma na horizontal, uma na horizontal \
			e duas na vertical, e assim por diante. Quando a casa de saída do Cavalo for escura, a casa de chegada será clara, e vice-versa.'
			break;
						
		case "Peão":
			pecaFaz = 'Move-se sempre uma casa para frente, exceto no primeiro movimento, quando pode mover-se duas casas. \
			O peão é a única peça que não pode retroceder, e também a única que efetua a captura com um movimento diferente do \
			utilizado para avançar no tabuleiro. O peão pode capturar as peças que estejam uma fileira acima, mas nas colunas adjacentes a sua.'
			break;
							
		default:
			console.log(`A peça ${peca} não existe.`)
	} 
		
			console.log(pecaFaz);
}
			// pecaXadrez("rei");




			// const sentence = 'The quick brown fox jumps over the lazy dog.';
			// console.log(sentence.toLowerCase());


// --------- PROGRAMA 6 --------------
// Utilize if/else para fazer um programa que converta uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A

// Porcentagem >= 80 -> B

// Porcentagem >= 70 -> C

// Porcentagem >= 60 -> D

// Porcentagem >= 50 -> E

// Porcentagem < 50 -> F

// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.


// function notaEmLetra(porcentagem) {
// 	if (porcentagem >= 90) {
// 		resultado = 'A'
// 	} else if (porcentagem >= 80) {
// 		resultado = 'B'
// 	} else if (porcentagem >= 70) {
// 		resultado = 'C'
// 	} else if (porcentagem >= 60) {
// 		resultado = 'D'
// 	} else if (porcentagem >= 50) {
// 		resultado = 'E'
// 	} else if (porcentagem < 50) {
// 		resultado = 'F'
// 	} else 
// }