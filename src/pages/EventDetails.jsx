import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchEventById } from '../API/eventApi'
import { registerUser } from '../API/registrationApi'

export default function EventDetails() {
  const { id } = useParams()
  const [event, setEvent] = useState(null)
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    fetchEventById(id).then(setEvent).catch(console.error)
  }, [id])

  const handleSubmit = async (e) => {
    e.preventDefault()
    await registerUser({ eventId: parseInt(id), fullName, email })
    setSubmitted(true)
  }

  if (!event) return <p>Laddar...</p>

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">{event.title}</h2>
      <p className="mb-2">{event.description}</p>
      <p className="mb-4">{new Date(event.date).toLocaleString()} @ {event.location}</p>

      <h3 className="text-2xl font-semibold mb-2">Registrera dig</h3>
      {submitted ? (
        <p className="text-green-600 font-semibold">Du är nu registrerad!</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
          <input
            className="w-full p-2 border rounded"
            placeholder="Fullständigt namn"
            value={fullName}
            onChange={e => setFullName(e.target.value)}
            required
          />
          <input
            className="w-full p-2 border rounded"
            type="email"
            placeholder="E-post"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <button className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">
            Registrera
          </button>
        </form>
      )}
    </div>
  )
}
