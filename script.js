const { books } = require('../data/library');

// Requisito 1
const fantasyOrScienceFiction = () => books
  .filter((book) => book.genre === 'Fantasia' || book.genre === 'Ficção Científica');

// Requisito 2
const oldBooksOrdered = (year) => books.filter((book) => year - book.releaseYear > 60)
  .sort((a, b) => a.releaseYear - b.releaseYear);

// Requisito 3
const booksByAuthorBirthYear = (birthYear) => books
  .filter((book) => book.author.birthYear === birthYear)
  .map((book) => book.name);

// Requisito 4
const fantasyOrScienceFictionAuthors = () => books
  .filter((book) => book.genre === 'Fantasia' || book.genre === 'Ficção Científica')
  .map((book) => book.author.name).sort();

// Requisito 5
const oldBooks = (year) => books.filter((book) => year - book.releaseYear >= 60)
  .map((book) => book.name);

module.exports = {
  fantasyOrScienceFiction,
  oldBooksOrdered,
  booksByAuthorBirthYear,
  fantasyOrScienceFictionAuthors,
  oldBooks,
  authorWith3DotsOnName,
};
