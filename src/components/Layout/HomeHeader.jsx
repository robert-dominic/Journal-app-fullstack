import { BookOpen } from "lucide-react"

export default function Header({ onSignIn }) {
  return (
    <header className="sticky top-0 z-10 border-b border-orange-100 bg-white/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="p-2 bg-orange-500 rounded-lg">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">MyJournal</span>
          </div>

          {/* Sign In button */}
          <button
            onClick={onSignIn}
            className="px-5 py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors active:scale-95"
          >
            Sign In
          </button>
        </div>
      </div>
    </header>
  )
}