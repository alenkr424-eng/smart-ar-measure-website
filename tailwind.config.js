/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#070A0F',
        secondary: '#0B1017',
        surface: '#101722',
        elevated: '#141C28',
        primaryText: '#F5F7FA',
        secondaryText: '#9AA6B5',
        mutedText: '#667384',
        accent: '#38BDF8',
        accentBright: '#67E8F9',
        borderDefault: 'rgba(255,255,255,0.09)',
        borderAccent: 'rgba(56,189,248,0.25)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
