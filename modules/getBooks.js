// Retrive books from Local storage
const getBooks = () => {
  let bookCollection;
  if (localStorage.getItem('bookApp') === null) {
    bookCollection = [];
  } else {
    bookCollection = JSON.parse(localStorage.getItem('bookApp'));
  }
  return bookCollection;
};

export default getBooks;