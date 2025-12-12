const funcs = [] //array de funções

//usando let dentro do loop cria um escopo para cada iteração
for (let i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
})
    
}

funcs[2]() //chama a função que está na posição 2 do array
funcs[8]() //chama a função que está na posição 8 do array