class Player {
    #nome = "";
    #score = 0;
    #palavraAtual = "";
    #letrasInformadas = [];
    #tempoDecorrido = 0;
    constructor(nome, score = 0, palavraAtual = "", letrasInformadas = [], tempoDecorrido = 0){
      this.#nome = nome;
      this.#score = score;
      this.#palavraAtual = palavraAtual;
      this.#letrasInformadas = letrasInformadas;
      this.#tempoDecorrido = tempoDecorrido;
    }

    set nome( nome ) {
      this.#nome = nome;
    }
    get nome(){
      return this.#nome;
    }
    set score( score ) {
      this.#score = score;
    }
    get score(){
      return this.#score;
    }
    set palavraAtual( palavra ) {
      this.#palavraAtual = palavra;
    }
    get paralavraAtual() {
      return this.#palavraAtual;
    }
    set letrasInformadas( letras ) {
      this.#letrasInformadas = letras;
    }
    get letrasInformadas() {
      return this.#letrasInformadas;
    }
    set tempoDecorrido( tempo ) {
      this.#tempoDecorrido = tempo;
    }
    get tempoDecorrido() {
      return this.#tempoDecorrido;
    }

}