class Forca {
  #palavra = '';
  #qtdLetras = 0;
  #URL_API = "https://servicodados.ibge.gov.br/api/v1/localidades/paises";

  constructor(palavra = '', qtdLetras = 0) {
    this.#palavra = palavra;
    this.#qtdLetras = qtdLetras != 0 ? qtdLetras : palavra.length;
  }

  set palavra(palavra) {
    this.#palavra = palavra;
    this.#qtdLetras = palavra.length;
  }
  get palavra() {
    return this.#palavra;
  }

  get qtdLetras() {
    return this.#qtdLetras;
  }

  async getAPI() {
    try {
      let response = await fetch(this.#URL_API);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      let listPalavras = await response.json();
      return listPalavras;

    } catch (error) {
      alert("Erro ao montar palavra da forca," + error);
    }
  }

  async obterNumeroAleatorio(n1, n2) {
    const min = Math.ceil(n1);
    const max = Math.floor(n2);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  async tratativaPalavraForca(palavraRandom) {
    let str = palavraRandom.replace(/\s/g, "");
    return str.normalize("NFD").replace(/[^a-zA-Zs]/g, "");
  }

  async getPalavraForca() {
    let palavraRamdom = '';
    let totalPalavras = await this.getAPI();
    let ramdom = await this.obterNumeroAleatorio(1, totalPalavras.length);
    palavraRamdom = totalPalavras[ramdom].nome.toUpperCase();
    this.#palavra = await this.tratativaPalavraForca(palavraRamdom);
    this.#qtdLetras = this.#palavra.length;
  }

}