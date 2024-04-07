import React, { useState } from 'react';

function Sort() {
  const [events, setEvents] = useState([
    { time: "2024-04-02 08:00:00", event: "Event 1" },
    { time: "2024-04-01 20:00:00", event: "Event 2" },
    { time: "2024-04-01 12:00:00", event: "Event 2" },
    { time: "2024-04-01 10:00:00", event: "Event 2" },
    { time: "2024-04-01 03:00:00", event: "Event 2" },
    { time: "2024-04-03 12:00:00", event: "Event 3" }
  ]);

  function compareTime(a, b) {
    const timeA = new Date(a.time.replace(/-/g, "/"));
    const timeB = new Date(b.time.replace(/-/g, "/"));

    if (timeA < timeB) {
      return -1;
    }
    if (timeA > timeB) {
      return 1;
    }
    return 0;
  }

  function handleSort() {
    const sortedEvents = [...events].sort(compareTime);
    setEvents(sortedEvents);
  }

  return (
    <div>
      <h1>Sorted Events</h1>
      <button onClick={handleSort}>Sort Events</button>
      <ul>
        {events.map((event, index) => (
          <li key={index}>
            <strong>{event.time}</strong>: {event.event}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sort;