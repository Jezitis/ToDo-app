const addButton = document.querySelector('.add-form__button');
const list = document.querySelector('.todo-list');
const filter = document.querySelector('.filter');

import './style.css';
import {getDate} from './components/date';
import {addToDo} from './components/addTodo';
import {removeToDo} from './components/removeTodo';
import {toggleDone} from './components/toggleDone';
import {filterBy} from './components/filterBy';
import {loadTodos} from './components/loadTodos';



getDate();
loadTodos();

addButton.addEventListener('click', addToDo);
list.addEventListener('click', removeToDo);
list.addEventListener('click', toggleDone);
filter.addEventListener('click', filterBy);