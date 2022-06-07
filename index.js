import navBarFunction from './modules/navigation.js';
import setLocalTime from './modules/localTime.js';
import Book from './modules/books.js';
import removeBook from './modules/removeBooks.js';
import addBookToList from './modules/addBookToList.js';
import addBookToLocalStorage from './modules/addBookToLocalStorage.js';
import displayBooks from './modules/displayBooks.js';
import { bookContainer, form } from './modules/globalVariables.js';

// NavBar Functionality
navBarFunction();
// Event for Displaying Books in UI
document.addEventListener('DOMContentLoaded', displayBooks);

// Add event to Book list buttons
bookContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('remove')) {
    const currentBook = e.target.closest('.book');
    currentBook.remove();
    const id = currentBook.querySelector('span').textContent;
    removeBook(Number(id));
  }
});

// Event for submiting a new book to the list
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const titleInput = document.querySelector('.title');
  const authorInput = document.querySelector('.author');

  // Validate inputs
  if (titleInput.value.length > 0 && authorInput.value.length > 0) {
    const newBook = new Book(titleInput.value, authorInput.value);
    addBookToList(newBook);
    addBookToLocalStorage(newBook);
    titleInput.value = '';
    authorInput.value = '';
    titleInput.focus();
  }
});

// Local Time
setLocalTime();
