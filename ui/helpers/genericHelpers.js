const separateTodos = (todoList) => {
  const completed =  todoList.filter(todo => todo.isComplete);
  const incomplete = todoList.filter(todo => !todo.isComplete);

  return {
    completed,
    incomplete
  }
};

module.exports = {
  separateTodos
};
