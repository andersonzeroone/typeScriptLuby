enum Permissoes {
  adm,
  client,
}

abstract class Base {
  abstract nome: string;
  abstract sobrenome: string;

  abstract getNomeCompleto(): string;
  abstract getPermissoes(): Permissoes;
}

class Usuario extends Base {
  nome: string;
  sobrenome: string;

  constructor(nome: string, sobrenome: string) {
    super();

    this.nome = nome;

    this.sobrenome = sobrenome;
  }

  getNomeCompleto() {
    return `${this.nome} ${this.sobrenome}`;
  }

  getPermissoes(): Permissoes {
    return Permissoes.adm;
  }
}

const pedro = new Usuario('pedro', 'santos');

pedro.getNomeCompleto();
