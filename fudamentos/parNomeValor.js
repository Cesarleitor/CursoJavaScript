// par nome/valor
const saudacao = "Opa"; // contexto léxico 1

function exec() {
  const saudacao = "falaa"; // contexto léxico 2
  return saudacao;
}

// objetos são grupos aninhados de par nome/valor
const Cliente = {
  Nome: "Cesar",
  Idade: 38,
  Peso: 90,
  Endereco: {
    Rua: "Elza Sturmer",
    Numero: 411,
    Bairro: "Nossa Senhora do Rosário",
  },
};
console.log(saudacao); 
console.log(exec());
console.log(Cliente);
