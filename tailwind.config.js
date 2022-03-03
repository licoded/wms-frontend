module.exports = {
  prefix: 'tw-',
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      lineHeight: {
        11: '2.75rem',
      },
      borderWidth: {
        1: '1px',
      },
      colors: {
        'mgrey-1': '#e5e5e5',
        'mgrey-2': '#b6b7b8',
        'mgrey-3': '#a0a7b1',
        'mgrey-4': '#bcbcbc',
        'mblown-1': '#54232c',
        'mblue-1': '#06c',
      },
      transitionProperty: {
        height: 'height',
        'max-height': 'max-height',
      }
    }
  },
  plugins: [],
};
