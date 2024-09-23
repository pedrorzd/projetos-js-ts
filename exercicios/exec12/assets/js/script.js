const nomes = ["ana", "dan", "marian", "joao", "pedro"];

for (let nome1 in nomes) {
  console.log(nomes[nome1]); // retorna os indices dos dados
}

for (let nome2 of nomes) {
  console.log(nome2);
}
