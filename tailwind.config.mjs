/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Fraunces', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        ink: {
          DEFAULT: '#faf8f2',
          mid: '#f0ece3',
          raised: '#ffffff',
          high: '#e8e4db',
        },
        gold: {
          DEFAULT: '#c9a84c',
          light: '#e2c06a',
          soft: '#f0d98a',
        },
        teal: '#2eb8a0',
        violet: '#7b7fc4',
        emerald: '#2a9d72',
        'text-bright': '#0d1117',
        'text-body': '#3d4a5a',
        'text-muted': '#8896a7',
      },
    },
  },
  plugins: [],
};
