# Timezone Scheduler

A Next.js application for viewing and managing schedules across multiple timezones. Display team member timezones and view weekly schedules converted to any timezone.

## Features

- **Timezone Display**: View current time for team members in their respective timezones
- **Weekly Scheduler**: Visual calendar showing events with timezone conversion
- **Flexible Timezone Formats**: Supports multiple timezone formats:
  - UTC offsets: `UTC-5`, `UTC+9`, `UTC-8`
  - Timezone abbreviations: `MST`, `EST`, `GMT`, `JST`, etc.
  - Abbreviations with offsets: `CET+1`
  - IANA timezone identifiers: `America/New_York`, `Europe/London`, etc.

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Configuration

### Adding People

Edit `app/data.ts` to add team members and their timezones:

```typescript
export const people: Person[] = [
  { name: "Sushi", timezone: "MST" },
  { name: "Fluss", timezone: "CET+1" },
  // Add more people...
];
```

### Adding Schedule Events

Edit `app/data.ts` to add weekly schedule events. Events are stored in MST timezone by default:

```typescript
export const scheduleEvents: ScheduleEvent[] = [
  {
    name: "Team Meeting",
    day: 1, // Monday (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
    startHour: 9,
    startMinute: 0,
    endHour: 10,
    endMinute: 30,
    color: "#3b82f6",
  },
  // Add more events...
];
```

## Project Structure

```
timezone-scheduler/
├── app/
│   ├── data.ts              # People and schedule events data
│   ├── page.tsx             # Home page with timezone display
│   ├── scheduler/
│   │   └── page.tsx         # Weekly scheduler page
│   └── timezone-utils.ts    # Timezone conversion utilities
├── public/                   # Static assets
└── package.json
```

## Usage

1. **View Timezones**: Navigate to the home page to see current times for all team members
2. **View Scheduler**: Click "View Scheduler" to see the weekly calendar
3. **Change Timezone**: Use the dropdown in the scheduler to view events in different timezones

## Supported Timezone Formats

- **UTC Offsets**: `UTC-5`, `UTC+9`, `UTC+0`
- **US Time Zones**: `EST`, `EDT`, `CST`, `CDT`, `MST`, `MDT`, `PST`, `PDT`, `AKST`, `AKDT`, `HST`
- **European Time Zones**: `GMT`, `BST`, `CET`, `CEST`, `EET`, `EEST`, `WET`, `WEST`
- **Asian Time Zones**: `JST`, `KST`, `CST`, `IST`
- **Other**: `AEST`, `AEDT`, `NZST`, `NZDT`
- **With Offsets**: `CET+1`, `EST+2`, etc.
- **IANA Identifiers**: `America/New_York`, `Europe/London`, `Asia/Tokyo`, etc.

## Build

```bash
npm run build
npm start
```

## Technologies

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
