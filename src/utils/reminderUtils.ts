import { Group, TodoType } from "../types";

export const getDueDateReminders = (groups: Group[]) => {
  const now = new Date();
  const reminders = {
    dueSoon: [] as TodoType[],
    overdue: [] as TodoType[],
  };

  groups.forEach((group) => {
    group.groupList.forEach((list) => {
      list.lists.forEach((todo) => {
        if (todo.dueDate) {
          const dueDate = new Date(todo.dueDate);
          const timeDiff = dueDate.getTime() - now.getTime();
          const daysDiff = timeDiff / (1000 * 3600 * 24);

          if (daysDiff <= 0) {
            reminders.overdue.push(todo);
          } else if (daysDiff <= 1) {
            reminders.dueSoon.push(todo);
          }
        }
      });
    });
  });

  return reminders;
};
