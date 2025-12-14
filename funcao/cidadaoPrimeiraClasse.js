//função em JS é First-Class Object (Citizen)
//Higher-Order Function

//criar função de forma literal
function fun1() { }

//armazenar em uma variável
const fun2 = function() { }

//armazenar em um array
const array = [function(a, b) { return a + b }, fun1, fun2]
console.log(array[0](2, 3)) //chamar a função que está na posição 0 do array

//armazenar em um atributo de objeto
const obj = {}  
obj.falar = function() { return 'Opa' }
console.log(obj.falar())

//passar função como parâmetro
function run(fun) {
    fun()
}

run(function() { console.log('Executando...') })

//uma função pode retornar/conter outra função
function soma(a, b) {
    return function(c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(4) //chamar a função soma e passar o retorno dela (que é outra função) o parâmetro 4

const cincoMais = soma(2, 3)
cincoMais(4) //chamar a função retornada e passar o parâmetro 4