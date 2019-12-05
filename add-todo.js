// A function that adds an item to our todo list.
const addTodo = function(text) {
  let todo = {
    text: text,
    id: todos.length + 1,
    complete: false,
    priority: document.querySelector('.priority').value
  }
  todos.push(todo);
}

const input = document.querySelector('todo-input').value;

document.querySelector('.add-todo').addEventListener('click', () => printTodo(addTodo(input)))


