let financiamentoInicial = 60_000;
let montante = 90_000;
let tempoEmMeses = 24;

let taxaJurosMensal = Math.pow(montante / financiamentoInicial, 1 / tempoEmMeses) - 1;

let porcentagem = taxaJurosMensal * 100;

console.log(`O seu financiamento de ${financiamentoInicial} reais teve uma taxa de juros de ${porcentagem.toFixed(5)}%, pois após ${tempoEmMeses} meses você teve que pagar ${montante} reais.`);