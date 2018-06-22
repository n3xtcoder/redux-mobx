import React, { Component } from "react";
import { observer } from "mobx-react";

import TodoList from "../both/TodoList";

class MobxTodoList extends Component {
  render() {
    const { store } = this.props;
    return (
      <TodoList
        items={store.items}
        addItem={store.addItem.bind(store)}
        toggleItem={store.toggleItem.bind(store)}
      />
    );
  }
}

export default observer(MobxTodoList);
