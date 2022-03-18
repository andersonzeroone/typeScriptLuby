type classProps = {
  altura?: number;
  largura?: number;
  profundidade?: number;

  x?: number;
  y?: number;
  z?: number;
};

class paralelepípedo {
  altura: number;
  largura: number;
  profundidade: number;

  x: number;
  y: number;
  z: number;

  private volume: number;

  constructor({
    altura = 100,
    largura = 120,
    profundidade = 20,
    x = 0,
    y = 0,
    z = 0,
  }: classProps) {
    this.altura = altura;
    this.largura = largura;
    this.profundidade = profundidade;

    this.x = x;
    this.y = y;
    this.z = z;

    this.volume = this.calcularVolume();
  }

  private calcularVolume(): number {
    return this.altura * this.largura * this.profundidade;
  }

  getPosition(): string {
    return `x:${this.x} y:${this.y} z:${this.z}`;
  }

  getVolume() {
    return this.volume;
  }

  setVolume(inputNumber: number): boolean {
    if (inputNumber > 0 && inputNumber < 10000) {
      this.volume = inputNumber;

      return true;
    }

    return false;
  }
}

const novoParalelepípedo = new paralelepípedo({ profundidade: 100 });

if (novoParalelepípedo.altura === 100) {
  console.log('altura igual a 100');
}

novoParalelepípedo.altura = 100;
novoParalelepípedo.largura = 120;
novoParalelepípedo.profundidade = 60;

novoParalelepípedo.setVolume(100);

console.log(novoParalelepípedo.getPosition());
console.log(novoParalelepípedo.getVolume());
