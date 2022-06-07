import getBooks from './getBooks.js';

// Function to Remove Book from Local Storage
const removeBook = (id) => {
  const bookCollection = getBooks();
  bookCollection.forEach((book, index) => {
    if (book.id === id) {
      bookCollection.splice(index, 1);
    }
    localStorage.setItem('bookApp', JSON.stringify(bookCollection));
  });
};

export default removeBook;