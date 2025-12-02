"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { people } from "./data";
import { formatTimeInTimezone } from "./timezone-utils";

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
              className="rounded-xl bg-white p-6 shadow-lg transition-shadow hover:shadow-xl dark:bg-gray-800"
            >
              <h2 className="mb-2 text-2xl font-semibold text-gray-900 dark:text-white">
                {person.name}
              </h2>
              <p className="mb-4 text-base font-medium text-gray-600 dark:text-gray-400">
                {person.timezone.replace(/_/g, " ")}
              </p>
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
