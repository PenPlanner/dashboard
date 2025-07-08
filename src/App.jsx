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
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                MarkOS Labs
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Plan. Equip. Deploy.
            </p>
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
              Built with precision and care for productivity
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