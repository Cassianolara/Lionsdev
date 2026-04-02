const readline = require('readline-sync');

let alunos = [];

// Função para cadastrar aluno
function cadastrarAluno() {
    let nome = readline.question("Nome: ");
    let idade = parseInt(readline.question("Idade: "));
    let curso = readline.question("Curso: ");
    let nota = parseFloat(readline.question("Nota: "));

    let aluno = {
        nome,
        idade,
        curso,
        nota
    };

    alunos.push(aluno);
    console.log("Aluno cadastrado com sucesso!\n");
}

// Função para pesquisar por nome
function pesquisarPorNome() {
    let nomeBusca = readline.question("Digite o nome: ").toLowerCase();

    let encontrados = alunos.filter(a => a.nome.toLowerCase().includes(nomeBusca));

    if (encontrados.length > 0) {
        console.log("\nAlunos encontrados:");
        console.log(encontrados);
    } else {
        console.log("Nenhum aluno encontrado.");
    }
}

// Listar todos
function listarTodos() {
    if (alunos.length === 0) {
        console.log("Nenhum aluno cadastrado.");
    } else {
        console.log("\nLista de alunos:");
        console.log(alunos);
    }
}

// Excluir aluno
function excluirAluno() {
    let nome = readline.question("Digite o nome do aluno para excluir: ");

    let index = alunos.findIndex(a => a.nome.toLowerCase() === nome.toLowerCase());

    if (index !== -1) {
        alunos.splice(index, 1);
        console.log("Aluno removido!");
    } else {
        console.log("Aluno não encontrado.");
    }
}

// Maior nota
function maiorNota() {
    if (alunos.length === 0) {
        console.log("Nenhum aluno cadastrado.");
        return;
    }

    let maior = alunos.reduce((max, a) => a.nota > max.nota ? a : max);
    console.log("Aluno com maior nota:");
    console.log(maior);
}

// Média das notas
function mediaNotas() {
    if (alunos.length === 0) {
        console.log("Nenhum aluno cadastrado.");
        return;
    }

    let soma = alunos.reduce((acc, a) => acc + a.nota, 0);
    let media = soma / alunos.length;

    console.log("Média das notas:", media.toFixed(2));
}

// Menu
function menu() {
    let opcao;

    do {
        console.log("\n===== MENU =====");
        console.log("1. Cadastrar Aluno");
        console.log("2. Pesquisar Por Nome");
        console.log("3. Listar Todos");
        console.log("4. Excluir um Aluno");
        console.log("5. Maior Nota");
        console.log("6. Média das notas");
        console.log("0. Sair");

        opcao = readline.question("Escolha uma opcao: ");

        switch (opcao) {
            case '1':
                cadastrarAluno();
                break;
            case '2':
                pesquisarPorNome();
                break;
            case '3':
                listarTodos();
                break;
            case '4':
                excluirAluno();
                break;
            case '5':
                maiorNota();
                break;
            case '6':
                mediaNotas();
                break;
            case '0':
                console.log("Saindo...");
                break;
            default:
                console.log("Opção inválida!");
        }

    } while (opcao !== '0');
}

menu();