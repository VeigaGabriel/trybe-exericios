// Crie uma constante chamada “currentHour”, que receba um número entre 4 e 24 de sua escolha, para representar as horas do dia.

// Crie uma variável chamada “message” que, inicialmente, é uma string vazia.

// Implemente condicionais para que:

// Se o horário for maior ou igual a 22, insira “Não deveríamos comer nada, é hora de dormir” na variável “message”.

// Se o horário for maior ou igual a 18 e menor que 22, insira “Rango da noite, vamos jantar :D” na variável “message”.

// Se o horário for maior ou igual a 14 e menor que 18, insira “Vamos fazer um bolo pro café da tarde?” na variável “message”.

// Se o horário estiver entre 11 e 14, insira “Hora do almoço!!!” na variável “message”.

// Se o horário estiver entre 4 e 11, insira “Hmmm, cheiro de café recém-passado” na variável “message”.

// Agora imprima a variável message fora das suas condições.

function horaDe(currentHour) { 
  if (currentHour > 24) {
    message = 'Horário Inexistente'
  } else if (currentHour >= 22) {
    message = 'Não deveríamos comer nada, é hora de dormir'
  } else if (currentHour >= 18) {
    message = 'Rango da noite, vamos jantar :D'
  } else if (currentHour >= 14) {
    message = 'Vamos fazer um bolo pro café da tarde?'
  } else if (currentHour >= 11) {
    message = 'Hora do almoço!!!'
  } else if(currentHour >= 4) {
    message = 'Hmmm, cheiro de café recém-passado'
  } else if(currentHour >= 0) {
    message = 'Ainda não foi dormir?'
  } else {
    return console.log('Erro, digite um horário')
  } console.log(message)
}
horaDe(25)
horaDe(22)
horaDe(18)
horaDe(14)
horaDe(11)
horaDe(4)
horaDe(0)