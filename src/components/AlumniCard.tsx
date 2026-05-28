import type { AlumniProfile } from '../types/alumni'
import { MentorBadge } from './MentorBadge'

function LinkedInIcon() {
  return (
    <svg
      aria-hidden="true"
      className="w-4 h-4"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

interface AlumniCardProps {
  alumni: AlumniProfile
  onClick: () => void
}

export function AlumniCard({ alumni, onClick }: AlumniCardProps) {
  const fullName = `${alumni.first_name} ${alumni.last_name}`
  const location =
    alumni.location_city && alumni.location_state
      ? `${alumni.location_city}, ${alumni.location_state}`
      : alumni.location_city || alumni.location_state || null

  return (
    <article className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-uww-purple transition-all flex flex-col">
      <button
        onClick={onClick}
        aria-label={`View full profile for ${fullName}`}
        className="text-left p-5 flex-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-uww-purple focus-visible:ring-inset rounded-xl"
      >
        <div className="flex justify-between items-start gap-2 mb-2">
          <h2 className="font-semibold text-uww-purple text-base leading-snug">
            {fullName}
          </h2>
          {alumni.willing_to_mentor && <MentorBadge />}
        </div>

        {alumni.current_title && alumni.current_company && (
          <p className="text-gray-800 text-sm font-medium leading-snug mb-1 line-clamp-2">
            {alumni.current_title} at {alumni.current_company}
          </p>
        )}
        {alumni.current_title && !alumni.current_company && (
          <p className="text-gray-800 text-sm font-medium mb-1">{alumni.current_title}</p>
        )}

        {alumni.industry && (
          <p className="text-gray-500 text-xs mt-1">{alumni.industry}</p>
        )}
        {location && (
          <p className="text-gray-400 text-xs mt-0.5">{location}</p>
        )}
      </button>

      <div className="px-5 pb-4 flex items-center justify-between">
        <span className="text-xs text-gray-400 font-medium">
          Class of {alumni.graduation_year}
        </span>
        {alumni.linkedin_url && (
          <a
            href={alumni.linkedin_url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${fullName}'s LinkedIn profile (opens in new tab)`}
            className="text-uww-purple hover:text-uww-gold transition-colors p-1 rounded"
            onClick={e => e.stopPropagation()}
          >
            <LinkedInIcon />
          </a>
        )}
      </div>
    </article>
  )
}
