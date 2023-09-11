const comentario = "Esse COVID é muito perigoso!";

const achouCovid = comentario.toLowerCase().includes('covid');
const achouPandemia = comentario.toLowerCase().includes('pandemia');

if(achouCovid || achouPandemia) {
    console.log('Comentario bloqueado por conter palavras proibidas')
} else {
    console.log('Comentario autorizado.')
}