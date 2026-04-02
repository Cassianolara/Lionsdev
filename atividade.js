        const readline = require('readline')
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})
let usuario = {
   nome:'',
   idade:null
}


rl.setprompt('Digite seu nome!')
rl.prompt()

rl.on('line',(input)=>{
   if(!usuario.nome){
      usuario.nome = input
      input=null
   }
   if(!usuario.idade){
      rl.setPrompt('Insira sua idade ')
      rl.prompt()
      usuario.idade = input
   }
   if(!usuario.name && usuario.idade){
      
      console.log(`A idade do &{usuario.nome} é de &{usuario.idade} anos`)
   
      }})
