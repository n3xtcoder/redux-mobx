export function addTodoItemAction(name) {
  return { type: "ADD_TODO_ITEM", name };
}

export function toggleTodoItemAction(id) {
  return { type: "TOGGLE_TODO_ITEM", id };
}

export function deleteTodoItemAction(id) {
  return { type: "DELETE_TODO_ITEM", id };
}
