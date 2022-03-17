type User = {
  nome: string;
  idade: number;
  altura: number;
  peso: number;
  apelido: string;
};

const joao: User = {
  nome: 'joao',
  idade: 10,
  altura: 10,
  peso: 10,
  apelido: 'jao',
};

type List = [string, number, string];

const test: List = ['joão', 10, 'pedro'];

type key = keyof User;

// const exemplo: key = 'altura';
