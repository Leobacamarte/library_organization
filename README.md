# library_organization

Exercicio de gestao de uma biblioteca

# Requisitos

## 1. Filtre todos os objetos do gênero ficção científica ou fantasia.

<details>
  <summary>
  Implemente a função <code>fantasyOrScienceFiction</code> para buscar apenas os livros do gênero ficção científica ou fantasia.
  </summary> <br />

**O que será testado:**

- A função `fantasyOrScienceFiction`, caso não receba nenhum parâmetro, deve retornar o seguinte array:

```js
[
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: { name: 'George R. R. Martin', birthYear: 1948 },
    releaseYear: 1991
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: { name: 'Frank Herbert', birthYear: 1920 },
    releaseYear: 1965
  }
];
```

</details>

---

## 2. Filtre os livros com mais de 60 anos desde sua publicação e ordene a partir do livro mais velho para o mais novo.

<details>
  <summary>
  Implemente a função <code>oldBooksOrdered</code> que deve retornar um <code>array</code> com os livros publicados há no mínimo 60 anos, a partir de um ano recebido por parâmetro, ordenados do mais velho para o mais novo.
  </summary> <br />

**O que será testado:**

> Use como data limite o ano de 2020, sendo assim, o resultado deve conter todos os livros com mais de 60 anos até 2020.

- A função `oldBooksOrdered`, com o parâmetro `2020`, deve retornar o seguinte array:

```js
[
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: { name: 'H. P. Lovecraft', birthYear: 1890 },
    releaseYear: 1928,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954,
  },
];
```

</details>

---

## 3. Faça uma função que retorne os nomes dos livros, dado o ano de nascimento das pessoas autoras.

<details>
  <summary>
  Implemente a função <code>booksByAuthorBirthYear</code> que deve retornar um <code>array</code> com os nomes dos livros escritos por pessoas autoras que nasceram no ano passado, de acordo com o que foi passado por parâmetro.
  </summary> <br />

**O que será testado:**

- A função `booksByAuthorBirthYear`, ao ser executada com o argumento `1920`, deve retornar o seguinte array:

```js
[ 'Fundação', 'Duna' ];
```

</details>

---

## 4. Crie um array que possua apenas os nomes de todas as pessoas autoras de ficção científica ou fantasia e ordene por ordem alfabética.

<details>
  <summary>
  Implemente a função <code>fantasyOrScienceFictionAuthors</code> que deve retornar um <code>array</code> com o nome das pessoas autoras de ficção científica ou fantasia, ordenadas alfabeticamente.
  </summary> <br />

**O que será testado:**

- A função `fantasyOrScienceFictionAuthors` deve retornar o seguinte array:

```js
[
  'Frank Herbert',
  'George R. R. Martin',
  'Isaac Asimov',
  'J. R. R. Tolkien',
];
```

</details>

---

## 5. Crie um array com o nome de todos os livros com mais de 60 anos de publicação.

<details>
  <summary>
  Implemente a função <code>oldBooks</code> que deve retornar um <code>array</code> com o nome dos livros com mais de 60 anos publicados, a partir de um ano recebido por parâmetro.
  </summary> <br />

**O que será testado:**

- A função `oldBooks`, com o parâmetro `2022`, deve retornar o seguinte array:

```js
[
  'O Senhor dos Anéis',
  'Fundação',
  'O Chamado de Cthulhu',
];
```