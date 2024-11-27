# ProjetoLabWeb2024-2

## Descrição

Este projeto é uma API REST desenvolvida em Node.js utilizando o framework Hapi.js para gerenciamento de rotas e validação de dados. A API permite a manipulação de produtos no banco de dados, oferecendo operações CRUD (Create, Read, Update, Delete). O projeto foi desenvolvido na disciplina de **Laboratório Web** da **Fatec Franca**.

Apresenta uma estrutura base para o desenvolvimento de APIs com operações simples de gerenciamento de dados e validação utilizando a biblioteca Joi.

## Requisitos

- Node.js (versão recomendada: 14.x ou superior)
- npm (gerenciador de pacotes do Node.js)
- MongoDB (instância local ou MongoDB Atlas)

## Instalação

1. Clone o repositório em sua máquina local:
   
   git clone https://github.com/IgoROweN/ProjetoLabWeb2024-2.git
   
2. Acesse a pasta do projeto:
   
   cd projetolabweb2024-2
   
3. Instale as dependências do projeto:
   
   npm install
   
4. Configure o MongoDB:

Crie um arquivo .env na raiz do projeto e adicione a variável MONGODB_URI com a URL de conexão do seu MongoDB. Exemplo:

MONGODB_URI=mongodb+srv://usuario:senha@cluster.mongodb.net/database?retryWrites=true&w=majority


## Scripts de Inicialização

- **Iniciar em Produção:**
  Para rodar o projeto no modo de produção, execute o comando:
  
  node server
  
  Isso executará o arquivo `index.js` com o comando `node index.js`.

- **Modo de Desenvolvimento:**
  Para rodar o projeto com recarga automática no modo de desenvolvimento, use:
  
  npm run dev
  
  Este comando utiliza o flag `--watch` do Node.js para reiniciar automaticamente o servidor sempre que houver alterações no código.

- **Testes:**
- [ ] Implementar testes automatizados para endpoints principais

## Dependências Principais

- **@hapi/hapi:** Framework web para construir servidores e APIs.
- **mongoose:** ODM (Object Data Modeling) para MongoDB em Node.js.
- **joi:** Biblioteca para validação de dados no Node.js.
- **dotenv:** Carrega variáveis de ambiente a partir do arquivo .env.
- **nodemon:** Ferramenta de desenvolvimento que reinicia automaticamente o servidor.

## Licença

Este projeto está sob a licença ISC.