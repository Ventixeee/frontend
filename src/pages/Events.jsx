import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { fetchEvents } from '../API/eventApi'
import axios from 'axios'

export default function Events() {
  const [events, setEvents] = useState([])

  useEffect(() => {
    fetchEvents().then(setEvents).catch(console.error)
  }, [])

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Events</h2>
      <div className="grid grid-cols-1 gap-4">
        {events.map(event => (
          <div key={event.id} className="p-4 bg-white rounded shadow hover:shadow-md transition">
            <Link to={`/events/${event.id}`}>
              <h3 className="text-xl font-semibold">{event.title}</h3>
              <p>{new Date(event.date).toLocaleDateString()}</p>
              <p>{event.location}</p>
            </Link>
            <Link
              to={`/events/${event.id}/edit`}
              className="text-sm text-blue-600 underline mt-2 inline-block"
            >
              Redigera
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

