import React, { useDebugValue } from "react";
import { useTodo } from "./TodoProvider";
import TodoItem from "./TodoItem";
import { useParams } from "react-router-dom";
import { AddTodo } from "./AddTodo";

export const TodoListFilter: React.FC = () => {
  const { filterListType } = useParams<{
    filterListType: string | undefined;
  }>();
  const { groups } = useTodo();

  const todoLists = groups
    .flatMap((group) => group.groupList)
    .flatMap((groupList) => groupList.lists)
    .filter(
      (todo) => filterListType && todo.listType.includes(filterListType as any)
    );

  useDebugValue(groups, (groups) => `${groups}`);

  return (
    <>
      <div>
        {todoLists.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </div>
      <AddTodo nameParam={filterListType} />
    </>
  );
};
