const addForm = document.querySelector('.add');
const listTodo = document.querySelector('.todos');
const search = document.querySelector('.search input')


const generateTemplate = todo => {

    const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center text-light todo-enter">
            <span>${todo}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>
    `;

    // listTodo.innerHTML += html;
    listTodo.insertAdjacentHTML('afterbegin', html);
    
};

// add todo
addForm.addEventListener('submit', e => {

    e.preventDefault();
    const addTodo = addForm.add.value.trim();
    
    if(addTodo.length){
        generateTemplate(addTodo);
        addForm.reset();
    }
});

// delete todo
listTodo.addEventListener('click', e => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
})

// filter todos
const filterTodos = (term) => {
 
    Array.from(listTodo.children)
    .filter(todo => !todo.textContent.toLowerCase().includes(term))
    .forEach(todo => todo.classList.add('filtered'));

    Array.from(listTodo.children)
    .filter(todo => todo.textContent.toLowerCase().includes(term))
    .forEach(todo => todo.classList.remove('filtered'));
};

// keyup event for search
search.addEventListener('keyup', e => {
    const filter = search.value.trim().toLowerCase();
    filterTodos(filter);
});