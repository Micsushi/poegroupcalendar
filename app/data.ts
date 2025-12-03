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
  { name: "Naveeb", timezone: "CET+1" },
  { name: "Gine", timezone: "GMT+8" },
  { name: "Penguin", timezone: "GMT+7" },
  { name: "Asd", timezone: "GMT+8" },
  { name: "Dingding", timezone: "GMT+8" },
];

export const scheduleEvents: ScheduleEvent[] = [
  { name: "option 1", day: 1, startHour: 0, startMinute: 0, endHour: 4, endMinute: 0, color: "#3b82f6" },
  { name: "option 2", day: 1, startHour: 4, startMinute: 0, endHour: 8, endMinute: 0, color: "#3b82f6" },
  { name: "option 3", day: 1, startHour: 8, startMinute: 0, endHour: 12, endMinute: 0, color: "#3b82f6" },
  { name: "option 4", day: 1, startHour: 12, startMinute: 0, endHour: 16, endMinute: 0, color: "#3b82f6" },
  { name: "option 5", day: 1, startHour: 16, startMinute: 0, endHour: 20, endMinute: 0, color: "#3b82f6" },
  { name: "option 6", day: 1, startHour: 20, startMinute: 0, endHour: 24, endMinute: 0, color: "#3b82f6" },

  { name: "option 1", day: 2, startHour: 0, startMinute: 0, endHour: 4, endMinute: 0, color: "#3b82f6" },
  { name: "option 2", day: 2, startHour: 4, startMinute: 0, endHour: 8, endMinute: 0, color: "#3b82f6" },
  { name: "option 3", day: 2, startHour: 8, startMinute: 0, endHour: 12, endMinute: 0, color: "#3b82f6" },
  { name: "option 4", day: 2, startHour: 12, startMinute: 0, endHour: 16, endMinute: 0, color: "#3b82f6" },
  { name: "option 5", day: 2, startHour: 16, startMinute: 0, endHour: 20, endMinute: 0, color: "#3b82f6" },
  { name: "option 6", day: 2, startHour: 20, startMinute: 0, endHour: 24, endMinute: 0, color: "#3b82f6" },

  { name: "option 1", day: 3, startHour: 0, startMinute: 0, endHour: 4, endMinute: 0, color: "#3b82f6" },
  { name: "option 2", day: 3, startHour: 4, startMinute: 0, endHour: 8, endMinute: 0, color: "#3b82f6" },
  { name: "option 3", day: 3, startHour: 8, startMinute: 0, endHour: 12, endMinute: 0, color: "#3b82f6" },
  { name: "option 4", day: 3, startHour: 12, startMinute: 0, endHour: 16, endMinute: 0, color: "#3b82f6" },
  { name: "option 5", day: 3, startHour: 16, startMinute: 0, endHour: 20, endMinute: 0, color: "#3b82f6" },
  { name: "option 6", day: 3, startHour: 20, startMinute: 0, endHour: 24, endMinute: 0, color: "#3b82f6" },

  { name: "option 1", day: 4, startHour: 0, startMinute: 0, endHour: 4, endMinute: 0, color: "#3b82f6" },
  { name: "option 2", day: 4, startHour: 4, startMinute: 0, endHour: 8, endMinute: 0, color: "#3b82f6" },
  { name: "option 3", day: 4, startHour: 8, startMinute: 0, endHour: 12, endMinute: 0, color: "#3b82f6" },
  { name: "option 4", day: 4, startHour: 12, startMinute: 0, endHour: 16, endMinute: 0, color: "#3b82f6" },
  { name: "option 5", day: 4, startHour: 16, startMinute: 0, endHour: 20, endMinute: 0, color: "#3b82f6" },
  { name: "option 6", day: 4, startHour: 20, startMinute: 0, endHour: 24, endMinute: 0, color: "#3b82f6" },

  { name: "option 1", day: 5, startHour: 0, startMinute: 0, endHour: 4, endMinute: 0, color: "#3b82f6" },
  { name: "option 2", day: 5, startHour: 4, startMinute: 0, endHour: 8, endMinute: 0, color: "#3b82f6" },
  { name: "option 3", day: 5, startHour: 8, startMinute: 0, endHour: 12, endMinute: 0, color: "#3b82f6" },
  { name: "option 4", day: 5, startHour: 12, startMinute: 0, endHour: 16, endMinute: 0, color: "#3b82f6" },
  { name: "option 5", day: 5, startHour: 16, startMinute: 0, endHour: 20, endMinute: 0, color: "#3b82f6" },
  { name: "option 6", day: 5, startHour: 20, startMinute: 0, endHour: 24, endMinute: 0, color: "#3b82f6" },

  { name: "option 1", day: 6, startHour: 0, startMinute: 0, endHour: 4, endMinute: 0, color: "#3b82f6" },
  { name: "option 2", day: 6, startHour: 4, startMinute: 0, endHour: 8, endMinute: 0, color: "#3b82f6" },
  { name: "option 3", day: 6, startHour: 8, startMinute: 0, endHour: 12, endMinute: 0, color: "#3b82f6" },
  { name: "option 4", day: 6, startHour: 12, startMinute: 0, endHour: 16, endMinute: 0, color: "#3b82f6" },
  { name: "option 5", day: 6, startHour: 16, startMinute: 0, endHour: 20, endMinute: 0, color: "#3b82f6" },
  { name: "option 6", day: 6, startHour: 20, startMinute: 0, endHour: 24, endMinute: 0, color: "#3b82f6" },

  { name: "option 1", day: 7, startHour: 0, startMinute: 0, endHour: 4, endMinute: 0, color: "#3b82f6" },
  { name: "option 2", day: 7, startHour: 4, startMinute: 0, endHour: 8, endMinute: 0, color: "#3b82f6" },
  { name: "option 3", day: 7, startHour: 8, startMinute: 0, endHour: 12, endMinute: 0, color: "#3b82f6" },
  { name: "option 4", day: 7, startHour: 12, startMinute: 0, endHour: 16, endMinute: 0, color: "#3b82f6" },
  { name: "option 5", day: 7, startHour: 16, startMinute: 0, endHour: 20, endMinute: 0, color: "#3b82f6" },
  { name: "option 6", day: 7, startHour: 20, startMinute: 0, endHour: 24, endMinute: 0, color: "#3b82f6" },
];
