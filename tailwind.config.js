module.exports = {
  purge: [   
  './public/index.html',
  './public/script.js',
 ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#ffffff',
      'secondary': '#b57ce3',
      'thirdary': '#f3f4f4'}),
      textColor: theme => ({
        ...theme('colors'),
        'primary': '#5a5a5a',
        'secondary': '#6d6d6d',
        'danger': '#e3342f',
      }),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
