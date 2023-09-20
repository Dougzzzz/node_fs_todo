### Exercício para entender o módulo FileSystem do node

Exercício: Criando um Gerenciador de Tarefas

Objetivo: Crie um pequeno programa de gerenciamento de tarefas que permita ao usuário adicionar tarefas, listar tarefas e salvar as tarefas em um arquivo.

## Instruções:

1. Crie um arquivo JavaScript chamado "taskManager.js" e importe o módulo "fs".

2. Crie um programa que permita ao usuário:

    * Adicionar tarefas à lista.
    * Listar as tarefas existentes.
    * Salvar a lista de tarefas em um arquivo chamado "tasks.txt".
3. Use funções assíncronas do módulo "fs" para realizar as operações de leitura e escrita de     arquivos.

4. Quando o programa começar, verifique se o arquivo "tasks.txt" já existe. Se existir, leia as tarefas do arquivo e carregue-as em uma lista. Se não existir, crie uma lista vazia.

5. Ofereça um menu para o usuário com as seguintes opções:

    * Digite "1" para adicionar uma nova tarefa.
    * Digite "2" para listar todas as tarefas.
    * Digite "3" para sair do programa.
6. Se o usuário escolher a opção de adicionar uma tarefa, permita que ele digite o texto da tarefa e adicione-o à lista de tarefas.

7. Se o usuário escolher a opção de listar tarefas, mostre todas as tarefas da lista.

8. Quando o usuário escolher a opção de sair do programa, salve a lista de tarefas no arquivo "tasks.txt" antes de encerrar o programa.

9. Certifique-se de lidar com erros e exceções adequadamente, como problemas de leitura/gravação de arquivo.
