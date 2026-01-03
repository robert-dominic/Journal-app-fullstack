import { createContext, useContext, useState } from 'react'
import InfoModal from '../components/UI/InfoModal'
import DangerModal from '../components/UI/DangerModal'

const ModalContext = createContext({})

export const useModal = () => {
    const context = useContext(ModalContext)
    if (!context) {
        throw new Error('useModal must be used within ModalProvider')
    }
    return context
}

export const ModalProvider = ({ children }) => {
  // Info modal for alerts / messages
  const [infoModal, setInfoModal] = useState({
    isOpen: false,
    title: '',
    message: '',
    onConfirm: () => {},
  })

  // Danger modal for deletes
  const [dangerModal, setDangerModal] = useState({
    isOpen: false,
    title: '',
    message: '',
    onConfirm: () => {},
  })

  // Show info modal
  const showInfo = ({ title, message, onConfirm }) => {
    setInfoModal({
      isOpen: true,
      title,
      message,
      onConfirm,
    })
  }

  // Show danger modal
  const showDanger = ({ title, message, onConfirm }) => {
    setDangerModal({
      isOpen: true,
      title,
      message,
      onConfirm,
    })
  }

  // Close modals
  const closeInfo = () => {
    setInfoModal({ ...infoModal, isOpen: false })
  }

  const closeDanger = () => {
    setDangerModal({ ...dangerModal, isOpen: false })
  }

  const value = {
    showInfo,
    showDanger
  }

  return (
    <ModalContext.Provider value={value}>
      {children}

      {/* Render modals globally */}
      <InfoModal
        isOpen={infoModal.isOpen}
        onClose={closeInfo}
        onConfirm={infoModal.onConfirm}
        title={infoModal.title}
        message={infoModal.message}
      />

      <DangerModal
        isOpen={dangerModal.isOpen}
        onClose={closeDanger}
        onConfirm={dangerModal.onConfirm}
        title={dangerModal.title}
        message={dangerModal.message}
      />
    </ModalContext.Provider>
  )
}
