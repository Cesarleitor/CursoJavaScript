// Armazenando uma funcao em uma variavel
const imprimirSoma = function (a, b) {
  console.log(a + b);
};
imprimirSoma(2, 3);

//Armazenando uma funcao arrow em uma variavel
// => substitui a palavra function
const soma = (a, b) => {
  return a + b;
};

console.log(soma(2, 3));

// Retorno Implicito
// => om apenas uma linha, nao precisa de chaves nem da palavra return
const subtracao = (a, b) => a - b;
console.log(subtracao(2, 3));

// Retorno Implicito com um unico parametro
const imprimir2 = a => console.log(a);
imprimir2("Legal!!!");
