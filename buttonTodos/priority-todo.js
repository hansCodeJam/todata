document.querySelector('#priority-todo').addEventListener('click', () => {
    clearTodos();
    printTodos(priority2Only(currentTodos))
})