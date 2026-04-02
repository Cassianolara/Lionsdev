
const readline = require('readline')
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})


rl.question('Voce gosta de café? ', (input)=> {
   let cafe = input
    if(cafe === 'sim'){
        console.log('Muitas pessoas gostam de café! ')
        rl.close()
    }else{
        if(cafe === 'nao' || cafe === 'não'){
    console.log('Tem pessoas que nao gostam de café !')
rl.close()
        }
    }
})
