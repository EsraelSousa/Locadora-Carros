# Locadora Ibiapaba
**Locadora Ibiapaba** é um sistema de controle de locadora de carros desenvolvido na disciplina de Tópicos Especiais em Desenvolvimento Web como requisito para aprovação na disciplina.

## Equipe
- [Daniel Sobrinho](https://github.com/daniel-sobrinho)
- [Esrael Sousa](https://github.com/EsraelSousa)
- [Francinilson Rodrigues](https://github.com/Nilson-Rodrigues)
- Ricardo Martins

## Instalação
Para instalar a aplicação no seu ambiente de desenvolvimento, você pode utilizar o docker ou o node js instalado em sua máquina.

O passo abaixo deve ser realizado independente do método de instalação.

- Para executar a aplicação utilizando o docker faça uma cópia do arquivo `.env.example` na raiz do projeto e renomeie a cópia para `.env`.

### Utilizando o Docker
- Utilizando o terminal no diretório do projeto execute o comando `npm run docker:up`.

- Aguarde o docker instalar as dependências do projeto, quando o processo for concluído a mensagem `server is running on port 3333` será exibida no terminal do docker e a aplicação estará disponível para uso em [http://localhost:3333](http://localhost:3333).

### Utilizando o NodeJS
- Instale o MySQL e crie um banco de dados, por padrão o projeto está configurado para procurar um banco chamado app, mas caso queira você pode criar com o nome que desejar. Não é necessário criar nenhuma tabela, apenas o banco.
- Após criar o banco atualize o valor da chave `DATABASE_URL` no arquivo `.env` colocando as credenciais de acesso e o nome do banco criado para que a aplicação possa acessá-lo.
- Instale as dependências do projeto utilizando o comando `npm ci`.
- Sincronize o esquema de banco definida no projeto com o banco de dados executando o comando `npx prisma generate`.
- Execute o comando `npx prisma migrate dev` para a aplicação criar os tabelas do banco definidas para aplicação.
- Para iniciar a aplicação execute o comando `npm run dev`, se tudo estiver certo o terminal exibirá a mensagem `server is running on port 3333` e a aplicação estará disponível para uso em [http://localhost:3333](http://localhost:3333).
