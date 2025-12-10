const escola = "Cod3r";

console.log(escola.charAt(4)); //mostra o caractere na posição 4
console.log(escola.charAt(5)); //posição que não existe aparece vazia
console.log(escola.charCodeAt(3)); //código da tabela unicode
console.log(escola.indexOf('3')); //posição do caractere '3'

console.log(escola.substring(1)); //do índice 1 até o final
console.log(escola.substring(0, 3)); //do índice 0 até o 3 (3 não incluso)

console.log('Escola '.concat(escola).concat("!")); //concatena strings
console.log('Escola ' + escola + "!"); //concatena strings
console.log(escola.replace(3, 'e')); //substitui o caractere 3 por e  

console.log('Ana,Maria,Pedro'.split(',')); //divide a string em um array a partir do separador ','