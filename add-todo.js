// A function that adds an item to our todo list.
const addTodo = function(text) {
  let todo = {
    text: text,
    id: todos.length + 1,
    complete: false,
    priority: 1
  }
  todos.push(todo);
}

const input = document.querySelector('.todo-input');

document.querySelector('.add-todo').addEventListener('click', function(){
  addTodo(input.value);
  input.value = ''
})