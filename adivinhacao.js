
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


const numeroSecreto = Math.floor(Math.random() * 10) + 1;
let tentativas = 1;

function pergunta() {
    rl.question('Adivinhe o número entre 1 e 10: ', (resposta) => {
        const palpite = parseInt(resposta)
       
        if (palpite === numeroSecreto) {
            console.log('Parabéns! Você acertou o número!');
            console.log ('E tentou ' + tentativas + ' vezes.')
            rl.close();
        } else if (palpite < numeroSecreto) {
            console.log('Tente um número maior.');
            tentativas++
            pergunta();
        } else {
            tentativas++
            console.log('Tente um número menor.');
            pergunta();
            
        }
    });
}
pergunta();