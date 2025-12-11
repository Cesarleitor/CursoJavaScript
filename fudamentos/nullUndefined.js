let valor // não inicializada
console.log(valor)// undefined significa que a variável foi declarada, mas não inicializada

valor = null // ausência de valor
console.log(valor) // null significa que a variável foi declarada e inicializada com "nenhum valor"
// console.log(valor.toString()) // Erro! TypeError: Cannot read property 'toString' of null
const produto = {}
console.log(produto.preco); // undefined - a propriedade não existe
console.log(produto);

produto.preco = 3.50;
console.log(produto); 

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco); // falso
//delete produto.preco; 
console.log(produto);  

produto.preco = null // sem preço
console.log(!!produto.preco); // sem preço
console.log(produto); // { preco: null }

