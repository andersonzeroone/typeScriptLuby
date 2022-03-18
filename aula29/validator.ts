export function validatorString(value: any): boolean {
  return typeof value === 'string';
}

export function validatorNumber(value: any): boolean {
  return typeof value === 'number';
}

export function validatorNome(value: any): boolean {
  return value.length <= 100;
}

export function validatorIdade(value: any): boolean {
  return value >= 10;
}

export default class Objeto {
  lado: number;
  altura: number;
}
