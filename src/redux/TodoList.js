import { connect } from "react-redux";

import TodoList from "../both/TodoList";
import { addTodoItemAction, toggleTodoItemAction } from "./actions";

function mapStateToProps(state) {
  return { items: state.todoItems };
}

function mapDispatchToProps(dispatch) {
  return {
    addItem(name) {
      dispatch(addTodoItemAction(name));
    },
    toggleItem(id) {
      dispatch(toggleTodoItemAction(id));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
