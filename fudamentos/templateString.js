const nome = "Rebeca";

//usando aspas duplas " "
const concatenacao = "Olá " + nome + "!";

//usando crase ` `
const template = `
Olá 
${nome}!`;

console.log(concatenacao, template); //mesmo resultado

//expressões
console.log(`1 + 1 = ${1 + 1}`);

const up = (texto) => texto.toUpperCase();
console.log(`Ei... ${up("cuidado")}!`);
