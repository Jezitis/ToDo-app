function toggleDone(e) {
    const list = document.querySelector('.todo-list');
    if (e.target.classList.contains('todo-list-item__button--done') || e.target.classList.contains('fa-check')) {
        let item = e.target.closest('.todo-list-item');
        
        item.dataset.done == 'true' ? item.dataset.done = 'false' : item.dataset.done = 'true';
        localStorage.setItem('list', list.innerHTML);
    }
};

export {toggleDone};