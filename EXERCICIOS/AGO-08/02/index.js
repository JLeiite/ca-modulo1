const jogada1 = 5;
const jogada2 = 3;

//seu código aqui
function consultaParOuImpar(numero) {
    if (numero % 2 === 0) {
      return "par";
    } else {
      return "impar";
    }
  }

if (consultaParOuImpar(jogada1) == consultaParOuImpar(jogada2)){
    console.log("Par ganhou.")
} else {
    console.log("Ímpar ganhou.")
}