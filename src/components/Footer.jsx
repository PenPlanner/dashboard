import React, { useState } from 'react'
import ChangelogModal from './ChangelogModal'

const Footer = () => {
  const [isChangelogOpen, setIsChangelogOpen] = useState(false)

  return (
    <>
      <div className="fixed bottom-6 right-6 flex items-center space-x-3">
        <span className="text-sm text-gray-500 font-medium">v0.3.1</span>
        <button
          onClick={() => setIsChangelogOpen(true)}
          className="w-8 h-8 rounded-full bg-white/70 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/80 transition-all duration-200 hover:scale-110 card-shadow"
          title="View changelog"
        >
          <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </button>
      </div>

      <ChangelogModal 
        isOpen={isChangelogOpen} 
        onClose={() => setIsChangelogOpen(false)} 
      />
    </>
  )
}

export default Footer