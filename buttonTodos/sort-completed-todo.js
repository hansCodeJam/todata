document.querySelector('#sort-completed-todo').addEventListener('click', () => {
    clearTodos();
    printTodos(justComplete(currentTodos));
})