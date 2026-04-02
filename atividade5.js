       const readline = require('readline')
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})
let idade = ''
let maiorIdade = true
let adulto = 18

rl.question('Qual sua idade? ', (input) =>{
    idade = parseFloat(input)
    if(idade >= adulto && maiorIdade === true){
        console.log(`Voce tem ${idade} e é maior de idade`)
 }else{console.log(`Voce tem ${idade} e nao e maior de idade`)}
    rl.close()
})
