import React, { useState } from "react";
import { Group, RepeatType, TodoType } from "../types";
import { useTodo } from "./TodoProvider";

export const AddTodo: React.FC<{ nameParam: string | undefined }> = ({
  nameParam,
}) => {
  const [newTaskDescription, setNewTaskDescription] = useState("");
  const [newDueDate, setNewDueDate] = useState<Date | undefined>(undefined);
  const [newRemindme, seRemindme] = useState<Date | undefined>(undefined);
  const [selectedRepeatType, setSelectedRepeatType] = useState<
    RepeatType | undefined
  >(undefined);
  const { groups, setGroups } = useTodo();
  const repeatTypes = [
    "Daily",
    "WeekDays",
    "Weekly",
    "Monthly",
    "Yearly",
    "Customized",
  ];

  const handleSelectedRepeatType = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedRepeatType(e.target.value as RepeatType);
  };

  const formatDate = (date: Date | undefined): string => {
    if (!date) return "";
    return date.toISOString().split("T")[0];
  };

  const handleAddTask = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (newTaskDescription.trim()) {
      // Create a new task
      const newTask: TodoType = {
        id: Date.now(), // Use current timestamp as a unique ID
        description: newTaskDescription,
        completed: false,
        dueDate: newDueDate, // Set default due date (can be changed as needed)
        remindme: newRemindme, // Set default remind date (can be changed as needed)
        repeat: selectedRepeatType, // Default repeat type
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
      />
      <label>
        Due Date{" "}
        <input
          type="date"
          value={formatDate(newDueDate)}
          onChange={(e) =>
            setNewDueDate(e.target.value ? new Date(e.target.value) : undefined)
          }
        />
      </label>

      <label>
        Remid me{" "}
        <input
          type="date"
          value={formatDate(newRemindme)}
          onChange={(e) =>
            seRemindme(e.target.value ? new Date(e.target.value) : undefined)
          }
        />
      </label>

      <select value={selectedRepeatType} onChange={handleSelectedRepeatType}>
        <option value={undefined}>Default</option>
        {repeatTypes.map((repeatType) => (
          <option>{repeatType}</option>
        ))}
      </select>
      <button onClick={(e) => handleAddTask(e)}>Add task</button>
    </div>
  );
};
