document.querySelector('#left-todo').addEventListener('click', function() {
  clearTodos()
  printTodos(justNotComplete(currentTodos))
})
