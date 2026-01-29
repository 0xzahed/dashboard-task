# Dashboard Application

A modern React dashboard application for managing tech repair store operations including call logs, appointments, and analytics.

## Features

- **Dashboard Overview** - Real-time statistics, charts, and activity feeds
- **Call Logs** - Search and filter call history with detailed transcripts
- **Appointments** - Manage booking slots with AI-powered scheduling
- **Settings** - Profile and store configuration management

## Tech Stack

- React 19 + Vite
- React Router DOM for navigation
- Tailwind CSS for styling
- Framer Motion for animations
- Lucide React for icons
- Recharts for data visualization

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd dashboard_task
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open your browser and navigate to:

```
http://localhost:5173
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/       # Reusable components (Sidebar)
├── layouts/         # Layout components (MainLayout)
├── pages/           # Page components (Dashboard, CallLogs, Appointments, Settings)
├── Router/          # Router configuration
└── assets/          # Static assets
```

## License

MIT
