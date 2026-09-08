import {
  convertEventTime,
  formatTimeInTimezone,
  getTimezoneOffsetHours,
} from "../app/timezone-utils.ts";

const fixedNow = "2020-01-01T00:00:00.000Z";
const RealDate = globalThis.Date;
class FixedDate extends RealDate {
  constructor(...args) {
    super(args.length === 0 ? fixedNow : args[0]);
  }

  static now() {
    return RealDate.parse(fixedNow);
  }
}

const checks = [
  ["integral negative offset", convertEventTime(0, 0, "UTC+0", "UTC-3"), { hour: 21, minute: 0, dayOffset: -1 }],
  ["negative fractional offset", convertEventTime(0, 0, "IST", "UTC+0"), { hour: 18, minute: 30, dayOffset: -1 }],
  ["positive fractional offset", convertEventTime(0, 0, "UTC+0", "IST"), { hour: 5, minute: 30, dayOffset: 0 }],
];

for (const [name, actual, expected] of checks) {
  if (JSON.stringify(actual) !== JSON.stringify(expected)) {
    throw new Error(`${name}: expected ${JSON.stringify(expected)}, got ${JSON.stringify(actual)}`);
  }
}

if (getTimezoneOffsetHours("IST") !== 5.5) {
  throw new Error("IST must retain its documented positive fractional offset");
}

globalThis.Date = FixedDate;
try {
  if (formatTimeInTimezone("IST") !== "05:30:00 AM") {
    throw new Error("formatTimeInTimezone must normalize negative fractional offsets correctly");
  }
} finally {
  globalThis.Date = RealDate;
}

console.log("timezone arithmetic fixture passed");
