// ||
// &&
// !=

const nota1 = 7
const nota2 = 8
const valor = 6

const resultadoNota1 = valor >= nota1 
const resultadoNota2 = valor >= nota2

console.log(resultadoNota1)
console.log(resultadoNota2)


// let comResponsaveis = true 

// if(idade2 >= comResponsaveis)

//     console.log(comResponsaveis)


    let numero = 20
    if (numero > 10 && numero < 50){
        console.log("Esta no intervalo")
    }else{
        console.log('Nao esta no intervalo')
    }

   
   
    const number = 19
const ParOuImpar = number % 2 
if(ParOuImpar === 0){
    console.log ('Numero Par')
}else{
    console.log('Numero Impar')
}


const ValorBolacha = 10
const estoque = true
const SaldoEmConta = 40


if(SaldoEmConta >= ValorBolacha && estoque === true ){
    console.log('Pode ser comprado')
}else{
    console.log('Nao pode ser comprado')
}


const Saldo = 1000
const EmEstoque = true
const ValorDoProduto = 1000

if(Saldo >= ValorDoProduto && EmEstoque === true) {
    console.log('Pode ser comprado')
}else{
    console.log('Nao pode ser comprado')
}

        const idade = 18
        const titulo = true
      
        if(idade >= 16 && titulo){
            console.log('Pode votar')
        }else{
            console.log('Nao pode votar')
        }


        const readline = require('readline')
const rl= readline.createInterface({input: process.stdin,
    output: process.stdout
})

rl.on('line', (input) => {

})

rl.setPrompt('Seu palpite')


        let entradaDoUsuario = ""
        