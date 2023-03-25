function loadTodos() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(data => displayTodos(data));
}

function displayTodos(todos) {
    const todoContainer = document.getElementById('todo-container');
    for (const todo of todos) {
        console.log(todo);
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todos');
        todoDiv.innerHTML = `
            <h2>UserId: ${todo.userId} </h2>
            <h3>Title: ${todo.title} </h3>
            <h4>IsCompleted: ${todo.completed === true ? 'Completed' : 'Not completed'} </h4>
        `;
        todoContainer.appendChild(todoDiv);
    }
}

loadTodos();