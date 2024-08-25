export interface TodoContextType {
  groups: Group[];
  setGroups: (groups: Group[]) => void;
}

export interface Group {
  name: string;
  lists: List[];
}

export interface List {
  name: string;
  lists: TodoType[];
}

export type TodoType = {
  id: number;
  description: string;
  completed: boolean;
  dueDate: Date;
  remindme: Date;
  repeat: RepeatType;
  listType: ListType[];
};

export type RepeatType =
  | "Daily"
  | "WeekDays"
  | "Weekly"
  | "Monthly"
  | "Yearly"
  | "Customized";

export type ListType = "My day" | "Important" | "Planned" | "Tasks";
