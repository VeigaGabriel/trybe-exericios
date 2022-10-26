    // Executando esse código iremos receber um erro `TypeError: Assignment to constant variable.`
    let pessoa = {
      nome: 'Henri',
      idade: 20
    }
    pessoa = {
      nome: 'Luna',
      idade: 19
    } // Altere essa estrutura para corrigir o erro.
    // console.log('Nome:', pessoa.nome);
    // console.log('Idade:', pessoa.idade);

    // Modifique a estrutura das funções a seguir para que elas sejam arrow functions;

    // 🚀 Transforme a função numeroAleatorio em uma arrow function;
    // Modifique a estrutura das funções a seguir para que elas sejam arrow functions;

    // 🚀 Transforme a função numeroAleatorio em uma arrow function;
        

    const numeroAleatorio = () => {
      return Math.random()
    }
    // console.log(numeroAleatorio(1).toFixed(1) * 10 + 1);

    // 🚀 Transforme a função hello em uma arrow function;

    const hello = nome => `Olá, ${nome}`;
    let nome = 'Ivan';
    console.log(hello(nome));

    // 🚀 Transforme a função nomeCompleto em uma arrow function;

    const nomeCompleto = (nome, sobrenome) => `${nome} ${sobrenome}`;
    console.log(nomeCompleto('Cassio', 'Peres'));

    // 🚀 Altere a expressão if/else utilizando ternary operator;

    let speed;
    const speedCar = (speed) => ( speed >= 120 ? `Você ultrapassou o limite de velocidade` : `Você está na velocidade permitida`);
    console.log(speedCar(90));
    console.log(speedCar(130));