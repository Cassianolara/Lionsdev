const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let lembretes = [];

function menu() {
  console.log("\n=== MENU ===");
  console.log("1 - Adicionar");
  console.log("2 - Listar");
  console.log("3 - Editar");
  console.log("4 - Marcar como Concluído");
  console.log("0 - Sair");

  rl.question("Escolha uma opção: ", (opcao) => {
    switch (opcao) {
      case "1":
        adicionar();
        break;
      case "2":
        listar();
        break;
      case "3":
        editar();
        break;
      case "4":
        marcarConcluido();
        break;
      case "0":
        rl.close();
        break;
      default:
        console.log("Opção inválida!");
        menu();
    }
  });
}


function adicionar() {
  rl.question("Digite o lembrete: ", (texto) => {
    rl.question("Digite o prazo: ", (prazo) => {
      let obj = {
        lembrete: texto,
        prazo: prazo,
        concluido: false
      };

      lembretes.push(obj);
      console.log("Lembrete adicionado!");
      menu();
    });
  });
}


function listar() {
  if (lembretes.length === 0) {
    console.log("Nenhum lembrete cadastrado.");
  } else {
    console.log("\n=== LEMBRETES ===");
    lembretes.forEach((item, index) => {
      console.log(
        `${index} - ${item.lembrete} | Prazo: ${item.prazo} | Concluído: ${item.concluido}`
      );
    });
  }
  menu();
}

function editar() {
  if (lembretes.length === 0) {
    console.log("Nenhum lembrete para editar.");
    return menu();
  }

  listarLembretes();

  rl.question("Digite o índice do lembrete: ", (i) => {
    let indice = parseInt(i);

    if (lembretes[indice]) {
      rl.question("Novo lembrete: ", (novoTexto) => {
        rl.question("Novo prazo: ", (novoPrazo) => {
          lembretes[indice].lembrete = novoTexto;
          lembretes[indice].prazo = novoPrazo;

          console.log("Lembrete atualizado!");
          menu();
        });
      });
    } else {
      console.log("Índice inválido.");
      menu();
    }
  });
}


function marcarConcluido() {
  if (lembretes.length === 0) {
    console.log("Nenhum lembrete disponível.");
    return menu();
  }

  listarLembretes();

  rl.question("Digite o índice do lembrete: ", (i) => {
    let index = parseInt(i);

    if (lembretes[index]) {
      lembretes[index].concluido = true;
      console.log("Lembrete marcado como concluído!");
    } else {
      console.log("Índice inválido.");
    }

    menu();
  });
}


function listarLembretes() {
  console.log("\nEscolha um lembrete:");
  lembretes.forEach((item, index) => {
    console.log(`${index} - ${item.lembrete}`);
  });
}


menu();