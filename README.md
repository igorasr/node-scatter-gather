# [Desafio] - Integração com Múltiplas APIs (scatter/gather)

Esse projeto tem como finalidade a solução do desafio proposto por @zanfranceschi: [🔗Desafio](https://dev.to/zanfranceschi/desafio-integracao-com-apis-4jco).

## Disclaimer

Em resumo, o desafio propõe a construção de uma aplicação que consome 3 APIS de cotações diferentes e retorne os dados e a melhor cotação dentre elas a quem fez a requisição.

O maior desafio na integração com o serviço C é, a partir de um processo síncrono da nossa parte, tratar o retorno assíncrono do serviço C.

## Solução

Para as APIS com processo síncrono foi simples, agrupei todas as requisição e aguardei o retorno de ambas, para o Serviço C (Processo Assíncrono), eu criei um endpoint que seria meu webhook, assim que o serviço C terminar o processamento ele enviará os dados pelo webhook que eu criei, minha aplicação dispara um evento informando o recebimento do webhook, dessa forma a requisição do usuário principal receberia esse evento com os dados e terminaria o processamento retornando os dados das 3 integrações.

## Rodando o projeto
Para rodar o projeto as APIS do desavio devem estar no ar, siga as instruções em [Instruções](./challenge/README.md);

Minha solução: 
~~~
npm run start
http:localhost:3000/api/v1/quotes/?moeda=USD
~~~