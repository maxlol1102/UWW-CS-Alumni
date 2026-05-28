import { useEffect, useRef } from 'react'
import type { AlumniProfile } from '../types/alumni'
import { MentorBadge } from './MentorBadge'

interface AlumniDetailProps {
  alumni: AlumniProfile
  onClose: () => void
}

function LinkedInButton({ url, name }: { url: string; name: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${name}'s LinkedIn profile (opens in new tab)`}
      className="inline-flex items-center gap-2 bg-[#0077B5] text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-[#005e8f] transition-colors"
    >
      <svg aria-hidden="true" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
      View LinkedIn
    </a>
  )
}

export function AlumniDetail({ alumni, onClose }: AlumniDetailProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const fullName = `${alumni.first_name} ${alumni.last_name}`

  useEffect(() => {
    closeButtonRef.current?.focus()

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [onClose])

  const location =
    alumni.location_city && alumni.location_state
      ? `${alumni.location_city}, ${alumni.location_state}`
      : alumni.location_city || alumni.location_state || null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="alumni-detail-name"
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50"
        aria-hidden="true"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-uww-purple text-white px-6 py-5 rounded-t-2xl">
          <div className="flex justify-between items-start gap-3">
            <div>
              <h2 id="alumni-detail-name" className="text-xl font-bold">
                {fullName}
              </h2>
              <p className="text-purple-200 text-sm mt-0.5">
                Class of {alumni.graduation_year}
                {alumni.degree && ` · ${alumni.degree}`}
              </p>
            </div>
            <button
              ref={closeButtonRef}
              onClick={onClose}
              aria-label="Close profile"
              className="flex-shrink-0 text-purple-200 hover:text-white p-1 rounded transition-colors"
            >
              <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          {alumni.willing_to_mentor && (
            <div className="mt-3">
              <MentorBadge />
            </div>
          )}
        </div>

        {/* Body */}
        <div className="px-6 py-5 space-y-4">
          {/* Current role */}
          {(alumni.current_title || alumni.current_company) && (
            <div>
              <p className="text-xs uppercase tracking-wide text-gray-400 font-semibold mb-1">
                Current Role
              </p>
              <p className="text-gray-900 font-medium">
                {[alumni.current_title, alumni.current_company]
                  .filter(Boolean)
                  .join(' at ')}
              </p>
            </div>
          )}

          {/* Details grid */}
          <div className="grid grid-cols-2 gap-4">
            {alumni.industry && (
              <div>
                <p className="text-xs uppercase tracking-wide text-gray-400 font-semibold mb-1">
                  Industry
                </p>
                <p className="text-gray-800 text-sm">{alumni.industry}</p>
              </div>
            )}
            {location && (
              <div>
                <p className="text-xs uppercase tracking-wide text-gray-400 font-semibold mb-1">
                  Location
                </p>
                <p className="text-gray-800 text-sm">{location}</p>
              </div>
            )}
          </div>

          {/* Mentor topics */}
          {alumni.willing_to_mentor && alumni.mentor_topics && alumni.mentor_topics.length > 0 && (
            <div>
              <p className="text-xs uppercase tracking-wide text-gray-400 font-semibold mb-2">
                Available to mentor on
              </p>
              <div className="flex flex-wrap gap-2">
                {alumni.mentor_topics.map(topic => (
                  <span
                    key={topic}
                    className="text-xs bg-purple-50 text-uww-purple border border-purple-200 px-2.5 py-1 rounded-full font-medium"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Bio */}
          {alumni.bio && (
            <div>
              <p className="text-xs uppercase tracking-wide text-gray-400 font-semibold mb-1">
                About
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">{alumni.bio}</p>
            </div>
          )}

          {/* Contact / LinkedIn */}
          <div className="flex flex-wrap gap-3 pt-2 border-t border-gray-100">
            {alumni.linkedin_url && (
              <LinkedInButton url={alumni.linkedin_url} name={fullName} />
            )}
            {alumni.willing_to_mentor && alumni.email && (
              <a
                href={`mailto:${alumni.email}?subject=UWW CS Alumni Network — Mentorship Inquiry`}
                className="inline-flex items-center gap-2 bg-uww-purple text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-uww-purple-dark transition-colors"
              >
                Request Mentorship
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
