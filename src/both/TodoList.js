import React, { Component } from "react";
import { observer } from "mobx-react";

class AddTodoItem extends Component {
  state = {
    value: ""
  };

  render() {
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          this.props.onAdd(this.state.value);
          this.setState({ value: "" });
        }}
      >
        <input
          type="text"
          value={this.state.value}
          onChange={e => {
            this.setState({ value: e.target.value });
          }}
        />
        <button type="submit">Add</button>
      </form>
    );
  }
}

const TodoListItem = observer((props) => {
  const { item, onClick } = props;
  return (
    <li
      style={{ textDecoration: item.finished ? "line-through" : "none" }}
      onClick={onClick}
    >
      {item.name}
    </li>
  );
});

class TodoList extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.items.map((item, i) => (
            <TodoListItem
              item={item}
              onClick={() => this.props.toggleItem(i)}
            />
          ))}
        </ul>
        <AddTodoItem onAdd={this.props.addItem.bind(this)} />
      </div>
    );
  }
}

export default observer(TodoList);
