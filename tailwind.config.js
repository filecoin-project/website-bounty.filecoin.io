module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: {
        black: '#2d2926',
        brand: {
          '600': '#1d28e0',
          '500': '#2935ff',
          '400': '#616aff',
          '200': '#babeff',
        },
        'brand-gray': {
          '500': '#666669',
          '600': '#4D4D4F',
          '700': '#343435',
        },
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/ui')],
  purge: ['./pages/**/*.jsx', './components/**/*.jsx'],
};
