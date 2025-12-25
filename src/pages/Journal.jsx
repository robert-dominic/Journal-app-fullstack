import { useAuth } from '../contexts/AuthContext'

export default function Journal() {
  const { user } = useAuth()

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Journal Page</h1>
        <p className="text-gray-600">
          {user ? `Logged in as: ${user.email}` : 'Guest Mode'}
        </p>
        <p className="mt-4 text-gray-500">
          We'll build the actual journal interface tomorrow! 🚀
        </p>
      </div>
    </div>
  )
}