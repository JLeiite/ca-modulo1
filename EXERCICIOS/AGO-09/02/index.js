const letras = ["A", "a", "B", "C", "E", "e", 'eeeeeee'];

let quantidade = 0;

for (let letra of letras) {
  if (letra == 'e' || letra == "E"){
    quantidade++;
  }
}

console.log(quantidade);

/* OUTRA OPÇÃO PRA RESOLVER
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

  */