import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        void: '#020811',
        deep: '#060d1a',
        surface: '#0a1628',
        raised: '#0f1f35',
        edge: '#172540',
        ink: '#eef2ff',
        muted: '#8baad4',
        faded: '#4a6080',
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 24px 80px rgba(59, 130, 246, 0.18)',
      },
    },
  },
  plugins: [],
} satisfies Config;
