# Fullstack Challenge 20230720

## Descrição

Este projeto é parte do desafio para a posição de Fullstack Developer na 4YouSee. O desafio consiste em criar um programa que filtra uma lista de planos com base em critérios específicos e retorna a lista filtrada.

## Tecnologias Utilizadas
- 🧩 **Tecnologias**

    - [Typescript](https://www.typescriptlang.org/)
    - [NodeJS](https://nodejs.org/en/)
    - [Jest](https://jestjs.io/pt-BR/docs/getting-started)


# Comandos para executar o projeto


1. Clone o repositório do GitHub:

   ```sh
   git clone https://github.com/thaisminas/fullstack-challenge.git
   ```

2. Instale as dependências::

   ```sh
   npm install
   ```


3. Execute o programa:

   ```sh
   npm run start
   ```


4. Para executar os testes unitários:

   ```sh
   npm run test
   ```

<br/><br/>

## Estrutura das Pastas

* A pasta `src` contém os arquivos do código-fonte da aplicação, e ela inclui as seguintes subpastas e arquivo:
  * `interfaces`: Contém as definições dos tipos de dados utilizados no arquivo `data.ts`.
  * `types`: Armazena a definição dos tipos de dados de retorno de métodos.
  * `utils`: Usada para armazenar classes que contêm funcionalidades de validação do código da aplicação.
  * `script.ts`: é o arquivo que contém a função principal do projeto, responsável por chamar outras classes e executar a geração do arquivo `.json` com os dados de retorno conforme as regras do desafio.
* A pasta `files` contém arquivos JSON que são utilizados e gerados pela aplicação. O arquivo `data.ts` contém o JSON a ser validado e os planos a serem filtrados. O arquivo `plans-list-file.json` é gerado pela aplicação de acordo com as regras definidas no desafio.
* A pasta `test` contém testes unitários que validam as regras do código.
* No arquivo `melhorias-arquivo-json.txt` foi adicionado informações de sugestão para melhoria do arquivo `data.ts`.

<br/><br/>

## Observações

*  Este projeto utiliza TypeScript e Node.js como linguagem e ambiente de desenvolvimento.
* Os testes unitários são executados com o Jest para garantir a qualidade do código.

<b></br>




>  This is a challenge by [Coodesh](https://coodesh.com/)

