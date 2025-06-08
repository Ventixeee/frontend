import axios from 'axios'

// Ändra till din RegistrationService URL
const REG_URL = 'https://localhost:7002/api/registrations'

export const registerUser = async (registration) => {
  const response = await axios.post(REG_URL, registration)
  return response.data
}
