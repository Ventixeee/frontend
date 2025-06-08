import { useEffect, useState } from 'react'
import { fetchAllBookings } from '../API/bookingApi.js'

export default function Bookings() {
  const [bookings, setBookings] = useState([])

  useEffect(() => {
    fetchAllBookings()
      .then(setBookings)
      .catch(console.error)
  }, [])

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Bookings</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded shadow">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-3">Event ID</th>
              <th className="p-3">Namn</th>
              <th className="p-3">E-post</th>
              <th className="p-3">Datum</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map(b => (
              <tr key={b.id} className="border-t">
                <td className="p-3">{b.eventId}</td>
                <td className="p-3">{b.fullName}</td>
                <td className="p-3">{b.email}</td>
                <td className="p-3">{new Date(b.registeredAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
