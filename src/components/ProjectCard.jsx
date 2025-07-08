import React from 'react'

const ProjectCard = ({ 
  name, 
  description, 
  path, 
  icon: Icon, 
  gradient = "from-blue-500 to-purple-600" 
}) => {
  return (
    <a 
      href={path}
      className="group relative flex flex-col h-full p-6 rounded-2xl bg-white border-2 border-gray-100 hover:border-gray-300 transition-all duration-300 hover:shadow-2xl hover:scale-105"
    >
      {/* Icon */}
      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${gradient} mb-4 text-white shadow-lg group-hover:shadow-xl transition-all duration-300`}>
        <Icon className="w-8 h-8" />
      </div>
      
      {/* Text Content */}
      <div className="flex-1 space-y-3">
        <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors duration-200">
          {name}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          {description}
        </p>
      </div>
      
      {/* Arrow indicator */}
      <div className="absolute top-6 right-6 w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-all duration-300 group-hover:translate-x-1">
        <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </a>
  )
}

export default ProjectCard