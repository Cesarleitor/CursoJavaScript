const imprimirResultado = function (nota) {
  switch (Math.floor(nota)) {
    case 10:
    case 9:
      console.log("Quadro de Honra " + nota);
      break;
    case 8:
    case 7:
      console.log("Aprovado com " + nota);
      break;
    case 6:
    case 5:
      console.log("Recuperação com " + nota);
      break;
    case 4:
    case 3:
    case 2:
    case 1:
    case 0:
      console.log("Reprovado com " + nota);
      break;
    default:
      console.log("Nota inválida");
  }
};

imprimirResultado(10);
imprimirResultado(9.2);
imprimirResultado(8.2);
imprimirResultado(7.3);
imprimirResultado(5.1);
imprimirResultado(6.1);
imprimirResultado(3.2);
imprimirResultado(2.4);
imprimirResultado(1);
imprimirResultado(0);
imprimirResultado(-1);
imprimirResultado(11);
