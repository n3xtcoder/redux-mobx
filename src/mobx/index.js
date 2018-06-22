import React, { Component } from "react";
import { onSnapshot } from "mobx-state-tree";

import TodoListStore from "./store";
import TodoList from "./TodoList";

const store = TodoListStore.create({ items: [] });

onSnapshot(store, snapshot => {
  console.log(snapshot);
});

class Index extends Component {
  render() {
    return <TodoList store={store} />;
  }
}

export default Index;
