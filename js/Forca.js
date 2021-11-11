class Forca {
    #palavra;
    #qtdLetras = 0;
    constructor(palavra, qtdLetras = 0) {
      this.#palavra = palavra;
      this.#qtdLetras = qtdLetras != 0 ? qtdLetras : palavra.length;
    }
    set palavra( palavra ) {
      this.#palavra = palavra;
      this.#qtdLetras = palavra.length;
    }
    get palavra() {
      return this.#palavra;
    }

    get qtdLetras() {
      return this.#qtdLetras;
    }
   
  }