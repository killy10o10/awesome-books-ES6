import {
  showSection, contactSection, bookSection, add, contact, list,
} from './globalVariables.js';

const navBarFunction = () => {
  list.addEventListener('click', () => {
    bookSection.classList.add('active');
    contactSection.classList.add('active');
    showSection.classList.remove('active');
    list.classList.add('blue');
    add.classList.remove('blue');
    contact.classList.remove('blue');
  });

  add.addEventListener('click', () => {
    contactSection.classList.add('active');
    showSection.classList.add('active');
    bookSection.classList.remove('active');
    add.classList.add('blue');
    contact.classList.remove('blue');
    list.classList.remove('blue');
  });

  contact.addEventListener('click', () => {
    bookSection.classList.add('active');
    showSection.classList.add('active');
    contactSection.classList.remove('active');
    contact.classList.add('blue');
    list.classList.remove('blue');
    add.classList.remove('blue');
  });
};

export default navBarFunction;