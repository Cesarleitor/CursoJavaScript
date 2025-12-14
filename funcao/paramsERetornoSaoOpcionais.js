function area(largura, altura) {
    const area = largura * altura
    if (area > 20) {
        console.log(`Valor acima da permitira: ${area}m2.`)
    } else {
        return area 
    }
}

console.log(area(2, 2)) // retorna 4
console.log(area(2)) // altura é undefined, resultado NaN
console.log(area()) // largura e altura são undefined, resultado NaN
console.log(area(2, 3, 17, 22, 44)) // retorna 6, os outros parâmetros são ignorados
console.log(area(5, 5)) // retorna 25 e exibe a mensagem do if