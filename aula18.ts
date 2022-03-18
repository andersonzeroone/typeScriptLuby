type user = {
  name: string;
  points: number;
};

function sleep(ms: number): Promise<void> {
  return new Promise((res) => setTimeout(res, ms));
}

async function promessa(): Promise<number> {
  console.log('dentro da promessa');

  return 10;
}

async function main() {
  const joao: user = {
    name: 'joao',
    points: 10,
  };

  await sleep(1000);

  try {
    const res = await promessa();
    joao.points = res;
    console.log('fim da promessa - ', res);
  } catch (err) {
    console.log('deu ruim');
  } finally {
  }
}

main();
