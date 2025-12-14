function getInteiroAleatorioEntre(min, max) {
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
}

let opcao //somnente inicializa a variável opcao sem atribuir valor

do {
  opcao = getInteiroAleatorioEntre(-1, 10); // gera um número aleatório entre -1 e 10
  console.log("Opção escolhida foi " + opcao);
} while (opcao != -1); // o bloco de código é executado pelo menos uma vez

console.log("Até a Próxima!");
