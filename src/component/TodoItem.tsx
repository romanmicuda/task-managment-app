import React from "react";
import { List, TodoType } from "../types";
import { useTodo } from "./TodoProvider";

const TodoItem: React.FC<TodoType> = (todo) => {
  const { groups, setGroups } = useTodo();
  const handleToggle = () => {
    setGroups((prevGroup) =>
      prevGroup.map((group) => ({
        ...group,
        groupList: group.groupList.map((list) => ({
          ...list,
          lists: list.lists.map((item) =>
            todo.id === item.id
              ? {
                  ...item,
                  completed: !item.completed,
                }
              : item
          ),
        })),
      }))
    );
  };
  return (
    <div>
      <p>Description: {todo.description}</p>
      <p onClick={() => handleToggle()}>
        State: {todo.completed ? "Completed" : "Uncompleted"}
      </p>
      {todo.dueDate && (
        <p>Due date: {todo.dueDate.toISOString().split("T")[0]}</p>
      )}
      {todo.remindme && (
        <p>Remid me: {todo.remindme.toISOString().split("T")[0]}</p>
      )}
      {todo.repeat && <p>Repeat: {todo.repeat}</p>}
      {todo.listType.length !== 0 && <p>ListType: {todo.listType}</p>}
      <br />
    </div>
  );
};

export default TodoItem;
