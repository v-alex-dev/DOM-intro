/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Roboto', 'sans'],
      },
      textColor: {
        'default': '#FFFAFA',
      },
  },
  plugins: [],
}

}