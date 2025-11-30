# TerraGraph.io - ICT Solutions Platform

## Overview

TerraGraph.io is a modern corporate website and contact management platform for an ICT solutions company. The application showcases the company's services in AI, mobile development, and design while providing a contact form system for potential clients. Built with a full-stack TypeScript architecture, it features a React frontend with shadcn/ui components and an Express backend with PostgreSQL database storage.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server, configured for fast HMR and optimized production builds
- **Wouter** for lightweight client-side routing instead of React Router
- **TailwindCSS v4** (via `@tailwindcss/vite`) for utility-first styling with custom theme configuration

**UI Component Library**
- **shadcn/ui** component system based on Radix UI primitives
- Extensive component library including forms, dialogs, toasts, navigation, and data display components
- Custom design tokens for dark theme with cyan/teal primary colors and purple accents
- Custom fonts: Inter for body text, Space Grotesk for display text

**State Management & Data Fetching**
- **TanStack Query (React Query)** for server state management and API caching
- **React Hook Form** with Zod validation for form handling
- Custom query client configured with credentials and infinite stale time

**Animation & Interactivity**
- **Framer Motion** for component animations and transitions
- Custom CSS animations via `tw-animate-css`

### Backend Architecture

**Server Framework**
- **Express.js** with TypeScript for API routing and middleware
- HTTP server created using Node's `http` module for potential WebSocket upgrades
- Custom logging middleware tracking request duration and response status
- JSON body parsing with raw body preservation for webhook verification

**Database Layer**
- **PostgreSQL** via Neon serverless database with WebSocket connections
- **Drizzle ORM** for type-safe database queries and schema management
- Connection pooling with `@neondatabase/serverless`
- Schema-driven approach with automatic TypeScript type inference

**Database Schema**
- `users` table: User authentication with username/password (prepared for future auth implementation)
- `contact_messages` table: Stores contact form submissions with title, purpose, content, and timestamps
- UUID primary keys using PostgreSQL's `gen_random_uuid()`
- Zod schemas derived from Drizzle tables for runtime validation

**API Design**
- RESTful endpoint structure under `/api` prefix
- Single implemented endpoint: `POST /api/contact` for form submissions
- Validation using Zod schemas before database operations
- Error handling with appropriate HTTP status codes

### Build & Deployment Strategy

**Development Mode**
- Vite dev server with HMR on port 5000
- Express server in watch mode using `tsx`
- Separate client and server processes

**Production Build**
- Client: Vite builds optimized bundle to `dist/public`
- Server: esbuild bundles server code to single `dist/index.cjs` file
- Selective dependency bundling (allowlist) to reduce cold start times
- Static file serving from built client directory

**Replit Integration**
- Custom Vite plugins for Replit development environment:
  - `@replit/vite-plugin-runtime-error-modal` for error overlay
  - `@replit/vite-plugin-cartographer` for code navigation
  - `@replit/vite-plugin-dev-banner` for development indicator
  - Custom `metaImagesPlugin` for dynamic OpenGraph image URL generation

### External Dependencies

**Email Service**
- **Nodemailer** SMTP integration for contact form notifications
- Configured via environment variables (`SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`)
- Email notifications sent to `manager@teragraph.io` with formatted HTML content
- Graceful degradation if SMTP credentials not configured

**Database Service**
- **Neon Serverless PostgreSQL** as the primary database
- Connection string provided via `DATABASE_URL` environment variable
- WebSocket-based connection for serverless compatibility
- Database migrations managed through Drizzle Kit

**UI Component Dependencies**
- **Radix UI** primitives for accessible, unstyled component building blocks
- **Lucide React** for consistent icon system
- **cmdk** for command menu functionality
- **vaul** for drawer components
- **embla-carousel-react** for carousel functionality

**Development Tools**
- **TypeScript** for type safety across the stack
- **ESLint** and **Prettier** configurations (implicit via tooling)
- **Drizzle Kit** for database schema migrations and introspection
- Path aliases configured for clean imports (`@/`, `@shared/`, `@assets/`)

**Session Management** (Prepared but not implemented)
- `express-session` with `connect-pg-simple` for PostgreSQL-backed sessions
- `memorystore` as fallback session store
- Infrastructure ready for authentication implementation

**Internationalization**
- Multi-language support scaffolded in frontend (English/Korean)
- Translation object structure in place but not fully implemented