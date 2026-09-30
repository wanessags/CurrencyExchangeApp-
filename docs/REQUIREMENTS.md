# Currency Exchange App

## 1. Contexto

O projeto Currency Exchange App consiste no desenvolvimento de uma Single Page Application (SPA) em React para conversão e análise de moedas.

A aplicação utilizará a API Frankfurter para obter informações de câmbio e permitirá ao usuário consultar taxas de conversão entre diferentes moedas de forma simples e organizada.

O projeto será desenvolvido de forma incremental, aplicando os conteúdos estudados durante as aulas, como React, JSX, componentização, props, eventos, hooks, consumo de API, gráficos, filtros, ordenação e exportação de dados.

## 2. Público-alvo

O público-alvo da aplicação são pessoas que precisam consultar e comparar valores entre diferentes moedas, como estudantes, viajantes, profissionais e usuários que desejam acompanhar cotações de forma rápida e prática.

A aplicação será desenvolvida com foco em uma interface simples, clara e de fácil utilização.

## 3. Objetivo

Desenvolver uma aplicação web em React que permita ao usuário realizar conversões entre moedas e analisar informações relacionadas às cotações de câmbio.

A aplicação deverá consumir dados da API Frankfurter e apresentar as informações de forma clara, permitindo consultas de taxas atuais e históricas, além de recursos de análise como gráficos, filtros, ordenação e exportação de dados em CSV.

## 4. Escopo

A aplicação deverá permitir que o usuário:

- informe um valor para conversão;
- selecione a moeda de origem;
- selecione a moeda de destino;
- visualize o valor convertido;
- consulte taxas de câmbio;
- consulte informações históricas de moedas;
- visualize dados em gráficos;
- visualize dados em tabelas;
- utilize filtros e ordenação;
- exporte informações em formato CSV.

Não fazem parte do escopo deste projeto:

- cadastro de usuários;
- sistema de login;
- banco de dados próprio;
- backend próprio;
- realização de pagamentos;
- compra ou venda real de moedas.

## 5. Requisitos Funcionais

**RF01** — O sistema deve permitir que o usuário informe um valor para conversão.

**RF02** — O sistema deve permitir que o usuário selecione a moeda de origem.

**RF03** — O sistema deve permitir que o usuário selecione a moeda de destino.

**RF04** — O sistema deve realizar a conversão entre as moedas selecionadas.

**RF05** — O sistema deve exibir o valor convertido ao usuário.

**RF06** — O sistema deve consumir os dados de câmbio por meio da API Frankfurter.

**RF07** — O sistema deve permitir a consulta de dados históricos de câmbio.

**RF08** — O sistema deve apresentar informações históricas em gráficos.

**RF09** — O sistema deve apresentar dados de câmbio em formato de tabela.

**RF10** — O sistema deve permitir filtrar os dados apresentados.

**RF11** — O sistema deve permitir ordenar os dados apresentados.

**RF12** — O sistema deve permitir a exportação dos dados em formato CSV.

## 6. Requisitos Não Funcionais

**RNF01** — A aplicação deve ser desenvolvida utilizando React.

**RNF02** — A aplicação deve funcionar como uma Single Page Application (SPA).

**RNF03** — A interface deve ser responsiva, permitindo o uso em computadores e dispositivos móveis.

**RNF04** — A aplicação deve possuir uma interface simples, organizada e de fácil utilização.

**RNF05** — O sistema deve apresentar mensagens adequadas em situações de carregamento, erro ou ausência de dados.

**RNF06** — A aplicação deve consumir dados externos por meio de requisições HTTP utilizando `fetch` e `async/await`.

**RNF07** — O código deve ser organizado em componentes reutilizáveis.

**RNF08** — O projeto deve possuir documentação e histórico de commits no Git demonstrando a evolução do desenvolvimento.

## 7. Regras de Negócio

**RN01** — O valor informado para conversão deve ser maior que zero.

**RN02** — A moeda de origem e a moeda de destino devem ser selecionadas antes da conversão.

**RN03** — A moeda de origem e a moeda de destino não devem ser iguais.

**RN04** — Os valores de conversão devem utilizar as taxas retornadas pela API Frankfurter.

**RN05** — Caso a API não retorne dados, a aplicação deve informar ao usuário que não foi possível realizar a consulta.

**RN06** — Os dados históricos apresentados devem respeitar o período selecionado pelo usuário.

**RN07** — A exportação em CSV deve utilizar os dados atualmente exibidos na aplicação.

## 8. Critérios de Aceite

**CA01** — O usuário deve conseguir informar um valor válido para conversão.

**CA02** — O usuário deve conseguir selecionar a moeda de origem e a moeda de destino.

**CA03** — Ao realizar a conversão, o sistema deve exibir corretamente o valor convertido com base na taxa retornada pela API.

**CA04** — A aplicação deve informar quando ocorrer erro na consulta à API.

**CA05** — A aplicação deve apresentar dados históricos de câmbio quando essa funcionalidade estiver disponível.

**CA06** — Os dados históricos devem ser exibidos em formato de gráfico e tabela.

**CA07** — O usuário deve conseguir filtrar e ordenar os dados apresentados.

**CA08** — O usuário deve conseguir exportar os dados em formato CSV.

**CA09** — A interface deve funcionar adequadamente em dispositivos desktop e mobile.

**CA10** — O projeto deve possuir documentação, protótipos, Collection do Postman e histórico de commits no GitHub.
