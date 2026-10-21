/*
  UNIVERSITY BREAKS
  -----------------
  Add a break below and the page handles the rest:
    - A banner appears at the top starting 7 days before the break.
    - The duty phone shows "Monitored now" all day on every break day.

  Settings for each break (only name, start, end, and note are required):
    name             What residents see, like "Fall Break"
    start / end      First and last day of the break, written YYYY-MM-DD
    note             One or two sentences shown in the banner
    deskClosed       true if the North Campus Desk is closed for the whole break
    deskClosedDays   Only some days closed: [["first day", "last day"], ...]
    deskNote         Special desk hours, shown on the desk card during the break
    dutyNumber       A different duty phone to use during the break
    dutyNumberUntil  Last day to show that different number (YYYY-MM-DD)

  How to add one:
    1. Copy one of the { ... } blocks below, including the comma after it.
    2. Change the settings.
    3. Click "Commit changes". The page updates within a couple of minutes.

  Old breaks can stay here; they stop showing once they're over.
*/

window.BREAKS = [
  {
    name: "Fall Break",
    start: "2026-10-25",
    end: "2026-10-27",
    deskClosed: true,
    note: "RAs are on duty 24 hours. Many campus offices are closed, so call the RA Duty Phone if you need help."
  },
  {
    name: "Thanksgiving Recess",
    start: "2026-11-25",
    end: "2026-11-29",
    deskClosedDays: [["2026-11-26", "2026-11-26"]],
    deskNote: "Break hours: Fri → Sun 10am → 6pm. Closed Thanksgiving Day.",
    dutyNumber: "(616) 826-5859",
    note: "Staying on campus? Complete the Thanksgiving Break Sign Up form in myHousing. Housing desks are closed Thursday and open 10am → 6pm Friday → Sunday. Call (616) 826-5859 when the desk is closed."
  },
  {
    name: "Winter Break",
    start: "2026-12-19",
    end: "2027-01-10",
    deskClosedDays: [["2026-12-23", "2027-01-03"]],
    deskNote: "Break hours vary. Dec 20 → 22 and Jan 4 → 6: 10am → 6pm. Jan 7 → 8: 8am → 8pm. Jan 9 → 10: 8am → 10pm.",
    dutyNumber: "(616) 826-5859",
    dutyNumberUntil: "2027-01-07",
    note: "Move out by 5pm Saturday, Dec 19, unless you submitted a Winter Break Stay Request in myHousing. Campus and dining are closed for most of break, and lockouts may take 1 to 2 hours. Residents can return Jan 9 and 10."
  },
];
