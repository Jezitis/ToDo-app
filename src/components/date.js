function getDate() {
    let date = new Date().toLocaleDateString().slice(0,-5);
    let dateOutput = document.querySelector('.js-current-date');
    
    dateOutput.textContent = date;
};

export {getDate};