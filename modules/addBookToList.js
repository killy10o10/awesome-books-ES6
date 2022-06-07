import { bookContainer } from './globalVariables.js';

// Updating the UI: Function to create a new book list in UI
const addBookToList = (book) => {
  bookContainer.innerHTML += `
                                  
          <li class="book">"${book.title}" by ${book.author} <button type="button" class="remove">Remove</button> <span hidden>${book.id}</span></li>`;
};

export default addBookToList;