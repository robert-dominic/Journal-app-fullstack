import { Calendar } from "lucide-react";

export default function DatePicker({ value, onChange }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: 'long',
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="mb-6 pb-6 border-b border-gray-200">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-3">
        
        {/* Icon */}
        <div className="flex items-center gap-2">
          <Calendar className="text-gray-400" size={18} />
          <span className="text-sm text-gray-500 sm:hidden">
            Select date
          </span>
        </div>

        {/* Date input */}
        <input
          type="date"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="
            w-full sm:w-auto rounded-md border border-gray-300
            px-3 py-2 text-gray-700 outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
        />

        {/* Formatted date */}
        <span className="text-gray-400 text-sm sm:ml-auto">
          {formatDate(value)}
        </span>

      </div>
    </div>
  );
}
