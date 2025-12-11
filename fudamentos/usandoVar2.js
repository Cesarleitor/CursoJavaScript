var numero = 1; // variável global
{
  var numero = 2; // variável sobrescreve a global
  console.log("dentro =", numero); // dentro = 2
}
console.log("fora =", numero); // fora = 2
