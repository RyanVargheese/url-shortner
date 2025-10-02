import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  server: {
    allowedHosts: [
      // Add the DNS name of your AWS Load Balancer here
      'urlloadbalancer-1616105540.ap-south-1.elb.amazonaws.com',
    ]
  },
})
