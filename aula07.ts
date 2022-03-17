function sum(params1: number, params2: number): string {
  return (params1 + params2).toString();
}

const result = sum(6, 7);

const exemplo: (params1: number, params2: number) => string = sum;

type Test = {
  name: string;
  age: number;
};

const exemplo2: (test: Test) => boolean = (test) => {
  return test.age >= 18;
};

function compare<T>(params1: T, params2: T): boolean {
  return params1 === params2;
}
compare(2, 2);
