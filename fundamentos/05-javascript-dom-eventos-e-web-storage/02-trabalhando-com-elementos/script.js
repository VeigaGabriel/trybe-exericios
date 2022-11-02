// ------------------ BUSCANDO ELEMENTOS ------------------------

// // 1 - Acesse o elemento elementoOndeVoceEsta.
// const ondeVoceEsta = document.getElementById('elementoOndeVoceEsta');
// // 2 - Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
// const pai = ondeVoceEsta.parentNode;
// pai.style.color = "red";

// // 3 - Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
// const primeiroFilhoDoFilho = ondeVoceEsta.firstElementChild;
// primeiroFilhoDoFilho.innerText = "filho do filho";

// // 4 - Acesse o primeiroFilho a partir de pai.
// const primeiroFilho = pai.firstElementChild;

// // 5 - Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
// const primeiroFilho2 = ondeVoceEsta.previousElementSibling;

// // 6 - Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
// const atencao = ondeVoceEsta.nextSibling;

// // 7 - Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
// const terceiroFilho = ondeVoceEsta.nextElementSibling;

// // 8 - Agora acesse o terceiroFilho a partir de pai.
// const terceiroFilho2 = pai.lastElementChild.previousElementSibling;

// --------------- CRIANDO ELEMENTOS ---------------------------

// Crie um irmão para elementoOndeVoceEsta.
// Crie um filho para elementoOndeVoceEsta.
// Crie um filho para primeiroFilhoDoFilho.
// A partir desse filho criado, acesse terceiroFilho.

const ondeVoceEsta = document.getElementById('elementoOndeVoceEsta');
const pai = document.getElementById('pai')
const primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho')
let filho = document.createElement('section');
let criaFilho = pai.appendChild(filho);
let criaFilhoDoElemento = ondeVoceEsta.appendChild(filho)
let filhoDoFilhoDoFilho = primeiroFilhoDoFilho.appendChild(filho)

console.log(filhoDoFilhoDoFilho.parentElement.parentElement.nextElementSibling)