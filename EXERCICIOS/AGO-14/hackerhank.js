let precos = [10, 20, 30, 45, 5];


function solucao(precos) {
    let soma = 0;
    let menor = precos[0];
    
    for (let item of precos){
        soma += item;
        menor > item ? (menor = item) : (menor = menor);
    }
    if (precos.length >= 5){ // com promocao
        console.log(menor);
        console.log(soma-menor);
        
    } else { // sem promocao
        console.log(soma);
    }
    
}

solucao(precos);