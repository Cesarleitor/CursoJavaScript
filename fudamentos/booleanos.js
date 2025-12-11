let isAtivo = false; // Valor booleano false
console.log(isAtivo); // Exibe: false

isAtivo = true; // Valor booleano true
console.log(isAtivo); // Exibe: true

// Convertendo valores para booleano usando o operador de negação dupla (!!)
isAtivo = 1; // Valor numérico 1 (considerado verdadeiro)
console.log(!!isAtivo); // Exibe: true

console.log('Os verdadeiros...');
console.log(!!3); // Exibe: true
console.log(!!-1); // Exibe: true
console.log(!!' '); // Exibe: true
console.log(!![]); // Exibe: true
console.log(!!{}); // Exibe: true       
console.log(!!Infinity); // Exibe: true

console.log('Os falsos...');
console.log(!!0); // Exibe: false
console.log(!!''); // Exibe: false
console.log(!!null); // Exibe: false
console.log(!!NaN); // Exibe: false
console.log(!!undefined); // Exibe: false
console.log(!!(isAtivo = false)); // Exibe: false

// Exemplo de uso em uma condição
let nome = 'Lucas';
console.log(nome || 'Desconhecido'); // Exibe: Lucas