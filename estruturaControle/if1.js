function soBoasNoticia(nota) {
  if (nota >= 7) {
    console.log("Aprovado com " + nota);
  }
}

soBoasNoticia(8.1); 
soBoasNoticia(6.1);

function seForVerdadeEuFalo(valor) {
  if (valor) {
    console.log("É verdade... " + valor);
  }
}

seForVerdadeEuFalo(); //undefined é falso
seForVerdadeEuFalo(null); //null é falso
seForVerdadeEuFalo(undefined); //undefined é falso
seForVerdadeEuFalo(NaN); //NaN é falso
seForVerdadeEuFalo(""); //string vazia é falsa
seForVerdadeEuFalo(0); //0 é falso
seForVerdadeEuFalo(-1); //-1 é verdadeiro
seForVerdadeEuFalo(" "); //string com espaço é verdadeira
seForVerdadeEuFalo("?"); //string com caractere é verdadeira
seForVerdadeEuFalo([]); //array vazio é verdadeiro
seForVerdadeEuFalo([1, 2]); //array com elementos é verdadeiro
seForVerdadeEuFalo({}); //objeto vazio é verdadeiro
seForVerdadeEuFalo({ a: 1 }); //objeto com propriedade é verdadeiro