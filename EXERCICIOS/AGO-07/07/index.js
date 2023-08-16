let populacaoInicial = 1000, taxaTransmissao = 4, tempoEmDias = 7;

let infectadados = ((populacaoInicial * taxaTransmissao)* tempoEmDias) / 7;

console.log(`Em ${tempoEmDias} dias podem haver ${infectadados.toFixed(0)} pessoas infectadadas pela COVID.`)

