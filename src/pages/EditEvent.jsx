import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function EditEvent() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [event, setEvent] = useState(null)

  useEffect(() => {
    axios.get(`https://localhost:7001/api/events/${id}`)
      .then(res => setEvent(res.data))
      .catch(console.error)
  }, [id])

  const handleChange = (e) => {
    setEvent({ ...event, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.put(`https://localhost:7001/api/events/${id}`, event)
    navigate('/events')
  }

  if (!event) return <p>Laddar event...</p>

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Redigera event</h2>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <input
          className="w-full p-2 border rounded"
          name="title"
          placeholder="Titel"
          value={event.title}
          onChange={handleChange}
        />
        <textarea
          className="w-full p-2 border rounded"
          name="description"
          placeholder="Beskrivning"
          value={event.description}
          onChange={handleChange}
        />
        <input
          className="w-full p-2 border rounded"
          name="location"
          placeholder="Plats"
          value={event.location}
          onChange={handleChange}
        />
        <input
          className="w-full p-2 border rounded"
          name="date"
          type="datetime-local"
          value={event.date.slice(0, 16)} // Format ISO-datum för input
          onChange={handleChange}
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Spara ändringar
        </button>
      </form>
    </div>
  )
}
