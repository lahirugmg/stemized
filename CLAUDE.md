# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Development server**: `npm run dev` (runs on port 3000)
- **Build**: `npm run build` 
- **Production server**: `npm start` (runs on port 3000)
- **Lint**: `npm run lint`
- **Install dependencies**: `npm install`

## Architecture Overview

STEMized is a Next.js App Router application focused on STEM learning through interactive lessons. The architecture is file-based and content-driven:

### Core Structure
- **Next.js 14** with App Router and React 18
- **No backend/database** - all content is local and static
- **File-based routing** with dynamic segments for focus areas and lessons
- **Component-based UI** with reusable interactive elements

### Key Directories
- `app/` - Next.js App Router pages and layout
- `data/` - All content and focus area definitions
- `components/` - Reusable interactive learning components

### Routing Structure
- `/` - Home page with focus area grid
- `/focus/[slug]` - Focus area overview  
- `/focus/[slug]/[index]` - Individual lesson view
- `/focus/[slug]/module/[m]` - Module overview
- `/focus/[slug]/module/[m]/[index]` - Lesson within a module

### Content Architecture

**Focus Areas** are defined in `data/areas/*.js` files, each exporting an object with:
- Basic metadata (slug, title, description, theme, color)
- `lessons[]` array containing all lesson content
- Optional `modules[]` array for grouping lessons

**Data Flow**:
1. `data/index.js` imports all focus areas and provides helper functions
2. Pages import focus areas via `getAreaBySlug()` and `getModule()`
3. Components receive content as props and render interactively

### Interactive Components

The `components/` directory contains specialized learning widgets:
- `FocusCard.jsx` - Area selection cards with theme colors
- `ConceptCheck.jsx`, `Flashcards.jsx` - Assessment components  
- `Timeline.jsx`, `FlowSteps.jsx` - Visual learning aids
- `CardSorter.jsx`, `MultiCategorySorter.jsx` - Drag & drop activities

### Styling Approach
- Global styles in `app/globals.css`
- Inline styles for theme colors and component-specific styling
- CSS classes follow semantic naming (`.card`, `.btn`, `.tag`)

## Development Notes

- Content is king: focus areas drive the entire application structure
- Each focus area is self-contained in its data file
- Components are designed to be reusable across different STEM topics
- No authentication, persistence, or tracking - purely educational content
- Ready for static deployment (Vercel, Netlify, etc.)