"use client";

import { useState } from "react";
import Link from "next/link";
import { scheduleEvents, people, type ScheduleEvent } from "../data";
import { convertEventTime } from "../timezone-utils";

const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const HOURS = Array.from({ length: 24 }, (_, i) => i);

const BASE_TIMEZONE = "MST";

export default function Scheduler() {
  const [selectedTimezone, setSelectedTimezone] = useState(people[0]?.timezone || "UTC+0");

  const formatTime = (hour: number, minute: number) => {
    if (hour === 0) return `12:${minute.toString().padStart(2, "0")} AM`;
    if (hour < 12) return `${hour}:${minute.toString().padStart(2, "0")} AM`;
    if (hour === 12) return `12:${minute.toString().padStart(2, "0")} PM`;
    return `${hour - 12}:${minute.toString().padStart(2, "0")} PM`;
  };

  const getEventsForDay = (dayIndex: number) => {
    const events: Array<ScheduleEvent & {
      isSplit?: boolean;
      isSecondPart?: boolean;
      displayEndHour?: number;
      displayEndMinute?: number;
    }> = [];

    scheduleEvents.forEach((event) => {
      const startConverted = convertEventTime(
        event.startHour,
        event.startMinute,
        BASE_TIMEZONE,
        selectedTimezone
      );
      const endConverted = convertEventTime(
        event.endHour,
        event.endMinute,
        BASE_TIMEZONE,
        selectedTimezone
      );

      let convertedDay = event.day + startConverted.dayOffset;
      if (convertedDay < 0) convertedDay += 7;
      if (convertedDay >= 7) convertedDay -= 7;

      let endDay = event.day + endConverted.dayOffset;
      if (endDay < 0) endDay += 7;
      if (endDay >= 7) endDay -= 7;

      const endsAtMidnight = endConverted.hour === 0 && endConverted.minute === 0;
      
      if (endsAtMidnight && endDay !== convertedDay) {
        if (convertedDay === dayIndex) {
          events.push({
            ...event,
            startHour: startConverted.hour,
            startMinute: startConverted.minute,
            endHour: 24,
            endMinute: 0,
            displayEndHour: 0,
            displayEndMinute: 0,
          });
        }
        return;
      }

      const startTotalMinutes = startConverted.hour * 60 + startConverted.minute;
      const endTotalMinutes = endConverted.hour * 60 + endConverted.minute;
      const crossesMidnight = endTotalMinutes < startTotalMinutes || endDay !== convertedDay;

      if (crossesMidnight) {
        if (convertedDay === dayIndex) {
          events.push({
            ...event,
            startHour: startConverted.hour,
            startMinute: startConverted.minute,
            endHour: 24,
            endMinute: 0,
            displayEndHour: 0,
            displayEndMinute: 0,
            isSplit: true,
            isSecondPart: false,
          });
        }

        const secondPartDay = endDay !== convertedDay ? endDay : (convertedDay + 1) % 7;
        if (secondPartDay === dayIndex && (endConverted.hour > 0 || endConverted.minute > 0)) {
          events.push({
            ...event,
            startHour: 0,
            startMinute: 0,
            endHour: endConverted.hour,
            endMinute: endConverted.minute,
            isSplit: true,
            isSecondPart: true,
          });
        }
      } else {
        if (convertedDay === dayIndex) {
          events.push({
            ...event,
            startHour: startConverted.hour,
            startMinute: startConverted.minute,
            endHour: endConverted.hour,
            endMinute: endConverted.minute,
          });
        }
      }
    });

    return events;
  };

  const getEventStyle = (event: {
    startHour: number;
    startMinute: number;
    endHour: number;
    endMinute: number;
    color?: string;
  }) => {
    const startMinutes = event.startHour * 60 + event.startMinute;
    const endMinutes = event.endHour === 24 ? 24 * 60 : event.endHour * 60 + event.endMinute;
    const duration = endMinutes - startMinutes;
    
    const gap = 4;
    const top = (startMinutes / 60) * 60 + gap;
    const height = Math.max((duration / 60) * 60 - gap * 2, 20);
    
    return {
      top: `${top}px`,
      height: `${height}px`,
      backgroundColor: event.color || "#3b82f6",
    };
  };

  const isEventTooSmall = (height: number) => {
    return height < 40;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            Weekly Scheduler
          </h1>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <label htmlFor="timezone-select" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Timezone:
              </label>
              <select
                id="timezone-select"
                value={selectedTimezone}
                onChange={(e) => setSelectedTimezone(e.target.value)}
                className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-900 shadow-sm transition-colors hover:bg-gray-50 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
              >
                {people.map((person) => (
                  <option key={person.name} value={person.timezone}>
                    {person.name} ({person.timezone})
                  </option>
                ))}
              </select>
            </div>
            <Link
              href="/"
              className="rounded-lg bg-indigo-600 px-6 py-2 text-white transition-colors hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
            >
              View Timezones
            </Link>
          </div>
        </div>

        <div className="mb-4 text-sm text-gray-600 dark:text-gray-400">
          Showing schedule in: <span className="font-semibold text-indigo-600 dark:text-indigo-400">{selectedTimezone}</span>
        </div>

        <div className="overflow-x-auto rounded-xl bg-white shadow-lg dark:bg-gray-800">
          <div className="min-w-[1000px]">
            <div className="grid grid-cols-8 border-b-2 border-gray-300 dark:border-gray-600">
              <div className="p-4 font-semibold text-gray-700 dark:text-gray-300">
                Time
              </div>
              {DAYS.map((day) => (
                <div
                  key={day}
                  className="border-l border-gray-200 p-4 text-center font-semibold text-gray-700 dark:border-gray-700 dark:text-gray-300"
                >
                  {day.slice(0, 3)}
                </div>
              ))}
            </div>

            <div className="relative grid grid-cols-8">
              <div className="border-r border-gray-200 dark:border-gray-700">
                {HOURS.map((hour) => (
                  <div
                    key={hour}
                    className="h-[60px] border-b border-gray-100 p-2 text-sm text-gray-500 dark:border-gray-700 dark:text-gray-400"
                  >
                    {hour === 0
                      ? "12 AM"
                      : hour < 12
                      ? `${hour} AM`
                      : hour === 12
                      ? "12 PM"
                      : `${hour - 12} PM`}
                  </div>
                ))}
              </div>

              {DAYS.map((day, dayIndex) => {
                const dayEvents = getEventsForDay(dayIndex);
                return (
                  <div
                    key={day}
                    className="relative border-r border-gray-200 dark:border-gray-700"
                  >
                    {HOURS.map((hour) => (
                      <div
                        key={hour}
                        className="h-[60px] border-b border-gray-100 dark:border-gray-700"
                      />
                    ))}
                    
                    {dayEvents.map((event) => {
                      const style = getEventStyle(event);
                      const tooSmall = isEventTooSmall(parseFloat(style.height as string));
                      const eventKey = `${event.name}-${event.day}-${event.startHour}-${event.startMinute}-${event.endHour}-${event.endMinute}-${event.isSecondPart ? 'part2' : 'part1'}-${dayIndex}`;
                      const displayEndHour = event.displayEndHour !== undefined ? event.displayEndHour : event.endHour;
                      const displayEndMinute = event.displayEndMinute !== undefined ? event.displayEndMinute : event.endMinute;
                      return (
                        <div
                          key={eventKey}
                          className="absolute left-2 right-2 rounded-md px-2 py-1 text-xs font-medium text-white shadow-md transition-all hover:shadow-lg hover:z-10 overflow-hidden"
                          style={style}
                        >
                          <div className="font-semibold truncate">{event.name}</div>
                          {!tooSmall && (
                            <div className="text-xs opacity-90 truncate">
                              {formatTime(event.startHour, event.startMinute)} - {formatTime(displayEndHour, displayEndMinute)}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

