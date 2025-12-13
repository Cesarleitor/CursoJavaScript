Number.prototype.entre = function (inicio, fim ) {
    return this >= inicio && this <= fim
}

const imprimirResultado = function (nota) {
    if (nota.entre(9, 10)) {
        console.log('Quadro de Honra ' + nota)
    } else if (nota.entre(7, 8.99)) {
        console.log('Aprovado com ' + nota)
    } else if (nota.entre(4, 6.99)) {
        console.log('Recuperação com ' + nota)
    } else if (nota.entre(0, 3.99)) {
        console.log('Reprovado com ' + nota)
    } else {
        console.log('Nota Inválida ' + nota)
    }
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11) 