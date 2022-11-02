const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');
const allLi = document.getElementsByTagName('li')

// - Copie esse arquivo e edite apenas ele;
//  - Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

// - Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
//  - Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?


const techOnClick  = (event) => {
  const techElement = document.querySelector('.tech');
  techElement.classList.remove('tech');
  event.target.classList.add('tech');
  //input.value = '';       // ??????????????
};

firstLi.addEventListener('click', techOnClick)
secondLi.addEventListener('click', techOnClick)
thirdLi.addEventListener('click', techOnClick)

// - Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
input.addEventListener('input', (event) => {
  const techElement = document.querySelector('.tech');
  techElement.style.backgroundColor = "red";
})
// input.addEventListener('input', (event) => {
//   const techElement = document.querySelector('.tech');
//   techElement.innerText = event.target.value;        // Gabarito
// });


// - Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
//  - Que tal redirecionar para seu portfólio?
myWebpage.addEventListener('dblclick', () => {
  // window.location.replace('https://www.com.br')
})

// - Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;
myWebpage.addEventListener('mouseover', () => {
  myWebpage.style.color = "yellow";
  myWebpage.addEventListener('mouseleave', () => {
    myWebpage.style.removeProperty('color')
  })
})

// Segue abaixo um exemplo do uso de event.target:
// firstLi.addEventListener("mouseover", mouseOver);
function mouseOver(evento) {
  console.log(evento.type)
  console.log(evento.target)
}



const resetText = (event) => {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.