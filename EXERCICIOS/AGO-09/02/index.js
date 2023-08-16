const letras = ["A", "a", "B", "C", "E", "e"];

function somaLetras(array) {
    let soma = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] == 'e' || array[i] == 'E') {
        soma += 1;
      }
    }
    return soma;
  }
  
  console.log("Soma:", somaLetras(letras));