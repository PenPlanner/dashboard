import React from 'react'

const MadeInSweden = () => {
  return (
    <div className="fixed top-4 right-4 z-50 group">
      {/* Stamp-like badge */}
      <div className="relative transform rotate-12 transition-all duration-300 hover:rotate-6 hover:scale-110">
        <div className="bg-gradient-to-br from-blue-500 via-yellow-400 to-blue-600 p-0.5 rounded-full shadow-lg">
          <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 border-2 border-dashed border-blue-500/60">
            <div className="flex items-center space-x-2">
              {/* Swedish Flag */}
              <div className="relative w-6 h-4 rounded-sm overflow-hidden shadow-sm">
                <div className="absolute inset-0 bg-blue-500"></div>
                <div className="absolute top-1.5 left-0 right-0 h-1 bg-yellow-400"></div>
                <div className="absolute top-0 bottom-0 left-2 w-1 bg-yellow-400"></div>
              </div>
              
              {/* Text */}
              <div className="text-xs font-bold text-blue-600 leading-none">
                <div className="text-[10px] font-semibold">MADE IN</div>
                <div className="text-xs font-bold">SWEDEN</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stamp effect overlay */}
        <div className="absolute inset-0 rounded-full border-2 border-blue-500/20 border-dashed animate-pulse"></div>
      </div>
      
      {/* Hover tooltip */}
      <div className="absolute top-12 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="bg-gray-900 text-white text-xs px-3 py-2 rounded-lg shadow-lg whitespace-nowrap">
          Stolt utvecklat i Sverige 🇸🇪
          <div className="absolute -top-1 right-6 w-2 h-2 bg-gray-900 transform rotate-45"></div>
        </div>
      </div>
    </div>
  )
}

export default MadeInSweden