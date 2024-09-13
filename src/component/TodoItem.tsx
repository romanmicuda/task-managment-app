import React, { useEffect, useState } from "react";
import { List, RepeatType, TodoType } from "../types";
import { useTodo } from "./TodoProvider";
import { setgroups } from "process";

const TodoItem: React.FC<TodoType> = (todo) => {
  const { groups, setGroups } = useTodo();
  const [newTaskDescription, setNewTaskDescription] = useState(
    todo.description
  );
  const [newDueDate, setNewDueDate] = useState<Date | undefined>(todo.dueDate);
  const [newRemindme, seRemindme] = useState<Date | undefined>(todo.remindme);
  const [selectedRepeatType, setSelectedRepeatType] = useState<
    RepeatType | undefined
  >(todo.repeat);
  const repeatTypes = [
    "Daily",
    "WeekDays",
    "Weekly",
    "Monthly",
    "Yearly",
    "Customized",
  ];

  useEffect(() => {
    setGroups((prevGroups) =>
      prevGroups.map((group) => ({
        ...group,
        groupList: group.groupList.map((list) => ({
          ...list,
          lists: list.lists.map((item) =>
            todo.id === item.id
              ? {
                  ...item,
                  description: newTaskDescription,
                  dueDate: newDueDate,
                  remindme: newRemindme,
                  repeat: selectedRepeatType,
                }
              : item
          ),
        })),
      }))
    );
  }, [
    newTaskDescription,
    newDueDate,
    newRemindme,
    selectedRepeatType,
    setGroups,
    todo.id,
  ]);

  const handleSelectedRepeatType = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedRepeatType(e.target.value as RepeatType);
  };

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

  const formatDate = (date: Date | undefined): string => {
    if (!date) return "";
    return date.toISOString().split("T")[0];
  };

  return (
    <div className="flex">
      <p>
        Description:
        <input
          type="text"
          placeholder="Add task"
          value={todo.description}
          onChange={(e) => setNewTaskDescription(e.target.value)}
        />
      </p>
      <p onClick={() => handleToggle()}>
        State: {todo.completed ? "Completed" : "Uncompleted"}
      </p>

      <label>
        Due Date
        <input
          type="date"
          value={formatDate(todo.dueDate)}
          onChange={(e) =>
            setNewDueDate(e.target.value ? new Date(e.target.value) : undefined)
          }
        />
      </label>

      <label>
        Remid me
        <input
          type="date"
          value={formatDate(todo.remindme)}
          onChange={(e) =>
            seRemindme(e.target.value ? new Date(e.target.value) : undefined)
          }
        />
      </label>

      <label>
        Repeat:
        <select value={todo.repeat} onChange={handleSelectedRepeatType}>
          <option value={undefined}>Default</option>
          {repeatTypes.map((repeatType) => (
            <option>{repeatType}</option>
          ))}
        </select>
      </label>

      <br />
    </div>
  );
};

export default TodoItem;
