import { useState, useEffect, useRef } from 'react'
import { supabase } from '../lib/supabase'
import type { AlumniProfile } from '../types/alumni'
import type { FilterState } from './useFilters'

export function useAlumni(filters: FilterState) {
  const [alumni, setAlumni] = useState<AlumniProfile[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current)

    debounceRef.current = setTimeout(async () => {
      setLoading(true)
      setError(null)

      try {
        let query = supabase
          .from('alumni_profiles')
          .select('*')
          .order('graduation_year', { ascending: false })

        if (filters.search.trim()) {
          const term = filters.search.trim()
          query = query.or(
            `first_name.ilike.%${term}%,last_name.ilike.%${term}%,current_company.ilike.%${term}%`
          )
        }
        if (filters.industry) {
          query = query.eq('industry', filters.industry)
        }
        if (filters.graduationYear) {
          query = query.eq('graduation_year', parseInt(filters.graduationYear, 10))
        }
        if (filters.mentorOnly) {
          query = query.eq('willing_to_mentor', true)
        }

        const { data, error: queryError } = await query

        if (queryError) throw queryError
        setAlumni(data ?? [])
      } catch (err) {
        console.error('Failed to fetch alumni:', err)
        setError('Failed to load alumni. Please try again.')
      } finally {
        setLoading(false)
      }
    }, 300)

    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current)
    }
  }, [filters.search, filters.industry, filters.graduationYear, filters.mentorOnly])

  return { alumni, loading, error }
}
