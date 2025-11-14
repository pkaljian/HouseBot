// For later: use googleapis to talk to Google Calendar.
// For now, just stubs so housebot can "pretend" to use them.

export interface CalendarEventInput {
  title: string;
  startIso: string;
  endIso: string;
  owner: "Peter" | "Elena" | "Family";
  description?: string;
  location?: string;
}

export async function createCalendarEvent(
  event: CalendarEventInput
): Promise<void> {
  console.log("createCalendarEvent (stub):", event);
  // TODO: implement with googleapis
}

export async function listAvailability(
  owner: "Peter" | "Elena" | "Family",
  fromIso: string,
  toIso: string
) {
  console.log("listAvailability (stub)", owner, fromIso, toIso);
  return [];
}
