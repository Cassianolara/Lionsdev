for (let i = 0; i < 5; i++){
  // console.log(i)
}

for (let i = 0; i <= 5; i+=1){
    //console.log(i + 'segundo for')
}

let horas = 11
while(horas < 12){
    //console.log('Bom dia')
    horas++
}
 do{
  // console.log('bom dia')
    horas = horas + 1    
} while ( horas < 12)


    let horasArr = [11, 12, 13]
   horasArr.forEach((Element)=> console.log(Element))

        const readline = require('readline')
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

     
    rl.question ('digite a tabuada=', (input1) => {
        let tabuada = parseInt(input1)
    console.log(`A tabuada do ${tabuada} é`)
for(let i = 0; i <= 10; i++ ){
    console.log(tabuada * i)
    rl.close()
}
})


const listaDeCompras = ['arroz', 'feijao', 'macarrao', 'carne']
for(let i = 0; i < listaDeCompras.length; i++){
console.log(`item: ${listaDeCompras[i]}`)

}


const temperaturaAgua = 90
    