import React, { useEffect } from "react";
import { useTodo } from "./TodoProvider";
import { getDueDateReminders } from "../utils/reminderUtils";
import { playSound } from "../utils/playSound";

const soundUrl = "/sounds/sound.mp3";

const NotificationManager: React.FC = () => {
  const { groups } = useTodo();
  useEffect(() => {
    const { dueSoon, overdue } = getDueDateReminders(groups);

    const playReminders = () => {
      overdue.forEach((todo) => {
        if (todo.remindme) {
          playSound(soundUrl);
        }
      });

      dueSoon.forEach((todo) => {
        if (todo.remindme) {
          playSound(soundUrl);
        }
      });
    };

    playReminders();
  }, [useTodo().groups]);

  return null;
};

export default NotificationManager;
