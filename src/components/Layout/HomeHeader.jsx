import { BookOpen } from "lucide-react"

export default function Header({ onSignIn }) {
  return (
    <header className="sticky top-0 z-10 border-b border-orange-100 bg-white/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="p-2 rounded-lg">
              <img 
                src="/logo.svg" 
                alt="Inkwell's Logo" 
                className="w-8 w-8 cursor-pointer"
                onClick={() => window.location.reload()}
              />
            </div>
            <span className="text-xl font-bold text-gray-900">Inkwell</span>
          </div>

          {/* Sign In button */}
          <button
            onClick={onSignIn}
            className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors active:scale-95"
          >
            Sign In
          </button>
        </div>
      </div>
    </header>
  )
}