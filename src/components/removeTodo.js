function removeToDo(e) {
    const list = document.querySelector('.todo-list');
    if (e.target.classList.contains('todo-list-item__button--delete') || e.target.classList.contains('fa-times')) {
        let item = e.target.closest('.todo-list-item');
        item.remove();
        localStorage.setItem('list', list.innerHTML);
    } 
};

export {removeToDo};