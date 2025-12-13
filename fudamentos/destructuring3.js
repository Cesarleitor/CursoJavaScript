
function rand({ min = 0, max = 1000 } = {}) {
    const valor = Math.random() * (max - min) + min // gerar numero aleatorio entre min e max
    return Math.floor(valor) // arredonda para baixo
}
console.log(rand({ max: 50, min: 40 })) // passando objeto com min e max
console.log(rand({ min: 955 })) // passando objeto com min
console.log(rand({})) // passando objeto vazio
console.log(rand())   // sem passar nada, ai usa os valores padroes do proprio parametro da funcao