/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './content/**/*.{md,mdx,json}',
  ],
  theme: {
    extend: {
      maxWidth: {
        container: '1120px',
      },
      borderRadius: {
        lg: '20px',
        DEFAULT: '14px',
        sm: '10px',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        elev: '0 12px 32px rgba(0,0,0,.08)',
        'elev-lg': '0 30px 70px rgba(0,0,0,.10)',
      },
      colors: {
        ink: 'var(--ink)',
        muted: 'var(--muted)',
        eggshell: 'var(--eggshell)',
        'eggshell-2': 'var(--eggshell-2)',
        glass: 'var(--glass)',
        'glass-2': 'var(--glass-2)',
        'glass-border': 'var(--glass-border)',
        brand: {
          500: '#6f69f6',
          600: '#5c55f1',
        },
        primary: '#667eea',
        secondary: '#764ba2',
      },
    },
  },
  plugins: [],
};
