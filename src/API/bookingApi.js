import axios from 'axios'

const BASE_URL = 'https://localhost:7002/api/registrations'

export const fetchAllBookings = async () => {
  const response = await axios.get(BASE_URL)
  return response.data
}

export const fetchBookingCount = async () => {
  const bookings = await fetchAllBookings()
  return bookings.length
}
