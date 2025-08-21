import React from "react";
import Todo from "./Todo";

export default function TodoList({ todos, toggleTodo }) {
  return (
    <div>
      {todos.map((todo, index) => {
        return <Todo key={index} todo={todo} toggleTodo={toggleTodo} />;
      })}
    </div>
  );
}
