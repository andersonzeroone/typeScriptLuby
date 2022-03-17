function teste(): never {
  throw new Error();
}

function Erro(message: string): never {
  throw new Error(message);
}

function Exemplo(arg1: any, arg2: any): boolean {
  if (typeof arg1 === typeof arg2) {
    return true;
  } else if (typeof arg1 !== 'object') {
    return false;
  }

  Erro('os argumentos são diferentes');
}

console.log(Exemplo('oi', 'bay'));
console.log(Exemplo('3', 2));
