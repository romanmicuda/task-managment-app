import { Group, TodoContextType } from "./types";

export const listTypes = ["My day", "Important", "Planned", "Tasks"];

const mockData: Group[] = [
  {
    name: "Work",
    groupList: [
      {
        name: "To Do",
        lists: [
          {
            id: 1,
            description: "Finish project report",
            completed: false,
            dueDate: new Date("2024-09-01T17:00:00"),
            remindme: new Date("2024-08-30T09:00:00"),
            repeat: "Weekly",
            listType: ["Important"],
          },
          {
            id: 2,
            description: "Prepare presentation slides",
            completed: true,
            dueDate: new Date("2024-08-28T14:00:00"),
            remindme: new Date("2024-08-27T12:00:00"),
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
            dueDate: new Date("2024-09-10T16:00:00"),
            remindme: new Date("2024-09-05T10:00:00"),
            repeat: "Weekly",
            listType: ["Tasks"],
          },
        ],
      },
    ],
  },
  {
    name: "Personal",
    groupList: [
      {
        name: "To Do",
        lists: [
          {
            id: 4,
            description: "Buy groceries",
            completed: false,
            dueDate: new Date("2024-08-26T18:00:00"),
            remindme: new Date("2024-08-25T08:00:00"),
            repeat: "Monthly",
            listType: ["Planned"],
          },
          {
            id: 5,
            description: "Call mom",
            completed: false,
            dueDate: new Date("2024-08-29T20:00:00"),
            remindme: new Date("2024-08-28T09:00:00"),
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
            dueDate: new Date("2024-08-20T13:00:00"),
            remindme: new Date("2024-08-18T09:00:00"),
            repeat: "Yearly",
            listType: ["Tasks"],
          },
        ],
      },
    ],
  },
  {
    name: "Shopping",
    groupList: [
      {
        name: "Grocery List",
        lists: [
          {
            id: 7,
            description: "Milk",
            completed: false,
            dueDate: new Date("2024-08-26T18:00:00"),
            remindme: new Date("2024-08-25T10:00:00"),
            repeat: "Monthly",
            listType: ["Planned"],
          },
          {
            id: 8,
            description: "Eggs",
            completed: false,
            dueDate: new Date("2024-08-26T18:00:00"),
            remindme: new Date("2024-08-25T10:00:00"),
            repeat: "Monthly",
            listType: ["Planned"],
          },
        ],
      },
    ],
  },
  {
    name: "Fitness",
    groupList: [
      {
        name: "Workouts",
        lists: [
          {
            id: 9,
            description: "Go for a run",
            completed: false,
            dueDate: new Date("2024-08-25T07:00:00"),
            remindme: new Date("2024-08-24T06:30:00"),
            repeat: "Daily",
            listType: ["My day"],
          },
          {
            id: 10,
            description: "Yoga session",
            completed: true,
            dueDate: new Date("2024-08-22T18:00:00"),
            remindme: new Date("2024-08-21T08:00:00"),
            repeat: "Weekly",
            listType: ["Important"],
          },
        ],
      },
    ],
  },
  {
    name: "Travel",
    groupList: [
      {
        name: "Packing List",
        lists: [
          {
            id: 11,
            description: "Passport",
            completed: true,
            dueDate: new Date("2024-09-01T12:00:00"),
            remindme: new Date("2024-08-30T08:00:00"),
            repeat: "Yearly",
            listType: ["Tasks"],
          },
          {
            id: 12,
            description: "Travel insurance",
            completed: false,
            dueDate: new Date("2024-09-01T12:00:00"),
            remindme: new Date("2024-08-30T08:00:00"),
            repeat: "Yearly",
            listType: ["Important"],
          },
        ],
      },
    ],
  },
  {
    name: "Health",
    groupList: [
      {
        name: "Medical Appointments",
        lists: [
          {
            id: 13,
            description: "Dentist appointment",
            completed: false,
            dueDate: new Date("2024-08-30T15:00:00"),
            remindme: new Date("2024-08-29T09:00:00"),
            repeat: "Yearly",
            listType: ["Important"],
          },
          {
            id: 14,
            description: "Annual check-up",
            completed: true,
            dueDate: new Date("2024-08-15T10:00:00"),
            remindme: new Date("2024-08-14T09:00:00"),
            repeat: "Yearly",
            listType: ["Tasks"],
          },
        ],
      },
    ],
  },
  {
    name: "Education",
    groupList: [
      {
        name: "Courses",
        lists: [
          {
            id: 15,
            description: "Complete React course",
            completed: false,
            dueDate: new Date("2024-09-15T23:59:00"),
            remindme: new Date("2024-09-10T10:00:00"),
            repeat: "Monthly",
            listType: ["Important"],
          },
        ],
      },
    ],
  },
  {
    name: "Projects",
    groupList: [
      {
        name: "Personal Projects",
        lists: [
          {
            id: 16,
            description: "Build a portfolio website",
            completed: false,
            dueDate: new Date("2024-10-01T18:00:00"),
            remindme: new Date("2024-09-25T10:00:00"),
            repeat: "Weekly",
            listType: ["My day"],
          },
        ],
      },
    ],
  },
  {
    name: "Events",
    groupList: [
      {
        name: "Upcoming Events",
        lists: [
          {
            id: 17,
            description: "Attend conference",
            completed: false,
            dueDate: new Date("2024-09-20T09:00:00"),
            remindme: new Date("2024-09-15T08:00:00"),
            repeat: "Yearly",
            listType: ["Important"],
          },
        ],
      },
    ],
  },
  {
    name: "Family",
    groupList: [
      {
        name: "Family Activities",
        lists: [
          {
            id: 18,
            description: "Plan family vacation",
            completed: false,
            dueDate: new Date("2024-09-30T18:00:00"),
            remindme: new Date("2024-09-25T10:00:00"),
            repeat: "Monthly",
            listType: ["Planned"],
          },
        ],
      },
    ],
  },
  {
    name: "Hobbies",
    groupList: [
      {
        name: "Hobby Projects",
        lists: [
          {
            id: 19,
            description: "Complete model kit",
            completed: false,
            dueDate: new Date("2024-09-05T18:00:00"),
            remindme: new Date("2024-09-01T10:00:00"),
            repeat: "Daily",
            listType: ["My day"],
          },
        ],
      },
    ],
  },
];

export default mockData;
