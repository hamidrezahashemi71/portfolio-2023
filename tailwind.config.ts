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
        border: '#7042f88b',
        icon: '#b49bff'
      }
    },
  },
  plugins: [],
}
export default config
