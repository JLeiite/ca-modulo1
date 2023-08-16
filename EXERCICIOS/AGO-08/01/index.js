const jogada1 = "pedra"
const jogada2 = "tesoura"

//seu código aqui
function jogada (jogada1, jogada2){
    if(jogada1 == "pedra" && jogada2 == "tesoura" || jogada1 == "tesoura" && jogada2 == "papel" || jogada1 == "papel" && jogada2 == "pedra"){
        console.log(`Vitória do Jogador 1`);
    } else if(jogada1 === jogada2){
        console.log("Empatou!")
    }
    else{
        console.log("Vitória do Jogador 2")
    }
}


console.log(`Jogador 1: ${jogada1}`);
console.log(`Jogador 2: ${jogada2}`);

jogada(jogada1, jogada2);