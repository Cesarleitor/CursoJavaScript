function compras(trabalho1, trabalho2) {
  const comprarSorvete = trabalho1 || trabalho2; // operador or
  const comprarTv50 = trabalho1 && trabalho2; // operador and
  // const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor
  const comprarTv32 = trabalho1 != trabalho2; // operador diferente (xor lógico)
  const manterSaudavel = !comprarSorvete; // operador unario

  return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel };
}

console.log(compras(true, true)); // ambos os trabalhos deram certo
console.log(compras(true, false)); // apenas o trabalho1 deu certo
console.log(compras(false, true)); // apenas o trabalho2 deu certo
console.log(compras(false, false)); // nenhum dos trabalhos deu certo
