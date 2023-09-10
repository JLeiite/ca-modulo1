const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ]
};


function corrigirProva(prova){
    let pontos = 0;

    let totalQuestoes = prova.questoes.length
    for(let i = 0; i < totalQuestoes; i++){
        prova.questoes[i].resposta == prova.questoes[i].correta ? pontos++ : '';
    }

    let nota = pontos/prova.questoes.length * 10;
 
    console.log(`O aluno(a) ${prova.aluno} acertou ${pontos} questões e obteve nota ${nota.toFixed(1)}`)
}

corrigirProva(prova);