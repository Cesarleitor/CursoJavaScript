// Estrutura de Controle - While 
function getInteiroAleatorioEntre(min, max) {
  const valor = Math.random() * (max - min) + min // gera um número aleatório entre min e max
  return Math.floor(valor) // arredonda para baixo
}

let opcao = 0 // inicializa a variável opcao

while (opcao != -1) {
  opcao = getInteiroAleatorioEntre(-1, 10) // gera um número aleatório entre -1 e 10
  console.log('Opção escolhida foi ' + opcao) // exibe a opção escolhida
}

console.log("Até a Próxima")
