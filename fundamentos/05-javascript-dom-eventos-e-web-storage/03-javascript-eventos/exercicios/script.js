const createDaysOfTheWeek = () => {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
}

createDaysOfTheWeek();

// Escreva seu código abaixo.

// -------------- PARTE 1 -------------------


const ul = document.getElementsByTagName('ul');
const li = document.getElementsByTagName('li');

// classe ul deve conter id 'days'
ul.id = "days";


// Os dias devem estar contidos em uma tag <li>, e todos devem ter a classe day. Ex: <li class="day">3</li>;


// Os dias 4, 11, 18 e 25 são sextas-feiras. Eles devem conter a classe day e a classe friday. Ex: <li class="day friday">4</li>
// const friday = daysToUl.appendChild('friday') // revisar
const decemberDay = () => {
  const ul = document.getElementsByTagName('ul')[0];
  const li = document.getElementsByTagName('li')[0];
  const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  for (index in decemberDaysList) {
    const dias = decemberDaysList[index];
    listaDeDias = document.createElement('li');

    listaDeDias.innerHTML = dias;
    listaDeDias.className = "day";
    // console.log(listaDeDias);

    ul.appendChild(listaDeDias);
    
    if (index == 4 || index == 11 || index == 18 || index == 25) {
      listaDeDias.classList.add('friday');
    }
  }
}
decemberDay();

// -------------- PARTE 2 -------------------

// Implemente uma função que crie dinamicamente um botão com o nome “Feriados”;
// Sua função deve receber um parâmetro com a string 'Feriados';
// Adicione a este botão a ID "btn-holiday";
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container".

const createHoliday = () => {
  const buttonsContainer = document.getElementsByClassName('buttons-container')[0];
  const botao = document.createElement('button');
  botao.innerText = "Feriados";
  botao.setAttribute('id', "btn-holiday")
  const feriado = buttonsContainer.appendChild(botao)
}
createHoliday()

// -------------- PARTE 3 -------------------

// Implemente uma função que muda a cor de fundo dos dias que possuem a classe "holiday";
// Adicione ao botão "Feriados" um evento de "click" que altere a cor de fundo dos dias que possuem a classe "holiday".

// De olho na dica 👀: É interessante que esse botão possua também a lógica inversa. Ao ser clicado novamente, ele retorna à configuração inicial com a cor “rgb(238,238,238)”.
const changeHolidayBackground = () => {
  const botaoFeriados = document.getElementById('btn-holiday');
    botaoFeriados.addEventListener('click', () => {
    botaoFeriados.style.background = "red";
    botaoFeriados.addEventListener('mousedown', () => {
      botaoFeriados.style.background = "rgb(238,238,238)";
    })
  })
  
} 
changeHolidayBackground() // Revisar clique infinito

// -------------- PARTE 4 -------------------

// Implemente uma função que crie dinamicamente um botão com o nome "Sexta-feira";
// Sua função deve receber como parâmetro a string “Sexta-feira”;
// Adicione a esse botão o ID "btn-friday";
// Adicione esse botão como filho/filha da tag <div> com classe "buttons-container".
const botaoSextaFeira = (param) => {
  const buttonsContainer = document.getElementsByClassName('buttons-container')[0];
  const botao = document.createElement('button');
  botao.id = "btn-friday"; // ou .setAttribute('id', 'btn-holiday')
  botao.innerHTML = param;
  buttonsContainer.appendChild(botao);

  botao.addEventListener('click', () => { // Parte 5
    botao.style.background = "red"
  })
}
botaoSextaFeira("Sexta-feira")

// -------------- PARTE 5 -------------------

// Implemente uma função que modifica o texto exibido nos dias que são Sexta-feira;
// Adicione ao botão “Sexta-feira” um evento de “click” e modifique o texto a ser exibido nos dias que são sextas-feiras.
// De olho na dica 👀: É interessante que esse botão possua também a lógica inversa. Ao ser clicado novamente, ele retorna à configuração inicial exibindo os dias.

// const modificaSexta = () => {
//   const sexta = document.getElementsByClassName('btn-friday')[0];
//   sexta.addEventListener('click', () => {
//     sexta.style.background = "red"
//   })
// }
// modificaSexta()
// -------------- PARTE 6 -------------------

// Implemente duas funções que criem um efeito de “zoom”;

// Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.

// De olho na dica 👀: Você pode utilizar a propriedade event.target.

// -------------- PARTE 7 -------------------

// Implemente uma função que adicione uma tarefa personalizada ao calendário;
// A função deve receber como parâmetro a string com o nome da tarefa (ex: “cozinhar”) e criar dinamicamente um elemento com a tag <span> contendo a tarefa;
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".

// -------------- PARTE 8 -------------------

// Implemente uma função que adicione uma legenda com cor para a tarefa;
// Essa função deverá receber como parâmetro uma string (‘cor’) e criar dinamicamente um elemento de tag <div> com a classe task;
// O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada;
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".


// -------------- PARTE 9 -------------------

// Implemente uma função que selecione uma tarefa;
// Adicione um evento que ao clicar no elemento com a tag <div> referente à cor da sua tarefa, atribua a esse elemento a classe task selected, ou seja, quando sua tarefa possuir a classe task selected ela estará selecionada;
// Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task, ou seja, essa tarefa está deixando de ser uma tarefa selecionada.

// -------------- PARTE 10 ------------------

// Implemente uma função que atribua a cor da tarefa ao dia do calendário;
// Adicione um evento que, ao clicar em um dia do mês no calendário, atribua a esse dia a cor da legenda da sua tarefa selecionada;
// Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119).


// --------------- BÔNUS --------------------

// Vamos adicionar compromissos ao seu calendário? Implemente uma função que, ao digitar um compromisso na caixa de texto “COMPROMISSOS”, adiciona o item à lista “MEUS COMPROMISSOS” ao clicar no botão “ADICIONAR”;
// Se nenhum caractere for inserido no campo input, a função deve retornar um alert com uma mensagem de erro ao clicar em “ADICIONAR”;
// Ao pressionar a tecla “enter” o evento também deverá ser disparado.

// De olho na dica 👀: Você pode utilizar a propriedade key.








const funcao1 = () => {
  const funcao2 = () =>{

  }
  funcao2()
}
funcao1()