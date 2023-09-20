import  fs  from "fs";

const endereçoDoArquivo = "./tasks.txt";

function listaDeTarefas () {
    //verificar se o arquivo de tasks existe
    // se existir ler o arquivo e listar as tarefas
    // caso não exista informar que não existe.
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

function criarArquivoTxt() {
    
    fs.appendFile(endereçoDoArquivo,"Lista de Tarefas\n", 'utf8', ()=> {
        try {
            console.log("Arquivo Lista de Tarefas Criado com sucesso");
        } catch (error) {
            console.error("Não foi possivel criar o arquivo", error);
        }
    })
}

arquivoExiste()
