# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

PenPlanner Dashboard is a modern, clean homepage built with React + Vite + Tailwind CSS. It serves as a launchpad for 4 separate projects hosted in subfolders, featuring a minimalistic design inspired by Linear, Apple, and Notion.

## Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## Architecture

### Tech Stack
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS processing
- **ESLint** - Code linting

### Project Structure
```
src/
├── components/
│   ├── ProjectCard.jsx      # Reusable project card component
│   ├── ChangelogModal.jsx   # Version changelog modal
│   ├── Footer.jsx           # Footer with version info
│   └── icons.jsx            # SVG icon components
├── App.jsx                  # Main application component
├── main.jsx                 # React entry point
└── index.css                # Global styles and Tailwind imports
```

### Key Components

- **ProjectCard**: Reusable card component with hover animations and gradient backgrounds
- **ChangelogModal**: Modal displaying version history and release notes
- **Footer**: Fixed position footer with version info and changelog trigger
- **Icons**: Custom SVG icons for each project (Planner, Onboarding, Equiply, Tools)

### Design System
- **Color Palette**: Soft gradients and pastels with glass-morphism effects
- **Typography**: Inter font family with various weights
- **Animations**: Subtle hover effects, fade-in, and slide-up animations
- **Layout**: Responsive 2x2 grid on desktop, stacked on mobile

## Project Routing

Each project card links to specific paths:
- **Planner** → `/planner`
- **Onboarding** → `/onboarding`
- **Equiply** → `/equiply`
- **Toolbox** → `/tools`

## Configuration Files

- `tailwind.config.js`: Tailwind CSS configuration with custom animations
- `postcss.config.js`: PostCSS configuration
- `vite.config.js`: Vite build configuration
- `.claude/settings.local.json`: Claude Code permissions
- `package.json`: Project dependencies and scripts

## Development Notes

- The dashboard uses glass-morphism effects with backdrop blur
- Hover animations are implemented with CSS transforms and transitions
- The design is fully responsive with mobile-first approach
- Version info is displayed in the footer with an interactive changelog
- All routing is handled via plain anchor tags for simplicity