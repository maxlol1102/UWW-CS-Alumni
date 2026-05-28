function SkeletonCard() {
  return (
    <div
      className="bg-white rounded-xl border border-gray-200 p-5 animate-pulse"
      aria-hidden="true"
    >
      <div className="flex justify-between mb-3">
        <div className="h-5 bg-gray-200 rounded w-2/3" />
        <div className="h-5 bg-gray-100 rounded w-1/5" />
      </div>
      <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
      <div className="h-3 bg-gray-100 rounded w-1/2 mb-4" />
      <div className="flex justify-between">
        <div className="h-3 bg-gray-100 rounded w-1/4" />
        <div className="h-3 bg-gray-100 rounded w-1/6" />
      </div>
    </div>
  )
}

export function LoadingState() {
  return (
    <div
      role="status"
      aria-label="Loading alumni profiles"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
    >
      {Array.from({ length: 8 }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  )
}
