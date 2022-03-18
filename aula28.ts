class Main {
  nome: string;
  idade: number;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }
}

const main = new Main('joao', 34);

namespace Tipo {
  export class validator {
    static validatorString(value: any): boolean {
      return typeof value === 'string';
    }

    static validatorNumber(value: any): boolean {
      return typeof value === 'number';
    }
  }
}

namespace Valor {
  export class validator {
    static validatorNome(value: any): boolean {
      return value.length <= 10;
    }

    static validatorIdade(value: any): boolean {
      if (value <= 10 || value >= 50) {
        return false;
      }

      return true;
    }
  }
}

if (Tipo.validator.validatorString(main.nome)) {
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
