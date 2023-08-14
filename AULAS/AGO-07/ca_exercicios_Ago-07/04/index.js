let capital = 1000;      // Capital inicial
let taxaMensal = 12.5;   // Taxa de juros em porcentagem
let tempo = 5;           // Tempo em anos

let taxaDecimal = taxaMensal / 100;
let montante = capital * Math.pow(1 + taxaDecimal, tempo);
let juros = montante - capital;

console.log(`Montante após ${tempo} anos: R$${montante.toFixed(2)}`);
console.log(`Juros acumulados: R$${juros.toFixed(2)}`);