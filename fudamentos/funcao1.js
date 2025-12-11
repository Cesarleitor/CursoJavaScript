// Funcao sem retorno 
function imprimirSoma (a, b) {
    console.log(a + b); 
}

imprimirSoma(2, 3); // 5 
imprimirSoma(2); // NaN
imprimirSoma(2, 10, 4, 5, 6); // 12
imprimirSoma(); // NaN

// Funcao com retorno 
function soma (a, b = 1) // valor padrao para b
{
    return a + b; 
}

console.log(soma(2, 3)); // 5
console.log(soma(2)); // 3
console.log(soma()); // NaN