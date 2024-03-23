/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './public/**/*.{html,js}',
      './src/**/*.{html,js}',
    ],
    theme: {
        extend: {
          backgroundImage: {
            "my-showcase" : "url(img/showcase.jpg)",
          },
          animation: {
            blob: "blob 7s infinite",
          },
          keyframes: {
            blob: {
              "0%": {
                transform: "translate(0px, 0px) scale(1)",
              },
              "33%": {
                transform: "translate(30px, -50px) scale(1.1)",
              },
              "66%": {
                transform: "translate(-20px, 20px) scale(0.9)",
              },
              "100%": {
                transform: "tranlate(0px, 0px) scale(1)",
              },
            },
          },
          colors: {
            secondary: '#A020F0',
            primary: {
              100: '#fc6c0d',
              200: '#fc9b5a',
              300: '#f0ac7f',
            },
            title: '#707070',
            small: '#fef7f2'
          },
          fontFamily: {
            body: ['Outfit']
          }
        },
      },
    plugins: [
        require('@tailwindcss/forms'),
    ],
  }
  