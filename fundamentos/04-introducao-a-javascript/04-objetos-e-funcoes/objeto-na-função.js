function infoLoja (a,b) {
  let lojaRoupas = {
    roupasBrasil: {
      cores: ['verde', 'amarelo', 'azul'],
      tamanhos: ['P', 'M', 'G', 'GG'],
      marcas: ['marca1', 'marca2', 'marca3']
    },
    roupas2: {
      cores: ['vermelho', 'branco', 'verde'],
      tamanhos: ['P', 'M', 'G'],
      marcas: ['marca1', 'marca2', 'marca3']
    },
    roupas3: {
      cores: ['vermelho', 'rosa', 'preto'],
      tamanhos: ['M', 'G', 'GG'],
      marcas: ['marca1', 'marca2', 'marca3']
    }
  };
    // return lojaRoupas.roupasBrasil.cores
    if (a == undefined) {
      return lojaRoupas
    }
    return lojaRoupas[a][b]
}
console.log(infoLoja("roupasBrasil", "cores"))
