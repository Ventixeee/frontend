import { useEffect, useState } from 'react';
import { fetchEvents } from '../API/eventApi';
import { fetchAllBookings } from '../API/bookingApi';

export default function Dashboard() {
  const [eventCount, setEventCount] = useState(0);
  const [bookingCount, setBookingCount] = useState(0);
  const [upcomingEvents, setUpcomingEvents] = useState([]);

  useEffect(() => {
    fetchEvents().then(events => {
      setEventCount(events.length);
      const upcoming = events
        .filter(e => new Date(e.date) > new Date())
        .sort((a, b) => new Date(a.date) - new Date(b.date))
        .slice(0, 3);
      setUpcomingEvents(upcoming);
    });

    fetchAllBookings().then(bookings => {
      setBookingCount(bookings.length);
    });
  }, []);

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Dashboard</h2>

      <div className="grid grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-4 rounded shadow text-center">
          <h3 className="text-xl font-semibold">Totalt antal events</h3>
          <p className="text-4xl text-purple-700">{eventCount}</p>
        </div>
        <div className="bg-white p-4 rounded shadow text-center">
          <h3 className="text-xl font-semibold">Totala registreringar</h3>
          <p className="text-4xl text-purple-700">{bookingCount}</p>
        </div>
      </div>

      <div className="bg-white p-4 rounded shadow">
        <h3 className="text-xl font-semibold mb-4">Kommande events</h3>
        <ul>
          {upcomingEvents.map(event => (
            <li key={event.id} className="border-b py-2">
              {event.title} – {new Date(event.date).toLocaleDateString()} @ {event.location}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

