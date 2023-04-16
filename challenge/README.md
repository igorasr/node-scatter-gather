# Desafio 01: Cotações
Esse repositório faz parte do desafio disponível [nessa thread do twitter](https://twitter.com/zanfranceschi/status/1548344242010869763) e também [nesse post de dev.to](https://dev.to/zanfranceschi/desafio-integracao-com-apis-4jco).


## APIs de Apoio ao Desafio

O restante desse README é dedicado apenas às instruções sobre as APIs de apoio ao desafio. Ou seja, as APIs que você deveria consumir para completar o desafio.

### Docker
Para executar a [imagem docker](https://hub.docker.com/repository/docker/zanfranceschi/desafio-01-cotacoes) diretamente do dockerhub (sem precisar fazer build):
~~~
docker run --rm -p 8080:80 zanfranceschi/desafio-01-cotacoes
~~~

### Serviços
Os exemplos têm como premissa que você esteja executando o docker na porta 8080.

#### Serviço A

Requisição:
~~~
GET http://localhost:8080/servico-a/cotacao?moeda=USD
~~~

Resposta:
~~~
HTTP 200
{
  "cotacao": 2.674,
  "moeda": "USD",
  "symbol": "💵"
}
~~~


#### Serviço B

Requisição:
~~~
GET http://localhost:8080/servico-b/cotacao?curr=USD
~~~

Resposta:
~~~
HTTP 200
{
  "cotacao": {
    "fator": 1000,
    "currency": "x",
    "valor": "1468"
  }
}
~~~


#### Serviço C

Requisição:
~~~
POST http://localhost:8080/servico-c/cotacao
{
  "tipo": "EUR",
  "callback": "http://172.17.0.1:3000"
}
~~~

Resposta:
~~~
HTTP 202
{
  "mood": "✅",
  "cid": "74e3fb63-5621-46fd-85d1-56e4e9c04a3a",
  "mensagem": "Quando a cotação finalizar, uma requisição para http://172.17.0.1:3000 será feita."
}
~~~

Requisição do Callback
~~~
POST <URL informada em "callback" da requisição>
{
  "cid": "74e3fb63-5621-46fd-85d1-56e4e9c04a3a",
  "f": 1000,
  "t": "EUR",
  "v": 3.675
}
