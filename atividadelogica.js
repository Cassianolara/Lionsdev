const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
let salvar = [];

    function menu(){
    console.log('1 - Adicionar')
    console.log('2 - Listar')
    console.log('3 - Editar')
    console.log('4 - Marcar')
    console.log('0 - Encerrar programa!')

    rl.question('==Digite a opção desejada== ', (input)=>{
        switch(input){
            case '1':
            Adicionar();
            break;
            case'2':
            listar();
            break;
            case'3':
            editar();
            break;
            case'4':
            marcar();
            break;
            case'0':
            console.log('Encerrando...');
            rl.close();
            break;
            default:
                console.log('Opção inválida...');
                menu()

        }
    })
}

    function Adicionar(){
    rl.question('Lembrete: ', (lembrete)=>{
        rl.question('Prazo: ',(prazo)=>{
            rl.question('Concluido',(concluido)=>{
        
        let lembretes = {
            lembrete:lembrete,
            prazo:prazo,
            concluido:false
        }
        salvar.push(lembretes)
        console.log('=Seu lembrete foi salvo com sucesso=')
        
        menu()
       })
    })
 })

}
    function listar(){
    if(salvar.length === 0){
        console.log('==Você não tem nenhum lembrete salvo==')
        menu()
    }else{
        console.table(salvar)
        menu()
    }
}


function marcar() {
  if(salvar.length === 0){
    console.log('Não há lembretes!')
    menu()
    return
  }
  rl.question('Digite o indice do lembrete concluido!', (i)=>{
    let index = (i)
    if(isNaN(index) || index < 0 || index >= salvar.length){
        console.log('indice invalido')
        menu()

    }
    salvar[index].concluido = true
    console.log(`Lembrete ${salvar[index].lembrete} foi concluido`)
    menu()
  })


  }
  
menu()