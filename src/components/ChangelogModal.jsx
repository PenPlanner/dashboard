import React from 'react'

const ChangelogModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  const changelog = [
    {
      version: "v0.2.0",
      date: "2024-07-08",
      changes: [
        "Complete English translation of all content",
        "Updated brand identity to MarkOS Labs",
        "Revised tagline: Plan. Equip. Deploy.",
        "Renamed Verktygslåda to Toolbox with updated routing",
        "Enhanced project descriptions for international audience",
        "Updated Made in Sweden badge tooltip to English",
        "Improved accessibility with English interface"
      ]
    },
    {
      version: "v0.1.0",
      date: "2024-07-08",
      changes: [
        "Initial release of MarkOS Labs Dashboard",
        "Modern React + Vite + Tailwind CSS implementation",
        "4 project modules with responsive design",
        "2x2 grid layout with smooth hover animations",
        "Made in Sweden badge with authentic stamp design",
        "Glass-morphism effects and elegant styling",
        "Complete deployment infrastructure",
        "Functional routing to all project modules"
      ]
    }
  ]

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl border border-white/20 p-6 max-w-md w-full max-h-[80vh] overflow-y-auto card-shadow animate-slide-up">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Changelog</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Changelog entries */}
        <div className="space-y-6">
          {changelog.map((entry, index) => (
            <div key={entry.version} className={`${index === 0 ? 'pb-4 border-b border-gray-200' : ''}`}>
              <div className="flex items-center justify-between mb-3">
                <span className="font-medium text-gray-900">{entry.version}</span>
                <span className="text-sm text-gray-500">{entry.date}</span>
              </div>
              <ul className="space-y-2">
                {entry.changes.map((change, changeIndex) => (
                  <li key={changeIndex} className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-sm text-gray-700">{change}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ChangelogModal