import React, { useEffect, useState } from "react";
import { List, ListType, RepeatType, TodoType } from "../types";
import { useTodo } from "./TodoProvider";
import { listTypes as availableListTypes } from "../data";

const TodoItem: React.FC<TodoType> = (todo) => {
  const { groups, setGroups } = useTodo();
  const [newTaskDescription, setNewTaskDescription] = useState(
    todo.description
  );
  const [newDueDate, setNewDueDate] = useState<Date | undefined>(todo.dueDate);
  const [newRemindme, setRemindme] = useState<Date | undefined>(todo.remindme);
  const [selectedRepeatType, setSelectedRepeatType] = useState<
    RepeatType | undefined
  >(todo.repeat);
  const [listType, setListType] = useState<ListType[]>(todo.listType);
  const repeatTypes = [
    "Daily",
    "WeekDays",
    "Weekly",
    "Monthly",
    "Yearly",
    "Customized",
  ];
  const listTypes = availableListTypes; // Assuming this is the correct listTypes source

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
                  listType: listType, // Ensure listType is updated here
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
    listType,
    setGroups,
    todo.id,
  ]);

  const handleCheckboxChange = (listTypeValue: ListType) => {
    setListType((prevListType) => {
      const isChecked = prevListType.includes(listTypeValue);
      return isChecked
        ? prevListType.filter((item) => item !== listTypeValue)
        : [...prevListType, listTypeValue];
    });
  };

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
            todo.id === item.id ? { ...item, completed: !item.completed } : item
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
          value={newTaskDescription}
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
          value={formatDate(newDueDate)}
          onChange={(e) =>
            setNewDueDate(e.target.value ? new Date(e.target.value) : undefined)
          }
        />
      </label>
      <label>
        Remind me
        <input
          type="date"
          value={formatDate(newRemindme)}
          onChange={(e) =>
            setRemindme(e.target.value ? new Date(e.target.value) : undefined)
          }
        />
      </label>
      <label>
        Repeat:
        <select value={selectedRepeatType} onChange={handleSelectedRepeatType}>
          <option value={undefined}>Default</option>
          {repeatTypes.map((repeatType) => (
            <option key={repeatType} value={repeatType}>
              {repeatType}
            </option>
          ))}
        </select>
      </label>
      <label>
        List Type:
        <div>
          {listTypes.map((listTypeValue) => (
            <div key={listTypeValue}>
              <input
                type="checkbox"
                id={listTypeValue}
                checked={listType.includes(listTypeValue as ListType)}
                onChange={() => handleCheckboxChange(listTypeValue as ListType)}
              />
              <label htmlFor={listTypeValue}>{listTypeValue}</label>
            </div>
          ))}
        </div>
      </label>
      <br />
    </div>
  );
};

export default TodoItem;
