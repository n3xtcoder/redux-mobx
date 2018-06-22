import { types } from "mobx-state-tree";

const TodoItem = types
  .model("TodoItem", {
    name: types.string,
    finished: false
  })
  .actions(self => ({
    toggle() {
      self.finished = !self.finished;
    }
  }));

const TodoList = types
  .model("TodoList", {
    items: types.array(TodoItem)
  })
  .actions(self => ({
    addItem(name) {
      self.items.push({ name });
    },
    toggleItem(id) {
      self.items[id].toggle();
    }
  }));

export default TodoList;
