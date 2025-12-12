//o efeito de içamento (hoisting) com var
console.log('a =', a)
var a = 2
console.log('a = ', a)

//o efeito de içamento com let nao ocorre da mesma forma com var
console.log('b =', b)
let b = 3
console.log('b =', b)
