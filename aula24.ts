class Retangulo {
  static pi = 3.1444;

  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  calcularArea() {
    return this.x * this.y;
  }

  static getPi() {
    return this.pi;
  }
}

const novoRetangulo = new Retangulo(12, 60);

novoRetangulo.calcularArea();
Retangulo.pi;

Retangulo.getPi();
