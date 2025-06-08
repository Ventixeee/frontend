import axios from 'axios'

// Ändra till din lokala URL för EventService
const BASE_URL = 'https://localhost:7001/api/events'

export const fetchEvents = async () => {
  const response = await axios.get(BASE_URL)
  return response.data
}

export const fetchEventById = async (id) => {
  const response = await axios.get(`${BASE_URL}/${id}`)
  return response.data
}

export const fetchEventCount = async () => {
  const events = await fetchEvents()
  return events.length
}
