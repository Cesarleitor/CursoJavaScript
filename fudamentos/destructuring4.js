function rand([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min] // substituir valores se min for maior que max
    const valor = Math.random() * (max - min) + min // gerar numero aleatorio entre min e max
    return Math.floor(valor) // arredonda para baixo
}

console.log(rand([50, 40])) // passando array com min e max
console.log(rand([992])) // passando array com min
console.log(rand([, 10])) // passando array com max
console.log(rand([])) // passando array vazio           
//console.log(rand())   // sem passar nada, da erro porque espera um array
