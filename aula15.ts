type User = {
  nome: string;
  idade: number;
  dataNascimento: string;
  maioridade: boolean;
};

const joao: User = {
  nome: 'joao',
  idade: 23,
  dataNascimento: '22/22/22',
  maioridade: true,
};

type APIInput = {
  nome: string;
  dataNascimento: string;
};

function Api({ nome, dataNascimento }: APIInput) {}

function chamadaApi(usr: User) {
  const idade = 10;

  const { idade: usrIdade, maioridade, ...rest } = usr;

  Api(rest);
}

const arr: string[] = ['primeiro', 'segundo', 'terceiro'];

const [valor1, ...rest] = arr;

const valor = arr[1];

console.log(valor);
console.log(rest);
