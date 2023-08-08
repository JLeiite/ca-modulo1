/* Criando variáveis do tipo String */

const empresa = "Academy"; // Const - variáveis constantes, não podem ser alteradas em nenhum momento.

let usuario = "Ana Maria"; // Let - variáveis que permitem alterações de conteúdo

console.log(tipoSanguineo); // Retorna UNDEFINED por não ter sido declarado ainda, mas não apresenta erro.
var tipoSanguineo = "B-"; // Var - é um tipo de variável que pode ser declarado depois, sem dar erro no código. Não é recomendado seu uso por não dar erro.

console.log(empresa, usuario);

/* Criando variáveis do tipo Number */

let idade = 30;
let alturaEmMetros = 1.72;

// String template
console.log(`${usuario} tem ${idade} e sua altura é ${alturaEmMetros}`);

/* EXERCÍCIO VARIÁVEIS 1 */
const cidadeNatal = "Rio de Janeiro";
console.log(cidadeNatal);

let populacaoEmMilhoes;
populacaoEmMilhoes = 16_046_000; // Para separar as unidades de medidas pode ser usado o _

console.log(populacaoEmMilhoes);

/* TIPOS DE DADOS PRIMITIVOS EM JAVASCRIPT:

Boolean - true / false
null - nulo
undefined - não definido
Number - números inteiros ou não
String - qualquer tipo de nome, declarado entre aspas duplas ""

*/

// OPERADORES SIMPLES
let x = 10, y = 2;

let soma = x+y, subtracao = x-y, multiplicacao = x*y, divisao = x/y;

console.log(`Soma: ${soma}, Subtrai: ${subtracao}, Multiplica: ${multiplicacao}, Divide: ${divisao}`);

// OUTROS OPERADORES para atualizar o valor de uma variável (x = 10)
soma += x, subtracao -= x, multiplicacao *=x, divisao /= x;

console.log(`Soma ${x}: ${soma}, Subtrai ${x}: ${subtracao}, Multiplica por ${x}: ${multiplicacao}, Divide por ${x}: ${divisao}`);

let w = ++y; // Primeiro soma, depois retorna.
let z = w++; // Primeiro retorna, depois faz a soma.

console.log(`O valor de Y é ${y}. O valor de W é ${w}. E o valor de Z é ${z}.`);

// OPERADOR MÓDULO - Resto da divisão
let restoDivisao = 12 % 5;

console.log(restoDivisao);

// CONCATENAR STRING

let nome = "Juliana", sobrenome = "Leite", nomeCompleto = nome + " " + sobrenome;

console.log(nomeCompleto);

// OUTRAS OPERAÇÕES - Usando Math.
let raiz = Math.sqrt(144);

console.log(raiz);