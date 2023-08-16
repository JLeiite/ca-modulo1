let valorProduto = 129.99;
let dinheiro = 80;

let descontoPorcentagem = ((valorProduto - dinheiro) / valorProduto) * 100;

console.log(`O desconto necessário é de ${descontoPorcentagem.toFixed(2)}%`);