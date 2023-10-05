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
        'large': '16px',
        'normal': '14px',
        'small': '12px',
      },
      fontWeight: {
        'semi-bold': '600',
        'medium': '500',
        'regular': '400',
      },
      colors: {
        'magenta': 'rgba(188, 0, 109, 1)',
        'stroke': 'rgba(208, 213, 221, 1)',
        'grey': 'rgba(117, 117, 117, 1)',
        'green': 'rgba(33, 150, 83, 1)',
        'yellow': 'rgba(242, 201, 76, 1)',
      },
      backgroundColor: {
        'purple': 'rgba(51, 7, 79, 1)',
        'light-purple': 'rgba(235, 230, 237, 0.1)',
        'yellow': 'rgba(242, 201, 76, 1)',
        'light-yellow': 'rgba(242, 201, 76, 0.1)',
        'blue': 'rgba(47, 128, 237, 1)',
        'red': 'rgba(235, 87, 87, 1)',
        'light-green': 'rgba(232, 245, 233, 1)',
        'grey': 'rgba(117, 117, 117, 1)'
      },
      screens: {
        'xs': '320px',
      }
    },
  },
  plugins: [],
}
export default config
