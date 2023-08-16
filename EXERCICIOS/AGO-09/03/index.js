const numeros = [54, 22, 14, 87, 10, 284];
let buscar = 10;

function buscaNumero(array, numeroProcurado) {
    let soma = 0;

    for (let i = 0; i < array.length; i++) {
      if (array[i] == numeroProcurado) {
        soma += 1;
      }
    }
    return soma;
  }
  
  console.log("Foram encontrados: ", buscaNumero(numeros, buscar), " ocorrências com o número " + buscar);