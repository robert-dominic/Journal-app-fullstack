import { useState, useRef, useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { BookOpen, UserCircle, LogOut } from "lucide-react";

export default function JournalHeader() {
  const { user, profile, signOut } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="p-2 rounded-lg">
              <img 
                src="/logo.svg" 
                alt="Inkwell's logo" 
                className="w-8 h-8 cursor-pointer"
                onClick={() => window.location.reload()}
              />
            </div>
            <span className="text-xl font-bold text-gray-900">Inkwell</span>
          </div>

          {/* User Status */}
          <div className="relative" ref={dropdownRef}>
            {user ? (
              <div
                className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 px-3 py-2 rounded-lg transition-colors"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <UserCircle className="text-gray-500" size={24} />
                <span className="text-gray-700 hidden sm:inline">
                  {profile?.username || user.email}
                </span>
              </div>
            ) : (
              <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm font-medium rounded-lg">
                Guest Mode
              </span>
            )}

            {/* Dropdown */}
            {dropdownOpen && user && (
              <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50">
                <button
                  onClick={() => {
                    signOut();
                    setDropdownOpen(false);
                  }}
                  className="flex items-center gap-2 w-full px-4 py-2 text-red-600 hover:bg-red-50 text-sm"
                >
                  <LogOut size={16} />
                  Sign out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
