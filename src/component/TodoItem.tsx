import React from "react";
import { List, TodoType } from "../types";

const TodoItem: React.FC<TodoType> = (list) => {
  return (
    <div>
      <p>Description: {list.description}</p>
      <p>State: {list.completed ? "Completed" : "Uncompleted"}</p>
      {list.dueDate && (
        <p>Due date: {list.dueDate.toISOString().split("T")[0]}</p>
      )}
      {list.remindme && (
        <p>Remid me: {list.remindme.toISOString().split("T")[0]}</p>
      )}
      {list.repeat && <p>Repeat: {list.repeat}</p>}
      {list.listType.length !== 0 && <p>ListType: {list.listType}</p>}
      <br />
    </div>
  );
};

export default TodoItem;
