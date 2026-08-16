/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        bg: '#11151D',
        surface: '#1A2029',
        'surface-2': '#232B37',
        'border-subtle': '#2C3543',
        accent: '#5B8DEF',
        'accent-2': '#1FC2AC',
        'text-primary': '#E9ECF2',
        'text-secondary': '#AAB2C0',
        'text-muted': '#7B8494',
      },
      fontFamily: {
        display: ['"IBM Plex Sans"', 'sans-serif'],
        body: ['"IBM Plex Sans"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
};