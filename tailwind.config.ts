import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#06031C',
          deep: '#06031C',
        },
        slate: {
          DEFAULT: '#3D4960',
        },
        primary: {
          DEFAULT: '#4A84C6',
          blue: '#4A84C6',
        },
        muted: {
          DEFAULT: '#877984',
          lavender: '#877984',
        },
        light: {
          blue: '#A2B9D2',
          bg: '#E0E3E8',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
export default config


