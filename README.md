# RD Station Project

Projeto desenvolvido para processo seletivo na [RD Station](https://www.rdstation.com/).

<img height="120px" width="140px" align="right" src="https://leadsbridge.com/wp-content/themes/leadsbridge/img/integration-lg-logos/logo1143.png" />

## :bookmark_tabs: Sobre o projeto:

Nesse projeto, foi elaborada uma API Restfull, seguindo o padrão Rest de arquitetura para construção de APIs. Essa API consome o serviço de outra API (SpaceX), e através disso, apresentar as seguintes informações:

- Próximo lançamento;
- Último lançamento;
- Próximos lançamentos;
- Lançamentos passados;

:globe_with_meridians: Demonstração [Aqui](https://project-rd-api.herokuapp.com/launches)

## :scroll: Regras do negócio:

Criação de uma API Restfull com base na API da SpaceX.

Requerimentos técnicos:
- :white_check_mark: Elaborar uma API com base na API do SpaceX
- :white_check_mark: Crie scripts de execução npm

Extra:
- :white_check_mark: Fazer deploy da API no Heroku

## :open_book: Informações

#### :rocket: Execução

`npm start`
> Rodar aplicação através arquivo index.js.

`npm run build`
> Compila o código em desenvolvimento para ser servido na pasta public

#### 📓 Soluções adotadas e informações

Utilizei **NodeJs** para o desenvolvimento da aplicação web.

Junto com o NodeJs, utilizei o framework **Express** para a criação das rotas no backend. Foram criadas as seguintes rotas:

- Lista todos os lançamentos: https://project-rd-api.herokuapp.com/launches
- Lista todos os próximos lançamentos: https://project-rd-api.herokuapp.com/launches/upcoming
- Lista todos os lançamentos anteriores: https://project-rd-api.herokuapp.com/launches/past
- Lista o lançamento anterior: https://project-rd-api.herokuapp.com/launches/lastest
- Lista o próximo lançamento: https://project-rd-api.herokuapp.com/launches/next

**Os lançamentos tem como base a data atual**

Foi utilizado o **Padrão de projeto Repository**, que consiste em ser um serviço de domínio, que abstrai a camada de persistência da sua aplicação e atua como API para os serviços de aplicação (controllers, etc). Ou seja, deve ser a única API de acesso confiável aos objetos de domínio.

Foi utilizado o **Postman** e o Thunder Client para verificar se as rotas estavam em pleno funcionamento para gerar o JSON vindo do endpoint. E utilizei o **Axios** para o consumo da API da SpaceX.

#### :gear: Tecnologias utilizadas

1. [Express](https://expressjs.com/pt-br/): Utilizado para criação das rotas da API.
2. [NodeJs](https://nodejs.org/en/): Para criação da camada do backend.
3. [Heroku](https://heroku.com/): Para deploy da API.
4. [API SpaceX](https://github.com/r-spacex/SpaceX-API): Para elaboração da minha API.


