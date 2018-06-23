import React, { Component } from "react";
import { onSnapshot, onPatch } from "mobx-state-tree";

import TodoListStore from "./store";
import TodoList from "./TodoList";

const store = TodoListStore.create({ items: [] });

onSnapshot(store, snapshot => {
  console.log(snapshot);
});

onPatch(store, patch => {
  console.log(patch);
});

class Index extends Component {
  render() {
    return <TodoList store={store} />;
  }
}

export default Index;
