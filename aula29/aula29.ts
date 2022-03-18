import obj, { validatorString, validatorNome } from './validator';

class Main2 {
  nome: string;
  idade: number;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }
}

const main2 = new Main2('pedro', 45);

if (validatorString(main.nome) && validatorNome(main.nome)) {
  console.log('nome valido');
} else {
  console.log('nome invalido');
}

if (
  Tipo.validator.validatorNumber(main.idade) &&
  Valor.validator.validatorIdade(main.idade)
) {
  console.log('idade valido');
} else {
  console.log('idade invalido');
}
