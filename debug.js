const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let alunos = [];

function menu() {
    console.log("\n=== MENU ===");
    console.log("1 - Cadastrar Aluno");
    console.log("2 - Listar Alunos");
    console.log("3 - Editar Aluno");
    console.log("4 - Excluir ");
    console.log("5 - Sair");

    rl.question("Escolha uma opção: ", (opcao) => {
        switch (opcao) {
            case "1":
                cadastrarAluno();
                break;
            case "2":
                listarAlunos();
                menu();
                break;
            case "3":
                console.log('Digite o indice do Aluno: ')
                listarAlunos()
                editarAluno();
                break;
            case"4":
            if(alunos.length ===0 ){
                console.log("Nenhum aluno cadastrado")
            }else{console.log("Digite o nome do aluno")
            listarAlunos()
            menu()
            }
            break;
            case "5":
                console.log("Encerrando o programa...");
                rl.close();
                break;
            default:
                console.log("Opção inválida!");
                menu();
        }
    });
}

function cadastrarAluno() {
          rl.question("Nome", (nome) => {
            rl.question("Idade: ", (idade) => {
                rl.question("Curso: ", (curso) => {
                    let aluno = {
                        nome: nome,
                        idade: idade,
                        curso: curso
                    };

                    alunos.push(aluno);
                    console.log("Aluno cadastrado com sucesso!");

                    menu();
                });
            });
        }); 
}

function listarAlunos() {
    if (alunos.length === 0) {
        console.log("Nenhum aluno cadastrado.");
    } else {
        console.table(alunos);
    }

}

function editarAluno(){
  if(alunos.length < 1){
    console.log("Não há alnos Cadastrados")
    menu()
    return
  }
  rl.question("Indice do Aluno =>  ",(i)=>{
    const dadosAntigos = alunos[i]
      rl.question(`Editar Aluno ${dadosAntigos.nome}: Nome: =>`, (nome) => {
         rl.question("Idade: ", (idade) => {
          rl.question("Curso: ", (curso) => {
            let aluno = {
              nome: nome,
              idade: idade,
              curso: curso
            };
            alunos[i] = aluno;
            console.log("Aluno Editado com sucesso!");
            menu();
          });
        });
      });  
    })
}
         function excluir(){
        if(alunos.length === 0 ){
            console.log("Não há alunos cadastrados")
         
        }else{ menu()

        }
        rl.question("Indice que deseja ecluir", (i)=> {
           if(i > -1){
            alunos.splice(i, 1);
           }
                console.log("Aluno excluido com sucesso!  ")
                menu()
            })
         
                
        }
menu()
