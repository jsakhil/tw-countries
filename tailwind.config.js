/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563eb',
          light: '#3b82f6',
          dark: '#1e40af',
        },
        background: '#fff',
        muted: '#6b7280',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        noto: ['"Noto Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}