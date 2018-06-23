import React, { Component } from "react";
import { observer } from "mobx-react";

import TodoList from "../both/TodoList";

const MobxTodoList = observer(({ store }) => (
  <TodoList
    items={store.items}
    addItem={store.addItem.bind(store)}
    toggleItem={store.toggleItem.bind(store)}
  />
));

export default MobxTodoList;
