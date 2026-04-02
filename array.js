
        const readline = require('readline')
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})
const listaDeTarefas = []

rl.question("digite a primeira tarefa", (input1) => {
listaDeTarefas.push(input1)

rl.question('Digite a segunda tarefa', (input2) =>{
listaDeTarefas.push(input2)

rl.question('Digite sua terceira tarefa', (input3) => {
listaDeTarefas.push(input3)


    
console.log(`Voce te ${listaDeTarefas}`)

listaDeTarefas.pop()
console.log('Vc realizou sua tarefa agora restam ${listaDeTarefas.length} a serem feitas')
})
})
})