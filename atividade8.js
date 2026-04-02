const readline = require('readline')
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})



rl.question('Digite tres hobbies', (input) => {
    let lista = [input]
    lista.push(input)
    rl.question('Segundo', (input2)=>{
    lista.push(input2)
    })
    console.log('Esta é sua lista de hobbies')
    for(let i = 0; i < lista.length; i++)
        console.log( `${lista[i]}`)
rl.close()
})