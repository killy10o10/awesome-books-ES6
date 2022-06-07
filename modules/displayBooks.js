import getBooks from './getBooks.js';
import addBookToList from './addBookToList.js';
// Function to show Books in UI
const displayBooks = () => {
  const books = getBooks();
  books.forEach((book) => {
    addBookToList(book);
  });
};

export default displayBooks;