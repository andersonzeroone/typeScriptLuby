function test(param: string): string {
  return '123';
}

const juntarStrings = (): string => {
  return 'teste';
};

type soma = (param: number, params2: number) => number;

const funcSomar: soma = (param1, param2) => {
  return param1 + param2;
};

type funcOpcional = (param: number, params2: number) => number;

const opcional: funcOpcional = (param1, param2) => {
  if (param1 === undefined) {
    return param1;
  } else {
    return param1 + param2;
  }
};

console.log(funcSomar(1, 2));

console.log(opcional(5, 6));
