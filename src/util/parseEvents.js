export async function parseEventsCSV() {
  try {
    const response = await fetch('/src/util/events.csv');
    const csvText = await response.text();

    const lines = csvText.trim().split('\n');
    const headers = lines[0].split(',');

    const events = lines.slice(1).map(line => {
      const values = line.split(',');
      const event = {};

      headers.forEach((header, index) => {
        event[header.trim()] = values[index]?.trim() || '';
      });

      return event;
    });

    return events;
  } catch (error) {
    console.error('Error loading events:', error);
    return [];
  }
}

export function separateEvents(events) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const upcoming = events
    .filter(event => new Date(event.date) >= today)
    .sort((a, b) => new Date(a.date) - new Date(b.date));

  const past = events
    .filter(event => new Date(event.date) < today)
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  return { upcoming, past };
}
