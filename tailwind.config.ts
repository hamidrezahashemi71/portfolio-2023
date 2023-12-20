import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)'],
        exo2: ['var(--font-exo2)']
      },
      colors: {
        bgDark: '#030014',
        bg2: '#0300145e',
        border: '#7042f88b',
        border2: '#7042f861',
        icon: '#b49bff',
        shadow: '#2A0E61',
        headerBg: '#03001417'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}
export default config
