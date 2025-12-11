var numero = 1; // variável global
{
    let numero = 2; // variável local ao bloco 
    console.log('dentro =', numero); // dentro = 2
}

console.log('fora =', numero) // fora = 1