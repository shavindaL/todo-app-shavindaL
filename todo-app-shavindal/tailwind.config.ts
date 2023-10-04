import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      fontSize: {
        'h3': '24px',
        'h4': '20px',
        'large': '186px',
        'normal': '14px',
        'small': '12px',
      },
      fontWeight: {
        'semi-bold': '600',
        'medium': '500',
        'regular': '400',
      }, backgroundColor: {
        'purple-400': 'rgba(51, 7, 79, 1)',
        'purple-500': 'rgba(235, 230, 237, 0.1)',
        'yellow': 'rgba(242, 201, 76, 1)',
        'light-yellow': 'rgba(242, 201, 76, 0.1)',
        'blue': 'rgba(47, 128, 237, 1)',
        'red': 'rgba(235, 87, 87, 1)',
        'magenta': 'rgba(188, 0, 109, 1)',
        'green': 'rgba(33, 150, 83, 1)',
        'light-green': 'rgba(232, 245, 233, 1)',
        'grey': 'rgba(117, 117, 117, 1)'
      }
    },
  },
  plugins: [],
}
export default config
