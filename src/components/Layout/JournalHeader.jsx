import { useAuth } from "../../contexts/AuthContext";
import { BookOpen, UserCircle } from "lucide-react";

export default function JournalHeader({ onSignUp }) {

  const { user } = useAuth();

  return (
    <>
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="p-2 bg-orange-500 rounded-lg">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
                <span className="text-xl font-bold text-gray-900">MyJournal</span>
            </div>

            {/* User Status */}
            <div className="flex items-center gap-4">
              {user ? (
                <div className="flex items-center gap-2 text-sm cursor-pointer hover:bg-gray-50 px-3 py-2 rounded-lg transition-colors">
                  <UserCircle className="text-gray-500" size={24} />
                  <span className="text-gray-700 hidden sm:inline">{user.email}</span>
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm font-medium rounded-lg">
                    Guest Mode
                  </span>
                  <button
                    onClick={onSignUp}
                    className="px-4 py-2 bg-orange-600 text-white font-medium rounded-lg hover:bg-orange-700 transition-colors"
                  >
                    Sign Up
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  )
}