## Objetivo

Esse projeto tem como objetivo cobrir os principais pontos da estrutura do NestJS para que a partir disso, comece a criar projetos de backend e explorar exatamente aquilo que existe como o diferencial no NestJS.


## Rodando a aplicação no seu PC

Faça um clone deste repositório e instale no seu ambiente de desenvolvimento usando o seguinte comando no seu terminal (escolha um diretório apropriado):

```shell
git clone https://github.com/thiagosir/prisma-api.git
```

Após clonar o conteúdo do repositório, acesse o diretório e execute os comandos abaixo:

```shell
cd prisma-api

chmod +x .docker/entrypoint.sh

docker-compose up --build
```

Após a execução do comando acima o servidor estará em execução no endereço `http://localhost:3000`.


### Para acessar a documentação da API 

Rode a aplicação de acordo com os comandos descritos acima e acesse a rota `http://localhost:3000/api`