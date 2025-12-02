export function formatTimeInTimezone(timezone: string): string {
  const now = new Date();
  
  const utcOffsetMatch = timezone.match(/^UTC([+-]\d+)$/);
  if (utcOffsetMatch) {
    const offsetHours = parseInt(utcOffsetMatch[1]);
    return formatTimeWithOffset(now, offsetHours);
  }
  
  const abbrevWithOffsetMatch = timezone.match(/^([A-Z]+)([+-]\d+)$/);
  if (abbrevWithOffsetMatch) {
    const abbrev = abbrevWithOffsetMatch[1];
    const offsetHours = parseInt(abbrevWithOffsetMatch[2]);
    return `${formatTimeWithOffset(now, offsetHours)} ${abbrev}`;
  }
  
  const abbreviationMap: Record<string, number> = {
    EST: -5, EDT: -4,
    CST: -6, CDT: -5,
    MST: -7, MDT: -6,
    PST: -8, PDT: -7,
    AKST: -9, AKDT: -8,
    HST: -10,
    GMT: 0, BST: 1,
    CET: 1, CEST: 2,
    EET: 2, EEST: 3,
    WET: 0, WEST: 1,
    JST: 9, KST: 9,
    IST: 5.5,
    AEST: 10, AEDT: 11,
    NZST: 12, NZDT: 13,
  };
  
  const offset = abbreviationMap[timezone.toUpperCase()];
  if (offset !== undefined) {
    return `${formatTimeWithOffset(now, offset)} ${timezone.toUpperCase()}`;
  }
  
  try {
    const formatter = new Intl.DateTimeFormat("en-US", {
      timeZone: timezone,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
    const timeZoneName = new Intl.DateTimeFormat("en-US", {
      timeZone: timezone,
      timeZoneName: "short",
    }).formatToParts(now).find((part) => part.type === "timeZoneName")?.value || "";
    
    return `${formatter.format(now)} ${timeZoneName}`;
  } catch (error) {
    return "Invalid timezone";
  }
}

function formatTimeWithOffset(date: Date, offsetHours: number): string {
  const utcHours = date.getUTCHours();
  const utcMinutes = date.getUTCMinutes();
  const utcSeconds = date.getUTCSeconds();
  
  const offsetMinutes = Math.round(offsetHours * 60);
  const totalMinutes = utcHours * 60 + utcMinutes + offsetMinutes;
  
  let localHours = Math.floor(totalMinutes / 60);
  let localMinutes = totalMinutes % 60;
  let localSeconds = utcSeconds;
  
  if (localMinutes < 0) {
    localMinutes += 60;
    localHours -= 1;
  }
  
  if (localHours < 0) {
    localHours += 24;
  } else if (localHours >= 24) {
    localHours -= 24;
  }
  
  const hour12 = localHours === 0 ? 12 : localHours > 12 ? localHours - 12 : localHours;
  const ampm = localHours < 12 ? "AM" : "PM";
  
  return `${hour12.toString().padStart(2, "0")}:${localMinutes.toString().padStart(2, "0")}:${localSeconds.toString().padStart(2, "0")} ${ampm}`;
}

export function getTimezoneOffsetHours(timezone: string): number {
  const utcOffsetMatch = timezone.match(/^UTC([+-]\d+)$/);
  if (utcOffsetMatch) {
    return parseInt(utcOffsetMatch[1]);
  }
  
  const abbrevWithOffsetMatch = timezone.match(/^([A-Z]+)([+-]\d+)$/);
  if (abbrevWithOffsetMatch) {
    return parseInt(abbrevWithOffsetMatch[2]);
  }
  
  const abbreviationMap: Record<string, number> = {
    EST: -5, EDT: -4,
    CST: -6, CDT: -5,
    MST: -7, MDT: -6,
    PST: -8, PDT: -7,
    AKST: -9, AKDT: -8,
    HST: -10,
    GMT: 0, BST: 1,
    CET: 1, CEST: 2,
    EET: 2, EEST: 3,
    WET: 0, WEST: 1,
    JST: 9, KST: 9,
    IST: 5.5,
    AEST: 10, AEDT: 11,
    NZST: 12, NZDT: 13,
  };
  
  const offset = abbreviationMap[timezone.toUpperCase()];
  if (offset !== undefined) {
    return offset;
  }
  
  return 0;
}

export function convertEventTime(
  hour: number,
  minute: number,
  fromTimezone: string,
  toTimezone: string
): { hour: number; minute: number; dayOffset: number } {
  const fromOffset = getTimezoneOffsetHours(fromTimezone);
  const toOffset = getTimezoneOffsetHours(toTimezone);
  
  const totalMinutes = hour * 60 + minute;
  const utcMinutes = totalMinutes - Math.round(fromOffset * 60);
  const targetMinutes = utcMinutes + Math.round(toOffset * 60);
  
  let targetHours = Math.floor(targetMinutes / 60);
  let targetMins = targetMinutes % 60;
  
  if (targetMins < 0) {
    targetMins += 60;
    targetHours -= 1;
  }
  
  let dayOffset = 0;
  if (targetHours < 0) {
    targetHours += 24;
    dayOffset = -1;
  } else if (targetHours >= 24) {
    targetHours -= 24;
    dayOffset = 1;
  }
  
  return { hour: targetHours, minute: targetMins, dayOffset };
}

