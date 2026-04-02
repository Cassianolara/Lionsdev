// const somar = (a,b) => {
//     return a + b;

// }
// console.log(somar(10,5)
// )

// function calcularDobro(numero) {

// return numero * 2;

// }
// let resultado = calcularDobro(15)
// console.log(resultado)


                const readline = require('readline')
        const rl = readline.createInterface({
            input : process.stdin,
            output : process.stdout
        })
    
      function menu(){
           rl.question(':', (input)=>{
            let opcao = input
            switch(opcao){
                case '1':
                    console.log('CADASTRO');
                    break
                    case '2':
                        console.log('LISTA');
                        break
                        case '3':
                            console.log('DELETAR CADASTRO')
                            break
                            
            
            }     
            })
        }
        
           

            function cadastro(){
      rl.question('CADASTRO', ()=> {
            let cadastro = [input]
            rl.question('NOME: ',(input)=> {
                cadastro.push(input)
                rl.question('IDADE: ', (input1)=> {
                    cadastro.push(input1)
                    rl.question('CURSO: ', (input2)=>{
                        cadastro.push(input2);
                        console.log('CADASTRO FINALIZADO')
                      
                    })
                    
                    })
                })
      })
    }
        
        
            
    
           
        
            