import React from "react";

function TodoItem(props) {
  const completedItemStyle = {
    fontStyle: "italic",
    color: "#cdcdcd",
    textDecoration: "line-through"
  };
  return (
    <div className="todo-item">
      <input
        type="checkbox"
       checked={props.item.completed}
        onChange={() => props.handleChange(props.item.id)}
      />
      <p style={props.item.completed ? completedItemStyle : null}>
        {props.item.text}
      </p>
      <button
        style={{ margin: 20 }}
        onClick={() => props.deleteTodo(props.item.id)}
      >
        Delete
      </button>
    </div>
  );
}

export default TodoItem;