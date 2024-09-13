import React, { useDebugValue } from "react";
import { useTodo } from "./TodoProvider";
import TodoItem from "./TodoItem";
import { useParams } from "react-router-dom";
import { AddTodo } from "./AddTodo";

export const TodoListSearch: React.FC = () => {
  const { searchTerm } = useParams<{
    searchTerm: string | undefined;
  }>();
  const { groups } = useTodo();

  const todoLists = groups
    .flatMap((group) => group.groupList)
    .flatMap((groupList) => groupList.lists)
    .filter((todo) =>
      todo.description.toLowerCase().includes(searchTerm?.toLowerCase() as any)
    );

  return (
    <>
      <div>
        {todoLists.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </div>
    </>
  );
};
