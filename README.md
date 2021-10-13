# parking-challenge

## Link do ambiente de homologação:

https://parking-challenge-parafuzo.herokuapp.com/entrance

## Dependencias:

- Node: v14.17.1
- Yarn: 1.22.5

## Como rodar a aplicação:

1.  Clone o repositório em sua máquina:

```
    git clone https://github.com/ericoBandeira/parking-challenge
```

2. Instale as dependencias do yarn lock:

```
    yarn install
```

ou

```
    yarn
```

3. Inicie o projeto:

```
    yarn start
```

## Como rodar os testes:

1.  Clone o repositório em sua máquina:

```
    git clone https://github.com/ericoBandeira/parking-challenge
```

2. Instale as dependencias do yarn lock:

```
    yarn install
```

ou

```
    yarn
```

3. Inicie os testes:

```
    yarn test
```

- Clique "a" para rodar todos os testes;
- Clique "f" para rodar os testes que falharam;
- Clique "a" para sair do modo de visualização;
- Clique "p" para filtrar o nome de um arquivo por padrão regex;
- Clique "q" para filtrar o teste por padrão regex;
- Clique Enter para rodar um teste.

## Dificuldades:

1. Na parte de testes tive dificuldade ao testar componentes do tipo Modal, tentei resolver simulando uma modal com ` jest.mock(()=>{})` mas o mesmo não funcionou.

2. No map que usei para listar o histórico na página de saída, tive dificuldade de achar um parâmetro para usar de key, pois o parâmetro "reservation" da api as vezes se repetia para a mesma placa. Então usei a posição do vetor como key do map.
