type UserP = {
  nome: string;
  idade: number;
  dataNascimento?: number;
};

const pablo: UserP = {
  nome: 'joao',
  idade: 20,
};

function checkPokemon() {
  console.log(pablo.dataNascimento);

  if (pablo.dataNascimento) {
    console.log('possui data de nascimento');
  } else {
    console.log('não possui data de nascimento');
  }
}

checkPokemon();
