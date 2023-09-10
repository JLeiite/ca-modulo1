const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        }
    ],
    imprimirResumo: function (){
        let totalItens = 0;
        let somaProdutos = 0;
        for (let itensCarrinho of this.produtos){
            totalItens = itensCarrinho.qtd + totalItens;
            somaProdutos = (itensCarrinho.qtd * itensCarrinho.precoUnit) + somaProdutos;
        }
    
        console.log(` Cliente: ${this.nomeDoCliente}. \n Total de itens: ${totalItens} itens.\n Total a pagar: R$ ${(somaProdutos/100).toFixed(2)}`); 
    }
}

// PARTE 4
function addProdutoAoCarrinho(carrinho, produto){
    let idProduto = -1;

    for (let itemCarrinho of carrinho.produtos){
        if(itemCarrinho.id == produto.id || itemCarrinho.nome == produto.nome) {
            idProduto = produto.id;
            break;
        }
    }
    
    if (idProduto == -1){
        carrinho.produtos.push(produto);
    } else {
        carrinho.produtos[idProduto-1].qtd += produto.qtd;
    }
}

const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000
}

addProdutoAoCarrinho(carrinho, novaBermuda);
carrinho.imprimirResumo();