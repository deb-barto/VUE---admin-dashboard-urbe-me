/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,vue}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: 'rgb(59 130 246)',
          dark: 'rgb(37 99 235)',
        },
        text: {
          light: 'rgb(107 114 128);',
          verydark: 'rgb(17 24 39);'
        },
      },
      screens: {
        'xsm': '360px',   
      },
    },
  },
  plugins: [],
}

