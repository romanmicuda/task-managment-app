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
    if (newTaskDescription.trim().length !== 0) {
      const newTask: TodoType = {
        id: Date.now(),
        description: newTaskDescription,
        completed: false,
        dueDate: newDueDate,
        remindme: newRemindme,
        repeat: selectedRepeatType,
        listType: [],
      };

      setGroups((prevGroups: Group[]) =>
        prevGroups.map((group) => {
          if (group.groupList.some((list) => list.name === nameParam)) {
            return {
              ...group,
              groupList: group.groupList.map((list) => {
                if (list.name === nameParam) {
                  return {
                    ...list,
                    lists: [...list.lists, newTask],
                  };
                }
                return list;
              }),
            };
          }
          return group;
        })
      );
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
        Due Date
        <input
          type="date"
          value={formatDate(newDueDate)}
          onChange={(e) =>
            setNewDueDate(e.target.value ? new Date(e.target.value) : undefined)
          }
        />
      </label>

      <label>
        Remid me
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
