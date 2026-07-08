import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Base path matches the GitHub repo name for GitHub Pages project sites.
// If you rename the repo, update this to match: '/<your-repo-name>/'
export default defineConfig({
  base: '/harsh-nagar-portfolio/',
  plugins: [react()],
})
