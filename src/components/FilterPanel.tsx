import { INDUSTRIES, GRADUATION_YEARS } from '../constants/industries'
import type { FilterState } from '../hooks/useFilters'

interface FilterPanelProps {
  filters: FilterState
  onIndustryChange: (v: string) => void
  onYearChange: (v: string) => void
  onMentorChange: (v: boolean) => void
  onClear: () => void
  hasActiveFilters: boolean
}

export function FilterPanel({
  filters,
  onIndustryChange,
  onYearChange,
  onMentorChange,
  onClear,
  hasActiveFilters,
}: FilterPanelProps) {
  return (
    <div className="flex flex-wrap gap-3 items-center">
      {/* Industry */}
      <div>
        <label htmlFor="filter-industry" className="sr-only">
          Filter by industry
        </label>
        <select
          id="filter-industry"
          value={filters.industry}
          onChange={e => onIndustryChange(e.target.value)}
          className="text-sm border border-gray-300 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-uww-purple text-gray-700"
        >
          <option value="">All industries</option>
          {INDUSTRIES.map(ind => (
            <option key={ind} value={ind}>
              {ind}
            </option>
          ))}
        </select>
      </div>

      {/* Graduation Year */}
      <div>
        <label htmlFor="filter-year" className="sr-only">
          Filter by graduation year
        </label>
        <select
          id="filter-year"
          value={filters.graduationYear}
          onChange={e => onYearChange(e.target.value)}
          className="text-sm border border-gray-300 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-uww-purple text-gray-700"
        >
          <option value="">All years</option>
          {GRADUATION_YEARS.map(yr => (
            <option key={yr} value={yr}>
              Class of {yr}
            </option>
          ))}
        </select>
      </div>

      {/* Mentor toggle */}
      <label className="flex items-center gap-2 cursor-pointer select-none text-sm text-gray-700">
        <input
          type="checkbox"
          checked={filters.mentorOnly}
          onChange={e => onMentorChange(e.target.checked)}
          className="w-4 h-4 accent-uww-purple rounded"
        />
        Open to mentor
      </label>

      {/* Clear */}
      {hasActiveFilters && (
        <button
          onClick={onClear}
          className="text-sm text-uww-purple hover:text-uww-purple-dark underline underline-offset-2 font-medium"
        >
          Clear filters
        </button>
      )}
    </div>
  )
}
