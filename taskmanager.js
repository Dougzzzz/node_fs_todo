import  fs  from "fs";
import inquirer from "inquirer";
import RawListPrompt from "inquirer/lib/prompts/rawlist.js";


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

function menuDeInteracao (){
inquirer.prompt([
   {
    type: 'rawlist',
    name: 'theme',
    message: 'Escolha uma das opções:',
    choices: [
        'Listar tarefas',
        'Adicionar tarefas',
        'sair'
    ]
   }

   
])
.then((resposta) => {
    console.log(JSON.stringify(resposta,null,' '))
});
}
//listaDeTarefas ();
menuDeInteracao();
