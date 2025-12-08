export interface Person {
  name: string;
  timezone: string;
}

export interface ScheduleEvent {
  name: string;
  day: number;
  startHour: number;
  startMinute: number;
  endHour: number;
  endMinute: number;
  color?: string;
}

export const people: Person[] = [
  { name: "Sushi", timezone: "MST" },
  { name: "Fluss", timezone: "CET+1" },
  { name: "Rat", timezone: "CET+1" },
  { name: "Nabeev", timezone: "CET+1" },
  { name: "Gine", timezone: "GMT+8" },
  { name: "Penguin", timezone: "GMT+7" },
  { name: "Asd", timezone: "GMT+8" },
  { name: "Dingding", timezone: "GMT+8" },
];

export const scheduleEvents: ScheduleEvent[] = [
  { name: "option 1", day: 1, startHour: 7, startMinute: 0, endHour: 11, endMinute: 0, color: "#3b82f6" },
  { name: "break", day: 1, startHour: 11, startMinute: 0, endHour: 11, endMinute: 30, color: "#3b82f6" },
  { name: "option 2", day: 1, startHour: 11, startMinute: 30, endHour: 15, endMinute: 30, color: "#3b82f6" },
  { name: "break", day: 1, startHour: 15, startMinute: 30, endHour: 16, endMinute: 0, color: "#3b82f6" },
  { name: "option 3", day: 1, startHour: 16, startMinute: 0, endHour: 20, endMinute: 0, color: "#3b82f6" },

  { name: "option 1", day: 2, startHour: 7, startMinute: 0, endHour: 11, endMinute: 0, color: "#3b82f6" },
  { name: "break", day: 2, startHour: 11, startMinute: 0, endHour: 11, endMinute: 30, color: "#3b82f6" },
  { name: "option 2", day: 2, startHour: 11, startMinute: 30, endHour: 15, endMinute: 30, color: "#3b82f6" },
  { name: "break", day: 2, startHour: 15, startMinute: 30, endHour: 16, endMinute: 0, color: "#3b82f6" },
  { name: "option 3", day: 2, startHour: 16, startMinute: 0, endHour: 20, endMinute: 0, color: "#3b82f6" },

  { name: "option 1", day: 3, startHour: 7, startMinute: 0, endHour: 11, endMinute: 0, color: "#3b82f6" },
  { name: "break", day: 3, startHour: 11, startMinute: 0, endHour: 11, endMinute: 30, color: "#3b82f6" },
  { name: "option 2", day: 3, startHour: 11, startMinute: 30, endHour: 15, endMinute: 30, color: "#3b82f6" },
  { name: "break", day: 3, startHour: 15, startMinute: 30, endHour: 16, endMinute: 0, color: "#3b82f6" },
  { name: "option 3", day: 3, startHour: 16, startMinute: 0, endHour: 20, endMinute: 0, color: "#3b82f6" },

  { name: "option 1", day: 4, startHour: 7, startMinute: 0, endHour: 11, endMinute: 0, color: "#3b82f6" },
  { name: "break", day: 4, startHour: 11, startMinute: 0, endHour: 11, endMinute: 30, color: "#3b82f6" },
  { name: "option 2", day: 4, startHour: 11, startMinute: 30, endHour: 15, endMinute: 30, color: "#3b82f6" },
  { name: "break", day: 4, startHour: 15, startMinute: 30, endHour: 16, endMinute: 0, color: "#3b82f6" },
  { name: "option 3", day: 4, startHour: 16, startMinute: 0, endHour: 20, endMinute: 0, color: "#3b82f6" },

  { name: "option 1", day: 5, startHour: 7, startMinute: 0, endHour: 11, endMinute: 0, color: "#3b82f6" },
  { name: "break", day: 5, startHour: 11, startMinute: 0, endHour: 11, endMinute: 30, color: "#3b82f6" },
  { name: "option 2", day: 5, startHour: 11, startMinute: 30, endHour: 15, endMinute: 30, color: "#3b82f6" },
  { name: "break", day: 5, startHour: 15, startMinute: 30, endHour: 16, endMinute: 0, color: "#3b82f6" },
  { name: "option 3", day: 5, startHour: 16, startMinute: 0, endHour: 20, endMinute: 0, color: "#3b82f6" },

  { name: "option 1", day: 6, startHour: 7, startMinute: 0, endHour: 11, endMinute: 0, color: "#3b82f6" },
  { name: "break", day: 6, startHour: 11, startMinute: 0, endHour: 11, endMinute: 30, color: "#3b82f6" },
  { name: "option 2", day: 6, startHour: 11, startMinute: 30, endHour: 15, endMinute: 30, color: "#3b82f6" },
  { name: "break", day: 6, startHour: 15, startMinute: 30, endHour: 16, endMinute: 0, color: "#3b82f6" },
  { name: "option 3", day: 6, startHour: 16, startMinute: 0, endHour: 20, endMinute: 0, color: "#3b82f6" },

  { name: "option 1", day: 7, startHour: 7, startMinute: 0, endHour: 11, endMinute: 0, color: "#3b82f6" },
  { name: "break", day: 7, startHour: 11, startMinute: 0, endHour: 11, endMinute: 30, color: "#3b82f6" },
  { name: "option 2", day: 7, startHour: 11, startMinute: 30, endHour: 15, endMinute: 30, color: "#3b82f6" },
  { name: "break", day: 7, startHour: 15, startMinute: 30, endHour: 16, endMinute: 0, color: "#3b82f6" },
  { name: "option 3", day: 7, startHour: 16, startMinute: 0, endHour: 20, endMinute: 0, color: "#3b82f6" },
];
