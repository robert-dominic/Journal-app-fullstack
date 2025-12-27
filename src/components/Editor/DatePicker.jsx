import { Calendar } from "lucide-react";

export default function DatePicker({ value, onChange }) {
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
    }

    return (
        <div className="flex items-center gap-2 mb-6 pb-6 border-b border-gray-200">
            <Calendar className="text-gray-400" size={20}/>
            <input  
              type="date" 
              value={value}
              onChange={(e) => onChange(e.target.value)}
              className="text-gray-600 border-none outline-none focus:ring-0 cursor-pointer"
            />
            <span className="text-gray-400 text-sm">
                {formatDate(value)}
            </span>
        </div>
    )
}