interface EmptyStateProps {
  hasActiveFilters: boolean
  onClear: () => void
}

export function EmptyState({ hasActiveFilters, onClear }: EmptyStateProps) {
  return (
    <div className="text-center py-20 px-4">
      <div className="text-5xl mb-4" aria-hidden="true">🎓</div>
      <h3 className="text-xl font-semibold text-gray-700 mb-2">
        {hasActiveFilters ? 'No alumni match your filters' : 'No alumni profiles yet'}
      </h3>
      <p className="text-gray-500 mb-6 max-w-sm mx-auto">
        {hasActiveFilters
          ? 'Try adjusting or clearing your search and filters.'
          : 'Alumni profiles will appear here once they are added.'}
      </p>
      {hasActiveFilters && (
        <button
          onClick={onClear}
          className="bg-uww-purple text-white px-5 py-2 rounded-lg hover:bg-uww-purple-dark transition-colors font-medium"
        >
          Clear all filters
        </button>
      )}
    </div>
  )
}
