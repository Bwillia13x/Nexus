/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './content/**/*.{md,mdx,json}',
  ],
  theme: {
    extend: {
      colors: {
        ink: 'var(--ink)',
        muted: 'var(--muted)',
        eggshell: 'var(--eggshell)',
        'eggshell-2': 'var(--eggshell-2)',
        glass: 'var(--glass)',
        'glass-2': 'var(--glass-2)',
        'glass-border': 'var(--glass-border)',
        primary: '#667eea',
        secondary: '#764ba2',
      },
      borderRadius: {
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
};
