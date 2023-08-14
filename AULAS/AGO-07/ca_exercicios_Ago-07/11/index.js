let diametroEsfera = 6;

let raio = diametroEsfera / 2;
let volume = (4 / 3) * Math.pow(raio, 3);


console.log(`O volume da esfera com diâmetro ${diametroEsfera} é ${volume}pi ou ${(volume * Math.PI).toFixed(2)}`);