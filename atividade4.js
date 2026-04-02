       const readline = require('readline')
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})
let anoNascimento = ''
let anoAtual= 2026

rl.question("Digite sua data de nascimento :", (input)=> {
    anoNascimento = parseFloat(input)
    let idade = anoAtual - anoNascimento

   console.log(`A sua idade é de ${idade}`)

 
       rl.close()
   }


)
