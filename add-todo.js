// A function that adds an item to our todo list.
const addTodo = (str) => {
  const priorityOption = document.querySelector('.priority');

  let todo = {
    text: str,
    id: todos.length,
    complete: false,
    priority: Number(priorityOption.value),
  }
  todos.push(todo);

  return todo;
}

const userInput = document.querySelector('.todo-input');

document.querySelector('.add-todo').addEventListener('click', function(){
  printTodo(addTodo(userInput.value));
  userInput.value = '';
})