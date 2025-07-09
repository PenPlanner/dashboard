import React, { useState } from 'react'
import ChangelogModal from './ChangelogModal'

const Footer = () => {
  const [isChangelogOpen, setIsChangelogOpen] = useState(false)

  return (
    <>
      <div className="fixed bottom-6 right-6 flex items-center space-x-3">
        <span className="text-sm text-gray-500 font-medium">v1.0.2</span>
        <button
          onClick={() => setIsChangelogOpen(true)}
          className="w-8 h-8 rounded-full bg-white/70 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/80 transition-all duration-200 hover:scale-110 card-shadow"
          title="View changelog"
        >
          <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
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