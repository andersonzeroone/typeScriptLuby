class usuario {
  private _idade: number;

  get idate() {
    return this._idade;
  }

  set idade(valor: number) {
    if (valor < 0 || valor > 100) {
      throw new Error('idade invalida');
    }
  }
}

const maria = new usuario();

console.log('1', maria.idade); //imprimi 1 0

maria.idade = 78;

console.log('2', maria.idade); //imprimi 1 78
