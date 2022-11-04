const caracteristicas = document.getElementsByClassName('caracteristicas');

const criarBotao = (indexDiv, quantidade, nome) => {
  const text = document.querySelector('.text');
  const text1 = document.querySelectorAll('.text')[1];

  for (let index = 0; index < quantidade; index += 1) {
    const createButton = document.createElement('button');
    createButton.innerHTML = nome[index];
    
    caracteristicas[indexDiv].appendChild(createButton);

    if (nome === coresFundo) {
      createButton.addEventListener('click', () => {
        text.style.background = nome[index];
        text1.style.background = nome[index];
      })
    }

    if (nome === coresFonte) {
      createButton.addEventListener('click', () => {
        text.style.color = nome[index];
        text1.style.color = nome[index];
      })
    }

    if (nome === tamanhoFonte) {
      createButton.addEventListener('click', () => {
        text.style.fontSize = nome[index];
        text1.style.fontSize = nome[index];
      })
    }

    if (nome === espacoLinhas) {
      createButton.addEventListener('click', () => {
        text.style.lineHeight = nome[index];
        text1.style.lineHeight = nome[index];
      })
    }

    if (nome === tipoFonte) {
      createButton.addEventListener('click', () => {
        text.style.fontFamily = nome[index];
        text1.style.fontFamily = nome[index];
      })
    }
  }
}

const coresFundo = ['white', 'black', 'green', 'blue', 'yellow'];
const coresFonte = ['black', 'red', 'white'];
const tamanhoFonte = ['8pt', '10pt', '12pt', '14pt', '20pt'];
const espacoLinhas = ['1', 'normal', '1.5', '2.0', '3.0']
const tipoFonte = ['Arial', 'Times New Roman']
criarBotao(0, 5, coresFundo);
criarBotao(1, 3, coresFonte);
criarBotao(2, 5, tamanhoFonte);
criarBotao(3, 5, espacoLinhas);
criarBotao(4, 2, tipoFonte);
