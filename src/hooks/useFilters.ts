import { useState, useCallback } from 'react'

export interface FilterState {
  search: string
  industry: string
  graduationYear: string
  mentorOnly: boolean
}

const INITIAL_FILTERS: FilterState = {
  search: '',
  industry: '',
  graduationYear: '',
  mentorOnly: false,
}

export function useFilters() {
  const [filters, setFilters] = useState<FilterState>(INITIAL_FILTERS)

  const setSearch = useCallback(
    (search: string) => setFilters(f => ({ ...f, search })),
    []
  )
  const setIndustry = useCallback(
    (industry: string) => setFilters(f => ({ ...f, industry })),
    []
  )
  const setGraduationYear = useCallback(
    (graduationYear: string) => setFilters(f => ({ ...f, graduationYear })),
    []
  )
  const setMentorOnly = useCallback(
    (mentorOnly: boolean) => setFilters(f => ({ ...f, mentorOnly })),
    []
  )
  const clearFilters = useCallback(() => setFilters(INITIAL_FILTERS), [])

  const hasActiveFilters =
    filters.search !== '' ||
    filters.industry !== '' ||
    filters.graduationYear !== '' ||
    filters.mentorOnly

  return {
    filters,
    setSearch,
    setIndustry,
    setGraduationYear,
    setMentorOnly,
    clearFilters,
    hasActiveFilters,
  }
}
