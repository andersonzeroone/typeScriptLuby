const list: string[] = ['text', 'exemplo'];

const list2: Array<string> = ['text', 'exemplo'];

const idade: number[] = [1, 2];

const idade2: Array<number> = [1, 2];

const mist: (string | number | boolean)[] = [12, 'oi', true];

const inception: string[][] = [['oii']];

const inception2: Array<string[]> = [['test']];

const random: (string[] | number[] | boolean[])[] = [['tes'], [1], [true]];

random.map((item) => {
  const temp = item;
});

idade.map((idade) => {
  const novaIdade = idade + 1;
});
