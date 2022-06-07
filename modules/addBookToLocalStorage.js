import getBooks from './getBooks.js';
// Function to Add book to Local Storage
const addBookToLocalStorage = (book) => {
  const bookCollection = getBooks();
  bookCollection.push(book);
  localStorage.setItem('bookApp', JSON.stringify(bookCollection));
};

export default addBookToLocalStorage;