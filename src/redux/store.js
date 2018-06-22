import { createStore } from "redux";

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TODO_ITEM":
      return {
        todoItems: [
          ...state.todoItems,
          {
            name: action.name,
            finished: false
          }
        ]
      };

    case "TOGGLE_TODO_ITEM": {
      const oldItem = state.todoItems[action.id];
      const newItem = {
        name: oldItem.name,
        finished: !oldItem.finished
      };
      return {
        todoItems: [
          ...state.todoItems.slice(0, action.id),
          newItem,
          ...state.todoItems.slice(action.id + 1)
        ]
      };
    }

    case "DELETE_TODO_ITEM":
      return {
        todoItems: [
          ...state.todoItems.slice(0, action.id),
          ...state.todoItems.slice(action.id + 1)
        ]
      };

    default:
      return state;
  }
}

const store = createStore(reducer, {
  todoItems: []
});

export default store;
