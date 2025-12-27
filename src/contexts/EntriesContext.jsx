import { createContext, useContext, useState, useEffect } from 'react'
import { useAuth } from './AuthContext'
import { supabase } from '../lib/supabase'
import { useLocalStorage } from '../hooks/useLocalStorage'

const EntriesContext = createContext({})

export const useEntries = () => {
  const context = useContext(EntriesContext)
  if (!context) {
    throw new Error('useEntries must be used within EntriesProvider')
  }
  return context
}

export const EntriesProvider = ({ children }) => {
  const { user } = useAuth()
  const [entries, setEntries] = useState([])
  const [loading, setLoading] = useState(true)
  const [guestEntries, setGuestEntries] = useLocalStorage('guest_entries', [])

  // Fetch entries when user logs in
  useEffect(() => {
    if (user) {
      fetchEntries()
    } else {
      // Load guest entries from localStorage
      setEntries(guestEntries)
      setLoading(false)
    }
  }, [user])

  // Fetch entries from Supabase (for authenticated users)
  const fetchEntries = async () => {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('entries')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) throw error
      setEntries(data || [])
    } catch (error) {
      console.error('Error fetching entries:', error)
    } finally {
      setLoading(false)
    }
  }

  // Create new entry
  const createEntry = async (entryData) => {
    try {
      if (user) {
        // Save to Supabase
        const { data, error } = await supabase
          .from('entries')
          .insert([{ ...entryData, user_id: user.id }])
          .select()
          .single()

        if (error) throw error
        setEntries([data, ...entries])
        return data
      } else {
        // Save to localStorage
        const newEntry = {
          id: Date.now().toString(),
          ...entryData,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        }
        const updatedEntries = [newEntry, ...guestEntries]
        setGuestEntries(updatedEntries)
        setEntries(updatedEntries)
        return newEntry
      }
    } catch (error) {
      console.error('Error creating entry:', error)
      throw error
    }
  }

  const value = {
    entries,
    loading,
    createEntry,
    refetch: fetchEntries,
  }

  return (
    <EntriesContext.Provider value={value}>
      {children}
    </EntriesContext.Provider>
  )
}