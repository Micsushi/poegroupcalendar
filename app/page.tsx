"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { people } from "./data";
import { formatTimeInTimezone, getTimezoneOffsetHours } from "./timezone-utils";

export default function Home() {
  const [times, setTimes] = useState<Record<string, string>>({});

  useEffect(() => {
    const updateTimes = () => {
      const newTimes: Record<string, string> = {};
      people.forEach((person) => {
        try {
          newTimes[person.name] = formatTimeInTimezone(person.timezone);
        } catch (error) {
          newTimes[person.name] = "Error";
        }
      });
      setTimes(newTimes);
    };

    updateTimes();
    const interval = setInterval(updateTimes, 1000);

    return () => clearInterval(interval);
  }, []);

  const getUTCTimezone = (timezone: string): string => {
    const offset = getTimezoneOffsetHours(timezone);
    if (offset === 0) {
      return "UTC+0";
    } else if (offset > 0) {
      return `UTC+${offset}`;
    } else {
      return `UTC${offset}`;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            Timezone Display
          </h1>
          <Link
            href="/scheduler"
            className="rounded-lg bg-indigo-600 px-6 py-2 text-white transition-colors hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
          >
            View Scheduler
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {people.map((person) => (
            <div
              key={person.name}
              className="relative rounded-xl bg-white p-6 shadow-lg transition-shadow hover:shadow-xl dark:bg-gray-800"
            >
              <div className="absolute top-4 right-4 text-sm font-medium text-gray-500 dark:text-gray-400">
                {getUTCTimezone(person.timezone)}
              </div>
              <h2 className="mb-2 text-2xl font-semibold text-gray-900 dark:text-white">
                {person.name}
              </h2>
              <div className="text-3xl font-mono font-bold text-indigo-600 dark:text-indigo-400">
                {times[person.name] || "Loading..."}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
