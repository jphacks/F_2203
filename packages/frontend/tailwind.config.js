/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#0162B9',

          secondary: '#66e1b8',

          accent: '#001B36',

          neutral: '#3D4451',

          'base-100': '#FFFFFF',

          info: '#3ABFF8',

          success: '#36D399',

          warning: '#FBBD23',

          error: '#F87272',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
}
