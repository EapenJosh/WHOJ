/*
  UNIVERSITY BREAKS
  -----------------
  Add a break below and the page handles the rest:
    - A banner appears at the top starting 7 days before the break.
    - The RA Duty Phone shows "Monitored now" all day on every break day.
    - If deskClosed is true, the North Campus Desk shows as closed on break days.

  How to add one:
    1. Copy one of the { ... } blocks below, including the comma after it.
    2. Change the name, the first and last day (YYYY-MM-DD), and the note.
    3. Click "Commit changes". The page updates within a couple of minutes.

  Old breaks can stay here; they stop showing once they're over.
*/

window.BREAKS = [
  {
    name: "Fall Break",
    start: "2026-10-26",   // first day of break
    end: "2026-10-27",     // last day of break
    deskClosed: true,      // true if the North Campus Desk is closed
    note: "RAs are on duty 24 hours. Many campus offices are closed, so call the RA Duty Phone if you need help."
  },
];
