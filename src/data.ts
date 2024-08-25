import { Group, TodoContextType } from "./types";

const mockData: TodoContextType = {
  groups: [
    {
      name: "Work",
      lists: [
        {
          name: "To Do",
          lists: [
            {
              id: 1,
              description: "Finish project report",
              completed: false,
              dueDate: new Date("2024-09-01"),
              remindme: new Date("2024-08-30"),
              repeat: "Weekly",
              listType: ["Important"],
            },
            {
              id: 2,
              description: "Prepare presentation slides",
              completed: true,
              dueDate: new Date("2024-08-28"),
              remindme: new Date("2024-08-27"),
              repeat: "Daily",
              listType: ["My day"],
            },
          ],
        },
        {
          name: "In Progress",
          lists: [
            {
              id: 3,
              description: "Develop new feature",
              completed: false,
              dueDate: new Date("2024-09-10"),
              remindme: new Date("2024-09-05"),
              repeat: "Weekly",
              listType: ["Tasks"],
            },
          ],
        },
      ],
    },
    {
      name: "Personal",
      lists: [
        {
          name: "To Do",
          lists: [
            {
              id: 4,
              description: "Buy groceries",
              completed: false,
              dueDate: new Date("2024-08-26"),
              remindme: new Date("2024-08-25"),
              repeat: "Monthly",
              listType: ["Planned"],
            },
            {
              id: 5,
              description: "Call mom",
              completed: false,
              dueDate: new Date("2024-08-29"),
              remindme: new Date("2024-08-28"),
              repeat: "Daily",
              listType: ["My day"],
            },
          ],
        },
        {
          name: "Completed",
          lists: [
            {
              id: 6,
              description: "Read a book",
              completed: true,
              dueDate: new Date("2024-08-20"),
              remindme: new Date("2024-08-18"),
              repeat: "Yearly",
              listType: ["Tasks"],
            },
          ],
        },
      ],
    },
    {
      name: "Shopping",
      lists: [
        {
          name: "Grocery List",
          lists: [
            {
              id: 7,
              description: "Milk",
              completed: false,
              dueDate: new Date("2024-08-26"),
              remindme: new Date("2024-08-25"),
              repeat: "Monthly",
              listType: ["Planned"],
            },
            {
              id: 8,
              description: "Eggs",
              completed: false,
              dueDate: new Date("2024-08-26"),
              remindme: new Date("2024-08-25"),
              repeat: "Monthly",
              listType: ["Planned"],
            },
          ],
        },
      ],
    },
    {
      name: "Fitness",
      lists: [
        {
          name: "Workouts",
          lists: [
            {
              id: 9,
              description: "Go for a run",
              completed: false,
              dueDate: new Date("2024-08-25"),
              remindme: new Date("2024-08-24"),
              repeat: "Daily",
              listType: ["My day"],
            },
            {
              id: 10,
              description: "Yoga session",
              completed: true,
              dueDate: new Date("2024-08-22"),
              remindme: new Date("2024-08-21"),
              repeat: "Weekly",
              listType: ["Important"],
            },
          ],
        },
      ],
    },
    {
      name: "Travel",
      lists: [
        {
          name: "Packing List",
          lists: [
            {
              id: 11,
              description: "Passport",
              completed: true,
              dueDate: new Date("2024-09-01"),
              remindme: new Date("2024-08-30"),
              repeat: "Yearly",
              listType: ["Tasks"],
            },
            {
              id: 12,
              description: "Travel insurance",
              completed: false,
              dueDate: new Date("2024-09-01"),
              remindme: new Date("2024-08-30"),
              repeat: "Yearly",
              listType: ["Important"],
            },
          ],
        },
      ],
    },
    {
      name: "Health",
      lists: [
        {
          name: "Medical Appointments",
          lists: [
            {
              id: 13,
              description: "Dentist appointment",
              completed: false,
              dueDate: new Date("2024-08-30"),
              remindme: new Date("2024-08-29"),
              repeat: "Yearly",
              listType: ["Important"],
            },
            {
              id: 14,
              description: "Annual check-up",
              completed: true,
              dueDate: new Date("2024-08-15"),
              remindme: new Date("2024-08-14"),
              repeat: "Yearly",
              listType: ["Tasks"],
            },
          ],
        },
      ],
    },
    {
      name: "Education",
      lists: [
        {
          name: "Courses",
          lists: [
            {
              id: 15,
              description: "Complete React course",
              completed: false,
              dueDate: new Date("2024-09-15"),
              remindme: new Date("2024-09-10"),
              repeat: "Monthly",
              listType: ["Important"],
            },
          ],
        },
      ],
    },
    {
      name: "Projects",
      lists: [
        {
          name: "Personal Projects",
          lists: [
            {
              id: 16,
              description: "Build a portfolio website",
              completed: false,
              dueDate: new Date("2024-10-01"),
              remindme: new Date("2024-09-25"),
              repeat: "Weekly",
              listType: ["My day"],
            },
          ],
        },
      ],
    },
    {
      name: "Events",
      lists: [
        {
          name: "Upcoming Events",
          lists: [
            {
              id: 17,
              description: "Attend conference",
              completed: false,
              dueDate: new Date("2024-09-20"),
              remindme: new Date("2024-09-15"),
              repeat: "Yearly",
              listType: ["Important"],
            },
          ],
        },
      ],
    },
    {
      name: "Family",
      lists: [
        {
          name: "Family Activities",
          lists: [
            {
              id: 18,
              description: "Plan family vacation",
              completed: false,
              dueDate: new Date("2024-09-30"),
              remindme: new Date("2024-09-25"),
              repeat: "Monthly",
              listType: ["Planned"],
            },
          ],
        },
      ],
    },
    {
      name: "Hobbies",
      lists: [
        {
          name: "Hobby Projects",
          lists: [
            {
              id: 19,
              description: "Complete model kit",
              completed: false,
              dueDate: new Date("2024-09-05"),
              remindme: new Date("2024-09-01"),
              repeat: "Daily",
              listType: ["My day"],
            },
          ],
        },
      ],
    },
  ],
  setGroups: function (groups: Group[]): void {
    throw new Error("Function not implemented.");
  },
};

export default mockData;
