import { X } from 'lucide-react'

export default function InfoModal({ 
  isOpen, 
  onClose, 
  onConfirm,
  title,
  message,
  confirmText = "OK"
}) {
  if (!isOpen) return null

  const handleConfirm = () => {
    onConfirm && onConfirm()
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-30"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-md p-6">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X size={20} />
        </button>

        {/* Content */}
        <div className="mb-6 text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-2">{title}</h2>
          <p className="text-gray-700">{message}</p>
        </div>

        {/* Action */}
        <div className="flex justify-center">
          <button
            onClick={handleConfirm}
            className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-medium"
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  )
}
