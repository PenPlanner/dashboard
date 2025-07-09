import React from 'react'
import ProjectCard from './components/ProjectCard'
import Footer from './components/Footer'
import MadeInSweden from './components/MadeInSweden'
import { PlannerIcon, OnboardingIcon, EquiplyIcon, ToolsIcon } from './components/icons'

const projects = [
  {
    name: "PenPlanner",
    description: "Organize your tasks and schedule with intelligent planning tools",
    path: "https://penplanner.se/PenPlanner",
    icon: PlannerIcon,
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    name: "Onboarding",
    description: "Streamlined user experience and guided setup process",
    path: "https://penplanner.se/Onboarding", 
    icon: OnboardingIcon,
    gradient: "from-purple-500 to-pink-500"
  },
  {
    name: "Equiply",
    description: "Online ordering platform to easily equip technicians with tools",
    path: "https://penplanner.se/Equiply",
    icon: EquiplyIcon,
    gradient: "from-emerald-500 to-cyan-500"
  },
  {
    name: "Toolbox",
    description: "Collection of utilities and productivity tools for enhanced workflow",
    path: "https://penplanner.se/Toolbox",
    icon: ToolsIcon,
    gradient: "from-orange-500 to-red-500"
  }
]

function App() {
  return (
    <div className="min-h-screen">
      {/* Main content */}
      <div>
        <div className="container mx-auto px-6 py-8">
          {/* Header */}
          <div className="text-center mb-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 cursor-pointer transition-all duration-300 hover:scale-105">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-purple-600 hover:to-blue-600 transition-all duration-500">
                PenPlanner Labs
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Plan. Equip. Deploy.
            </p>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto mt-2">
              A seamless flow from planning to execution, built for the field.
            </p>
            <div className="mt-4 flex justify-center">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-blue-500/80 to-purple-500/80 text-white shadow-md backdrop-blur-sm border border-white/10 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg hover:from-blue-600/90 hover:to-purple-600/90 hover:border-white/20">
                <span className="mr-2 transition-transform duration-300 hover:rotate-12">⚡</span>
                Powered by MarkOS.
              </span>
            </div>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {projects.map((project, index) => (
              <div 
                key={project.name}
                className="animate-slide-up h-full"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
          
          {/* Subtle branding */}
          <div className="text-center mt-16 opacity-60">
            <p className="text-sm text-gray-500">
              Engineered for precision. Designed for productivity.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
      
      {/* Made in Sweden Badge */}
      <MadeInSweden />
    </div>
  )
}

export default App