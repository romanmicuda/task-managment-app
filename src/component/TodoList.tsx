import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useTodo } from "./TodoProvider";
import { Group, TodoType } from "../types";

const TodoList: React.FC = () => {
  const { nameParam } = useParams<{ nameParam: string }>();
  const { groups, setGroups } = useTodo();
  const [newTaskDescription, setNewTaskDescription] = useState("");

  const groupList = groups
    .flatMap((group) => group.groupList)
    .find((list) => list.name === nameParam);

  const handleAddTask = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && newTaskDescription.trim()) {
      // Create a new task
      const newTask: TodoType = {
        id: Date.now(), // Use current timestamp as a unique ID
        description: newTaskDescription,
        completed: false,
        dueDate: new Date(), // Set default due date (can be changed as needed)
        remindme: new Date(), // Set default remind date (can be changed as needed)
        repeat: "Daily", // Default repeat type
        listType: [], // Default empty listType array
      };

      // Update groups state with the new task
      setGroups((prevGroups: Group[]) =>
        prevGroups.map((group) => {
          // If group contains the target list, update it
          if (group.groupList.some((list) => list.name === nameParam)) {
            return {
              ...group,
              groupList: group.groupList.map((list) => {
                if (list.name === nameParam) {
                  return {
                    ...list,
                    lists: [...list.lists, newTask], // Add new task to the list
                  };
                }
                return list;
              }),
            };
          }
          return group;
        })
      );

      // Clear the input field after adding the task
      setNewTaskDescription("");
    }
  };
  if (!groupList) {
    return <p>List not found</p>;
  }

  return (
    <div>
      <h1>Name of List: {groupList.name}</h1>
      <div>
        {groupList.lists.map((list) => (
          <div>
            <p>Description: {list.description}</p>
            <p>State: {list.completed ? "Completed" : "Uncompleted"}</p>
            <p>Due date: {list.dueDate.toISOString().split("T")[0]}</p>
            <p>Remid me: {list.remindme.toISOString().split("T")[0]}</p>
            <p>Repeat: {list.repeat}</p>
            <br />
          </div>
        ))}
      </div>
      <input
        type="text"
        placeholder="Add task"
        value={newTaskDescription}
        onChange={(e) => setNewTaskDescription(e.target.value)}
        onKeyDown={handleAddTask}
      />
    </div>
  );
};

export default TodoList;
