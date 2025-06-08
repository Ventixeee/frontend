import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function CreateEvent() {
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [location, setLocation] = useState('')
  const [date, setDate] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.post('https://localhost:7001/api/events', {
      title,
      description,
      location,
      date
    })
    navigate('/events')
  }

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Skapa nytt event</h2>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <input
          className="w-full p-2 border rounded"
          placeholder="Titel"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          className="w-full p-2 border rounded"
          placeholder="Beskrivning"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          className="w-full p-2 border rounded"
          placeholder="Plats"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          className="w-full p-2 border rounded"
          type="datetime-local"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <button type="submit" className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
          Skapa event
        </button>
      </form>
    </div>
  )
}
