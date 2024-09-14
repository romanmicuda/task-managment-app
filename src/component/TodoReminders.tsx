import React, { useEffect, useState } from "react";
import { useTodo } from "./TodoProvider";
import { getDueDateReminders } from "../utils/reminderUtils";
import { TodoType } from "../types";

const TodoReminders: React.FC = () => {
  const { groups } = useTodo();
  const [reminders, setReminders] = useState({
    remindSoon: [] as TodoType[],
  });

  useEffect(() => {
    const { remindSoon } = getDueDateReminders(groups);
    setReminders({ remindSoon });
  }, [groups]);

  return (
    <div>
      {reminders.remindSoon.length > 0 && (
        <div className="alert alert-danger">
          <h4>Notification Tasks:</h4>
          <ul>
            {reminders.remindSoon.map((todo) => (
              <div>
                <li key={todo.id}>
                  {todo.description} (Alert: {todo.remindme?.toDateString()}{" "}
                  {todo.remindme?.toLocaleTimeString()})
                </li>
              </div>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TodoReminders;
