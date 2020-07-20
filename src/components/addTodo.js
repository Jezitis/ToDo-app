function addToDo(e) {
    e.preventDefault();
    const list = document.querySelector('.todo-list');
    let toDo = document.querySelector('.add-form__input');

    if (toDo.value.length > 0) {
        let toDoItem = `<li class="todo-list__item todo-list-item" data-done="false">
                            <p class="todo-list-item__text">${toDo.value}</p>
                            <div class="todo-list-item__controls">
                                <button class="todo-list-item__button todo-list-item__button--done">
                                    <i class="fas fa-check"></i>
                                </button>
                                <button class="todo-list-item__button todo-list-item__button--delete">
                                    <i class="fas fa-times"></i>
                                </button>
                            </div>
                        </li>`
        ;
        toDo.classList.remove('add-form__input--error');
        list.insertAdjacentHTML("beforeend", toDoItem);
        toDo.value = '';
        toDo.placeholder = 'Add a to-do...';

        localStorage.setItem('list', list.innerHTML);
    }

    else {
        toDo.classList.add('add-form__input--error');
        toDo.placeholder = 'Type something...';
    }    
}

export {addToDo};