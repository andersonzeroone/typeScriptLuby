const teste4: string = '2345';

let teste5: number;

teste5 = 567;

type UserT = {
  nome: string;
  idade: number;
};

let obj = {
  nome: 'pedro',
  idade: 18,
};

obj.nome = 'maria';
obj.idade = 50;

const carlos: UserT = {
  nome: 'carlos',
  idade: 30,
};

const listArray: string[] = ['maria', 'mar'];

listArray[1] = 'ana';

listArray.push('clara');

const newUser = carlos;

newUser.nome = 'gustavo';
