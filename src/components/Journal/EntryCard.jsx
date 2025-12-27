export default function EntryCard({ entry, onClick }) {
    const formatDate = (dateString) => {
        const date = new Date(dateString)
        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        })
    }

    const truncateContent = (text, maxLength = 150) => {
        if (text.length <= maxLength) return text
        return text.slice(0, maxLength) + '...'
    }

    return (
        <div
          onClick={onClick}
          className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer border border-gray-100 hover:border-orange-200"
        >
          <div className="flex items-start justify-btween mb-3">
            <h3 className="text-xl font-bold text-gray-900 line-clamp-2">
              {entry.tiltle}
            </h3>
          </div>

          <p className="text-sm text-gray-500 mb-3">
            {formatDate(entry.created_at)}
          </p>

          <p className="text-gray-600 line-clamp-3">
            {truncateContent(entry.content)}
          </p>
        </div>
    )
}