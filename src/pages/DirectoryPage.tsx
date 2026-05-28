import { useState } from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { SearchBar } from '../components/SearchBar'
import { FilterPanel } from '../components/FilterPanel'
import { AlumniCard } from '../components/AlumniCard'
import { AlumniDetail } from '../components/AlumniDetail'
import { LoadingState } from '../components/LoadingState'
import { EmptyState } from '../components/EmptyState'
import { useFilters } from '../hooks/useFilters'
import { useAlumni } from '../hooks/useAlumni'
import type { AlumniProfile } from '../types/alumni'

export function DirectoryPage() {
  const { filters, setSearch, setIndustry, setGraduationYear, setMentorOnly, clearFilters, hasActiveFilters } =
    useFilters()
  const { alumni, loading, error } = useAlumni(filters)
  const [selectedAlumni, setSelectedAlumni] = useState<AlumniProfile | null>(null)

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero */}
        <section className="mb-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-uww-purple mb-3">
            Where Warhawks Work
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
            Explore the careers of UW–Whitewater Computer Science graduates from 2013 to present.
            Find mentors, discover industries, and see where the CS degree takes you.
          </p>
        </section>

        {/* Search */}
        <div className="mb-4">
          <SearchBar value={filters.search} onChange={setSearch} />
        </div>

        {/* Filters */}
        <div className="mb-6">
          <FilterPanel
            filters={filters}
            onIndustryChange={setIndustry}
            onYearChange={setGraduationYear}
            onMentorChange={setMentorOnly}
            onClear={clearFilters}
            hasActiveFilters={hasActiveFilters}
          />
        </div>

        {/* Result count */}
        {!loading && !error && alumni.length > 0 && (
          <p className="text-sm text-gray-500 mb-4">
            Showing{' '}
            <span className="font-semibold text-gray-700">{alumni.length}</span>{' '}
            {alumni.length === 1 ? 'alumnus' : 'alumni'}
            {hasActiveFilters ? ' matching your filters' : ''}
          </p>
        )}

        {/* Content */}
        {loading ? (
          <LoadingState />
        ) : error ? (
          <div
            role="alert"
            className="text-center py-12 text-red-600 bg-red-50 rounded-xl border border-red-200 px-6"
          >
            <p className="font-semibold mb-1">Something went wrong</p>
            <p className="text-sm text-red-500">{error}</p>
          </div>
        ) : alumni.length === 0 ? (
          <EmptyState hasActiveFilters={hasActiveFilters} onClear={clearFilters} />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {alumni.map(a => (
              <AlumniCard key={a.id} alumni={a} onClick={() => setSelectedAlumni(a)} />
            ))}
          </div>
        )}
      </main>

      <Footer />

      {selectedAlumni && (
        <AlumniDetail alumni={selectedAlumni} onClose={() => setSelectedAlumni(null)} />
      )}
    </div>
  )
}
