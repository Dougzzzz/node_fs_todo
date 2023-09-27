import  fs  from "fs";
import readline from 'readline';

const endereçoDoArquivo = "./tasks.txt";

function listaDeTarefas () {
    arquivoExiste()
    lerTarefas()
    
}

async function arquivoExiste () {
    try {
      await  fs.promises.stat(endereçoDoArquivo);
      console.log("O arquivo existe, você pode listar suas tarefas")
    } catch (error) {
        if (error.code === 'ENOENT'){
            criarArquivoTxt()
            console.log("Arquivo criado")
        } else{
            console.error("Ocorreu um erro ao verificar o arquivo")
        }
    }
    
}

async function criarArquivoTxt() {
    try {
        await fs.promises.appendFile(endereçoDoArquivo, "Lista de Tarefas\n","utf8");
        console.log("Arquivo de lista de tarefas criado");
    } catch (erro) {
        console.error("Não foi possível criar arquivo", erro);
    }

}

async function lerTarefas() {
    try {
       const tarefasListadas = await fs.promises.readFile(endereçoDoArquivo, "utf8");
        console.log(tarefasListadas);
    } catch (erro) {
        console.error("Não foi possível ler o arquivo", erro);
    };
        
};

async function escreverTarefas(tarefa) {
    try {
        const tarefaFormatada = tarefa + "\n";
        await fs.promises.appendFile(endereçoDoArquivo, tarefaFormatada);
        console.log(`A tarefa "${tarefa}" foi adicionada à lista`);
    } catch (erro) {
        console.error("Não foi possível adicionar a tarefa à lista", erro);
    };
};

async function menuDeInteracao (){
    const opcoes = ["digite 1 para listar tarefas", "digite 2 para adicionar uma tarefa", "digite 3 para sair"];
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: true,
      });
    try {
        const opcao = await rl.keyInSelect(opcoes, "Selecione uma opção");
        if(opcao === 1 ) {
            lerTarefas()
        }
        
    } catch (error) {
        console.error("Ocorreu um erro", error);
    }
    
}
//listaDeTarefas ();
menuDeInteracao();
