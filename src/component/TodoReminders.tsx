import React, { useEffect, useState } from "react";
import { useTodo } from "./TodoProvider";
import { getDueDateReminders } from "../utils/reminderUtils";
import { TodoType } from "../types";

const TodoReminders: React.FC = () => {
  const { groups } = useTodo();
  const [reminders, setReminders] = useState({
    dueSoon: [] as TodoType[],
    overdue: [] as TodoType[],
  });

  useEffect(() => {
    const { dueSoon, overdue } = getDueDateReminders(groups);
    setReminders({ dueSoon, overdue });
  }, [groups]);

  return (
    <div>
      {reminders.overdue.length > 0 && (
        <div className="alert alert-danger">
          <h4>Overdue Tasks:</h4>
          <ul>
            {reminders.overdue.map((todo) => (
              <li key={todo.id}>
                {todo.description} (Due: {todo.dueDate?.toDateString()})
              </li>
            ))}
          </ul>
        </div>
      )}

      {reminders.dueSoon.length > 0 && (
        <div className="alert alert-warning">
          <h4>Due Soon:</h4>
          <ul>
            {reminders.dueSoon.map((todo) => (
              <li key={todo.id}>
                {todo.description} (Due: {todo.dueDate?.toDateString()})
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TodoReminders;
