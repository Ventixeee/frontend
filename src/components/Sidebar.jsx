import { Link } from 'react-router-dom'

const navItems = [
  { name: 'Dashboard', path: '/' },
  { name: 'Bookings', path: '/bookings' },
  { name: 'Events', path: '/events' },
   { name: 'Skapa event', path: '/events/create' }
]

export default function Sidebar() {
  return (
    <div className="w-64 bg-white shadow-md h-screen p-6">
      <h1 className="text-2xl font-bold text-purple-700 mb-10">Ventixe</h1>
      <nav className="flex flex-col space-y-4">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className="text-gray-700 hover:text-purple-700 font-medium"
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
    

  )
}
