const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores[0], valores[3]); // Acessa o primeiro e o quarto elemento do array
console.log(valores[4]); // Acessa um índice que não existe, retorna undefined

valores[4] = 10 // Adiciona um novo elemento no índice 4
console.log(valores);
console.log(valores.length); // Mostra o tamanho do array

valores.push({id: 3}, false, null, 'teste'); // Adiciona vários elementos ao final do array
console.log(valores); 

console.log(valores.pop()); // Remove o último elemento do array e o retorna
delete valores[0]; // Remove o elemento no índice 0, deixando um "buraco" no array
console.log(valores);

console.log(typeof valores); // Mostra o tipo do array, que é 'object'