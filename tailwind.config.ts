import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "ui-primary": {
          DEFAULT: '#1D2939',
          dark: '#F49819',
        },
        "ui-secondary": {
          DEFAULT: '#F49819',
          dark: '#F49819',
        },
        "ui-yellow": {
          DEFAULT: '#FFE16A',
          dark: '#FFE16A',
        },
        "navy-blue": {
          DEFAULT: '#1D2939',
          dark: '#1D2939',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
