# Pokemon Dash

A React-based web application that displays Pokémon data fetched from the public [PokeAPI](https://pokeapi.co/). Users can browse, search, and sort Pokémon, and view basic information such as type, height, and weight.

## Tech Stack

- **React 19** – Component-based UI building
- **Vite** – Fast development server and bundler
- **React Router** – Client-side routing
- **PokeAPI** – REST API for Pokémon data

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview

```bash
npm run preview
```

## Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_URL=https://pokeapi.co/api/v2/pokemon
```

## Deployment to Vercel

### Prerequisites

1. ✅ Build command: `npm run build` (already configured in `package.json`)
2. ✅ Output directory: `dist` (Vite default)
3. ✅ Vercel configuration: `vercel.json` (already created)

### Steps

1. **Push your code to GitHub/GitLab/Bitbucket**

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your Git repository

3. **Configure Environment Variables:**
   - In Vercel project settings, go to "Environment Variables"
   - Add: `VITE_API_URL` = `https://pokeapi.co/api/v2/pokemon`

4. **Deploy:**
   - Vercel will automatically detect it's a Vite project
   - Click "Deploy"

### Important Notes

- The `vercel.json` file ensures that all routes are handled by React Router (SPA routing)
- Environment variables must be prefixed with `VITE_` to be accessible in the client-side code
- The build output will be in the `dist` directory

## Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/         # Route-level components
├── App.jsx        # Main app component with routing
└── main.jsx       # Entry point
```
