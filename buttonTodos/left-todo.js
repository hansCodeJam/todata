document.querySelector('.left-todo').addEventListener('click', () => {
  let leftTodos = [];
  todos.forEach(todo => todo.complete === true ? leftTodos.push(todo) : '');
  printTodos(leftTodos)
})
