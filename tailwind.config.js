const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  // mode: 'jit',
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  options: {
    // Whitelisting some classes to avoid purge
    safelist: [/^is-/, /lazy/, /no-js/, /^swiper-/, /^v-/, /^vs--/, /^vs__/, /^popup/, /^alert/],
    keyframes: true,
    fontFace: true,
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      brand: {
        primary: '#0E5565',
      },
      accent: {
        black: '#374151',
        white: '#FFFFFF'
      },
      black: {
        '100': '#111827'
      },
      gray: {
        '100': '#F3F4F6'
      },
    },
    fontFamily: {
      'display' : ['Merriweather', 'Arial', 'sans-serif'],
      'body' : ['Poppins', 'Arial', 'sans-serif']
    },
    screens: {
      'xs': '475px',
      ...defaultTheme.screens
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
