function loadTodos() {
    const list = document.querySelector('.todo-list');
    const data = localStorage.getItem('list');
    if (data) {
        list.innerHTML = data;
    }
};

export {loadTodos};