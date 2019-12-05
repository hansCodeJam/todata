document.querySelector('#sort-priority-todo').addEventListener('click', () => {
    clearTodos()
    
    printTodos(priority2First(currentTodos));
    
})