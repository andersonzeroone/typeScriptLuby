type userProps = {
  nome: string;
  idade: number;
  altura: number;
  dataNascimento: string;
  colecaoPokemon: string[];
};

const user: userProps = {
  nome: 'anderson',
  idade: 25,
  altura: 25,
  dataNascimento: '22/22/22',
  colecaoPokemon: ['teste', 'exemplo'],
};

const arr: {
  nome: string;
  idade: number;
}[] = [
  {
    nome: 'pedro',
    idade: 25,
  },
];

const arr2: userProps[] = [
  {
    nome: 'anderson',
    idade: 25,
    altura: 25,
    dataNascimento: '22/22/22',
    colecaoPokemon: ['teste', 'exemplo'],
  },
];
