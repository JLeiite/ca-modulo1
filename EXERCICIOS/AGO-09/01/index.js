const numeros = [2, 3, 4, 6];

function soma(array) {
    let soma = 0;

    for (let i = 0; i < array.length; i++) {
      soma += array[i];
    }
    return soma;
  }
  
console.log("Soma:", soma(numeros));