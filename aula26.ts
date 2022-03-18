class Sing {
  private static _instance: Sing;
  nome: string;

  private constructor() {}

  static getInstance(): Sing {
    if (this._instance) {
      this._instance = new Sing();
      return;
    }

    return this._instance;
  }
}

//classe 1 a

const instancia = Sing.getInstance();
instancia.nome = ' tested';

//  class 2

const novaInstacia = Sing.getInstance();
novaInstacia.nome;
