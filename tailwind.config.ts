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
        primary: {
          DEFAULT: '#6307F8',
          dark: '#15002C',
          light: '#F0F0FF',
        },
        background: {
          DEFAULT: '#FFFFFF',
          light: '#F8F8FD',
          purple: '#F0F0FF',
          warm: '#FFF4EE',
          gray: '#F1F1F9',
        },
        text: {
          primary: '#060000',
          secondary: '#70708F',
          tertiary: '#A9A9BC',
        },
      },
      fontFamily: {
        sans: ['Neue Haas Grotesk Display Pro', 'Neue Hass Grotesk Display', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Sanomat', 'ui-serif', 'Georgia', 'serif'],
      },
      fontSize: {
        'display-xl': ['45px', {
          lineHeight: '54px',
          fontWeight: '600',
        }],
        'display-lg': ['42px', {
          lineHeight: '47px',
          fontWeight: '600',
        }],
        'display-md': ['40px', {
          lineHeight: '54px',
          fontWeight: '500',
        }],
        'body-lg': ['20px', {
          lineHeight: '28px',
          fontWeight: '500',
        }],
        'body-md': ['18px', {
          lineHeight: '32px',
          fontWeight: '400',
        }],
        'body-sm': ['14px', {
          lineHeight: '21px',
          fontWeight: '400',
        }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '100': '25rem',
        '128': '32rem',
      },
      maxWidth: {
        'container': '1440px',
        'content': '1200px',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
export default config