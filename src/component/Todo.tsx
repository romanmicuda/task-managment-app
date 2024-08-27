import React from "react";
import { List, TodoType } from "../types";

const Todo: React.FC<TodoType> = (list) => {
  return (
    <div>
      <p>Description: {list.description}</p>
      <p>State: {list.completed ? "Completed" : "Uncompleted"}</p>
      <p>Due date: {list.dueDate.toISOString().split("T")[0]}</p>
      <p>Remid me: {list.remindme.toISOString().split("T")[0]}</p>
      <p>Repeat: {list.repeat}</p>
      <p>ListType: {list.listType}</p>
      <br />
    </div>
  );
};

export default Todo;
