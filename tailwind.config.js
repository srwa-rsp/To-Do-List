module.exports = {
  purge: [   
  './public/index.html',
  './public/script.js',
 ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#3d47af',
      'secondary': '#0a155a',
      'thirdary': '#d103fc'}),
      textColor: theme => theme('colors'),
      textColor: {
        'primary': '#d7d7d7',
        'secondary': '#b6bfda',
        'danger': '#e3342f',
      },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
