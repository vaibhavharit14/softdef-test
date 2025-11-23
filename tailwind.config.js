
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        indie: ['Indie Flower', 'cursive'],
      },
       boxShadow: {
        'deep-stack': `
          0px -2.71px 2.21px 0px #0000000C,
          0px -6.52px 5.32px 0px #00000012,
          0px -12.27px 10.02px 0px #00000016,
          0px -21.89px 17.87px 0px #0000001A,
          0px -40.94px 33.42px 0px #0000001F,
          0px -98px 80px 0px #0000002B
        `,
      },
    },
  },
  plugins: [],
}