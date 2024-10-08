import React from "react";
import { useContext, createContext, useState, ReactNode } from "react";
import { Group, TodoContextType } from "../types";
import mockData from "../data";

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export const TodoProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [groups, setGroups] = useState<Group[]>([
    ...mockData,
    { name: "default", groupList: [{ name: "default", lists: [] }] },
  ]);
  return (
    <TodoContext.Provider value={{ groups, setGroups }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => {
  const context = useContext(TodoContext);
  if (!context) throw new Error("useTodo must be used within a TodoProvider");
  return context;
};
