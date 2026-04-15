const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let alunos = [];

function menu() {
    console.log("\n=== MENU ===");
    console.log("1 - Cadastrar Aluno");
    console.log("2 - Pesquisar Por Nome");
    console.log("3 - Listar Todos");
    console.log("4 - Excluir um Aluno");
    console.log("5 - Maior Nota");
    console.log("6 - Média das notas");
    console.log("0 - Sair");

    rl.question("Escolha uma opção: ", (opcao) => {
        switch (opcao) {
            case "1":
                cadastrarAluno();
                break;
            case "2":
                pesquisarPorNome();
                break;
            case "3":
                listarTodos();
                break;
            case "4":
                listarTodos();
                excluirAluno();
                break;
            case "5":
                maiorNota();
                break;
            case "6":
                mediaNotas();
                break;
            case "0":
                console.log("Saindo...");
                rl.close();
                break;
            default:
                console.log("Opção inválida!");
                menu();
        }
    });
}


function cadastrarAluno() {
    rl.question("Nome: ", (nome) => {
        rl.question("Idade: ", (idade) => {
            rl.question("Curso: ", (curso) => {
                rl.question("Nota: ", (nota) => {

                    let aluno = {
                        nome: nome,
                        idade: Number(idade),
                        curso: curso,
                        nota: Number(nota)
                    };

                    alunos.push(aluno);
                    console.log("Aluno cadastrado com sucesso!");

                    menu();
                });
            });
        });
    });
}


function pesquisarPorNome() {
    rl.question("Digite o nome: ", (nomeDigitado) => {

        let busca = nomeDigitado.toLowerCase();

        let encontrados = alunos.filter(aluno =>
            aluno.nome.toLowerCase().includes(busca)
        );

        if (encontrados.length > 0) {
            console.table(encontrados);
        } else {
            console.log("Nenhum aluno encontrado.");
        }

        menu();
    });
}


function listarTodos() {
    if (alunos.length === 0) {
        console.log("Nenhum aluno cadastrado.");
    } else {
        console.log(alunos.length());
    }

    menu();
}


function excluirAluno() {
    if (alunos.length === 0) {
        console.log("Nenhum aluno para excluir.");
        menu();
        return;
    }

    rl.question("Digite o índice do aluno: ", (i) => {
        i = Number(i);

        if (i >= 0 && i < alunos.length) {
            alunos.splice(i, 1);
            console.log("Aluno excluído com sucesso!");
        } else {
            console.log("Índice inválido!");
        }

        menu();
    });
}


function maiorNota() {
    if (alunos.length === 0) {
        console.log("Nenhum aluno cadastrado.");
        menu();
        return;
    }

    let maior = alunos[0];

    for (let i = 1; i < alunos.length; i++) {
        if (alunos[i].nota > maior.nota) {
            maior = alunos[i];
        }
    }

    console.log("Aluno com maior nota:");
    console.table([maior]);

    menu();
}


function mediaNotas() {
    if (alunos.length === 0) {
        console.log("Nenhum aluno cadastrado.");
        menu();
        return;
    }

    let soma = 0;

    for (let aluno of alunos) {
        soma += aluno.nota;
    }

    let media = soma / alunos.length;

    console.log("Média das notas:", media.toFixed(2));

    menu();
}


menu();