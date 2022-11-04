const caracteristicas = document.getElementsByClassName('caracteristicas');
// const button = document.getElementsByTagName('button')

// const a = createButton = document.createElement('button');
// createButton.className = 'XX';
// createButton.innerHTML = "botao"

// const addButton = caracteristicas[0].appendChild(createButton)
const criarBotao = (indexDiv, quantidade, nome) => {
  for (let index = 0; index < quantidade; index += 1) {
    const createButton = document.createElement('button');
    createButton.className = 'XX';
    createButton.innerHTML = nome[index]
    
    caracteristicas[indexDiv].appendChild(createButton)

    createButton.addEventListener('click', () => {
      createButton.style.background = nome[index];
    })
  }
}
// const bg = CSSStyleDeclaration.background;
const coresFundo = ['white', 'black', 'green', 'blue', 'yellow'];
const coresFonte = ['preto', 'vermelho', 'branco'];
const tamanhoFonte = ['8pt', '10pt', '12pt', '14pt', '20pt'];
const espacoLinhas = ['1', 'normal', '1.5', '2.0', '3.0']
const tipoFonte = ['Arial', 'Times New Roman']
criarBotao(0, 5, coresFundo);
criarBotao(1, 3, coresFonte);
criarBotao(2, 5, tamanhoFonte);
criarBotao(3, 5, espacoLinhas);
criarBotao(4, 2, tipoFonte);
