// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_operators

// --------- PROGRAMA 1 --------------
// Utilize if/else para fazer um programa que retorne o maior de dois números. 
// Defina, no começo do programa, duas constantes com os valores que serão comparados.

function qualEMaior(n1, n2) {
    if (n1 > n2) {
    resultado = `O número ${n1} é maior que o número ${n2}.`
    } else if (n1 < n2) {
			resultado = `O número ${n1} é menor que o número ${n2}.`
		} else if (n1 == n2) {
			resultado = 'Os números são iguais!'
		} else {
			resultado = 'Erro, digite os dois valores numéricos.'
		}
		console.log(resultado)
}
// qualEMaior(2, 1)
// qualEMaior(1, 2)
// qualEMaior()
// qualEMaior(3)
// qualEMaior('a')

// --------- PROGRAMA 2 --------------
// Utilize if/else para fazer um programa que retorne o maior de três números. 
// Defina, no começo do programa, três constantes com os valores que serão comparados.

function mostreOMaior(n1, n2, n3) {
	if ((n2 && n3) < n1){
		resultado = n1 + ' é o maior!1'
	} else if ((n1 && n3) < n2) {
		resultado = n2 + ' é o maior!2'
	} else {
		resultado = n3 + ' é o maior!3'
	}
	console.log(resultado)
}
// mostreOMaior(1,3,2)
// mostreOMaior(4,5,6)
// mostreOMaior(9,8,7)

// --------- PROGRAMA 3 --------------
// Utilize if/else para fazer um programa que, dado um valor recebido como parâmetro, retorne “positive” 
// se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.

function valueIs(value) {
	if (value > 0) {
		result = 'Positive'
	} else if (value < 0) {
		result = 'Negative'
	} else if (value == 0) {
		result = 'Zero'
	} else {
		result = `${value} não é um número válido.`
	}
	console.log(result)
}
// valueIs(75)






