const funcs = []; //array de funções

//usando var dentro do loop não cria um escopo para cada iteração 
for (var i = 0; i < 10; i++) { 
  funcs.push(function () {
    console.log(i); 
  });
}

funcs[2](); 
