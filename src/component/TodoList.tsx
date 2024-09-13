import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useTodo } from "./TodoProvider";
import { Group, TodoType } from "../types";
import TodoItem from "./TodoItem";
import { AddTodo } from "./AddTodo";

const TodoList: React.FC = () => {
  const { nameParam } = useParams<{ nameParam: string }>();
  const { groups, setGroups } = useTodo();

  const groupList = groups
    .flatMap((group) => group.groupList)
    .find((list) => list.name === nameParam);

  if (!groupList) {
    return <p>List not found</p>;
  }

  const handleDeleteTodoItem = (id: number) => {
    setGroups((prevGroups) =>
      prevGroups.map((group) => ({
        ...group,
        groupList: group.groupList.map((list) =>
          list.name === nameParam
            ? { ...list, lists: list.lists.filter((todo) => todo.id !== id) }
            : list
        ),
      }))
    );
  };

  return (
    <div>
      <h1>Name of List: {groupList.name}</h1>
      <div>
        {groupList.lists.map((todo) => (
          <div key={todo.id}>
            <TodoItem {...todo} />
            <button onClick={() => handleDeleteTodoItem(todo.id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
      <AddTodo nameParam={nameParam} />
    </div>
  );
};

export default TodoList;
