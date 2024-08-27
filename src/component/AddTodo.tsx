import React, { useState } from "react";
import { Group, TodoType } from "../types";
import { useTodo } from "./TodoProvider";

export const AddTodo: React.FC<{ nameParam: string | undefined }> = ({
  nameParam,
}) => {
  const [newTaskDescription, setNewTaskDescription] = useState("");
  const { groups, setGroups } = useTodo();

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

  return (
    <div>
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
