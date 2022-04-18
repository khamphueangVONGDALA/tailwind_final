module.exports = {
  content: ["./dist/index.html"],
  theme: {
    screens: {
      s: "240px",
      ss: "400px",
      sm: "600px",
      md: "768px",
      lg: "1080px",
      xl: "1440px",
    },
    colors: {
      blue: "#1fb6ff",
      purple: "#000330",
      pink: "#e83f82",
      orange: "#db4437",
      green: "#02bb8c",
      yellow: "#ffc82c",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
      white: "#FFFFFF",
      red: "#ff0000",
      gray: "#858585",
      grayborder: "#dee2e6",
      grey: "#29303b",
      gray_p: "#e4e4e4",
      gp: "0 2px 8px 0 rgb(0 0 0 / 15%)",
      g: "#6c757d",
      pinkred:'#da1a66'
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
        120:'120px'
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
    display: ["group-hover"],
    spacing: {
      1: "8px",
      2: "12px",
      3: "16px",
      4: "24px",
      5: "32px",
      6: "48px",
      230: "250px",
      60: "200px",
      70:"230px",
      150: "362px",
      800:'800px',
      650:'650px',
      400:'400px',
      1000:'1000px',
      390:'480px'
    },
    fontSize: {
      xs: ".7rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
    },
    maxWidth: {
      400:'400px',
      120:'120px',
      360: "360px",
      480: "480px",
      220: "220px",
      540: "540px",
      720: "720px",
      960: "960px",
      1040: "1040px",
      1080: "1080px",
    },
    transitionDuration: {
      0: "0ms",
      100: "1000ms",
    },
    transitionDelay: {
      '0': '0ms',
      '2000': '1000ms',
    }
  },      brightness: {
    25: '.25',
    175: '1.75',
  },      zIndex: {
    '0':'0',
    '100': '100',
    '1000':'1000'
  },
  animation: {
    wiggle: 'wiggle 1s ease-in-out infinite',
  },
  backgroundImage: {
    'bg-mb': "url('https://www.bitdegree.org/assets/homepage/bitdegree_lobby.png')",
    'bg-desk': "url('/src/bg3.webp')"},

  plugins: [],
};
