 const readline = require('readline')
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})
// rl.question('Digite o genero de filme que voce deseja assistir:  ', (input)=>{
// let filmes = input

// switch (filmes){
//     case 'Ação' :
//         console.log('Sala 1')
//         rl.close()
//         break;
//         case 'Comédia':
//             console.log('Sala 2')
//             rl.close()
//             break;
//             case 'Terror':
//                 console.log('Sala 3')
//                 rl.close()
//                 break;
//                 case 'Animação':
//                     console.log('Sala 4')
//                     rl.close()
//             default:
//                 console.log('Genero de filme nao encontrado')
//                 rl.close()
// }
// })



// rl.question('Digite sua nota  ', (input)=>{
//     let nota = parseFloat(input)
//     switch(true) {
//         case (nota >= 90 && nota <= 100):
//             console.log('Sua nota é A')
   
//     break;
//     case(nota >= 80 && nota <= 89 ):
//     console.log('Sua nota é B')
  
//     break;
//     case(nota >= 70 && nota <= 79):
//     console.log('Sua nota é C')
  
//     break;
//     case(nota >= 60 && nota <= 69):
//     console.log('Sua nota é D')
     
//         break;
//         case(nota >= 0 && nota <= 59):
//         console.log('Sua nota é C')
 
//         break;
//         default:
//         console.log('Nota incorreta')
//     }
//     rl.close()
// })


rl.question('Digite o codigo do produto:  ',(input) =>{
    let codigoProduto = input
    .replace(/a/g,'A')
    .replace(/b/g,'B')
    .replace(/c/g,'C')
        switch(codigoProduto){
        case 'A1':
            console.log('Batata chips')
            break;
            case 'B2':
                console.log('Amendoin')
                break;
                case 'C3':
                    console.log('Biscoito de chocolate')
                    break;
                    default:
                        console.log('Código invalido')

    }
    rl.close()
})