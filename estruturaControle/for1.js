// exemplo com while
let contador = 1
while(contador <= 10) {
    console.log('contador = ' + contador)
    contador++
}

// exemplo com for
for(let i = 1; i <= 10; i++) {
    console.log('i = ' + i) 
}

// exemplo for com array 
const notas = [6.7, 7.4, 9.8, 8.1, 7.7]  // array de notas
for(let i = 0; i < notas.length; i++) {
    console.log(`nota = ${notas[i]}`) // acessa cada elemento do array notas, usar crase para interpolar ``
}

