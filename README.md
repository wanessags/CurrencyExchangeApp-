# Currency Exchange App

Aplicação web desenvolvida em React para conversão e análise de moedas utilizando dados reais de câmbio.

O projeto permite realizar conversões entre diferentes moedas, visualizar o histórico de cotações em gráfico e tabela, pesquisar e ordenar os dados históricos e exportá-los em formato CSV.

## Funcionalidades

- Conversão de moedas em tempo real
- Seleção da moeda de origem e destino
- Exibição da taxa de câmbio
- Listagem dinâmica de moedas
- Histórico de cotações
- Gráfico de variação cambial
- Seleção de períodos de 7, 30 e 90 dias
- Pesquisa nos dados históricos
- Ordenação por data
- Ordenação por cotação
- Exportação dos dados para CSV
- Estados de carregamento
- Tratamento de erros
- Interface responsiva para desktop e dispositivos móveis

## Tecnologias utilizadas

- React
- JavaScript
- JSX
- Vite
- HTML
- CSS
- Fetch API
- Recharts
- Git
- GitHub
- Postman

## API

O projeto utiliza a Frankfurter API para obter informações sobre moedas e taxas de câmbio.

Base utilizada:

`https://api.frankfurter.dev/v2`

Principais endpoints utilizados:

```text
GET /currencies
GET /rate/{from}/{to}
GET /rates
```
