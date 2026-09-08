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
  timezone?: string;
}

export const people: Person[] = [
  { name: "Sushi", timezone: "MST" },
  { name: "Crack", timezone: "CET+1" },
  { name: "Penguin", timezone: "GMT+7" },
  { name: "Asd", timezone: "GMT+8" },
  { name: "Dingding", timezone: "GMT+8" },
];

export const scheduleEvents: ScheduleEvent[] = [
  // sushi cant play: 3am to noon MST time (red block)
  { name: "sushi cant play", day: 1, startHour: 3, startMinute: 0, endHour: 12, endMinute: 0, color: "#FF0000" },
  { name: "sushi cant play", day: 2, startHour: 3, startMinute: 0, endHour: 12, endMinute: 0, color: "#FF0000" },
  { name: "sushi cant play", day: 3, startHour: 3, startMinute: 0, endHour: 12, endMinute: 0, color: "#FF0000" },
  { name: "sushi cant play", day: 4, startHour: 3, startMinute: 0, endHour: 12, endMinute: 0, color: "#FF0000" },
  { name: "sushi cant play", day: 5, startHour: 3, startMinute: 0, endHour: 12, endMinute: 0, color: "#FF0000" },
  { name: "sushi cant play", day: 6, startHour: 3, startMinute: 0, endHour: 12, endMinute: 0, color: "#FF0000" },
  { name: "sushi cant play", day: 0, startHour: 3, startMinute: 0, endHour: 12, endMinute: 0, color: "#FF0000" },
  
  // crack cant play: 1am to 8am CET+1 time (red block)
  { name: "crack cant play", day: 1, startHour: 1, startMinute: 0, endHour: 8, endMinute: 0, color: "#FF0000", timezone: "CET+1" },
  { name: "crack cant play", day: 2, startHour: 1, startMinute: 0, endHour: 8, endMinute: 0, color: "#FF0000", timezone: "CET+1" },
  { name: "crack cant play", day: 3, startHour: 1, startMinute: 0, endHour: 8, endMinute: 0, color: "#FF0000", timezone: "CET+1" },
  { name: "crack cant play", day: 4, startHour: 1, startMinute: 0, endHour: 8, endMinute: 0, color: "#FF0000", timezone: "CET+1" },
  { name: "crack cant play", day: 5, startHour: 1, startMinute: 0, endHour: 8, endMinute: 0, color: "#FF0000", timezone: "CET+1" },
  { name: "crack cant play", day: 6, startHour: 1, startMinute: 0, endHour: 8, endMinute: 0, color: "#FF0000", timezone: "CET+1" },
  { name: "crack cant play", day: 0, startHour: 1, startMinute: 0, endHour: 8, endMinute: 0, color: "#FF0000", timezone: "CET+1" },
];
