function filterBy(e) {
    let btnAll = document.querySelector('.filter__button--all');
    let btnDone = document.querySelector('.filter__button--done');
    let btnUndone = document.querySelector('.filter__button--undone');
    let items = document.body.querySelectorAll('.todo-list-item');

    if (e.target == btnAll) {
        items.forEach(element => element.style.display = 'flex');        
    }

    if (e.target == btnDone) {
        items.forEach(element => element.dataset.done == 'false' ? element.style.display = 'none' : element.style.display = 'flex');
    }

    if (e.target == btnUndone) {
        items.forEach(element => element.dataset.done == 'true' ? element.style.display = 'none' : element.style.display = 'flex');
    }
};

export {filterBy};