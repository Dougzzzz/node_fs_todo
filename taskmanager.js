import  fs  from "fs";

const endereçoDoArquivo = "./tasks.txt";

function listaDeTarefas () {
    arquivoExiste()
    lerTarefas()
    
}

function arquivoExiste () {
    

    fs.stat(endereçoDoArquivo, (erro, stats) => {
         if (erro) {
             if (erro.code === 'ENOENT') {
                 console.log("O arquivo não existe");
                 criarArquivoTxt()
             } else {
                 console.error("Ocorreu um erro ao verificar o arquivo", erro);
             }
         } else {
              console.log("O arquivo existe. Agora você pode listar as tarefas.");
         }
    });
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

function menuDeInteracao (){

}

//listaDeTarefas ();
criarArquivoTxt()
