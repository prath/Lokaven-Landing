module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        marine: {
          45: '#1425D0',
          50: '#1425D0'
        },
        teal: {
          50: '#20DFB2',
          70: '#79ECD1',
          90: '#D2F9F0'
        },
        cyan: {
          50: '#2AC4D4'
        },
        night: {
          10: '#0C1527',
          20: '#19294D'
        },
        grey: {
          40: '#526B7A', // dark grey
          60: '#859EAD', // grey
          90: '#E0E7EB' // light grey
        },
        gold: {
          60: '#F2BA77',
          80: '#F6CFA2'
        },
        red: {
          60: '#EE445B',
          90: '#FBD0D6'
        },
        blue: {
          60: '#3C9FF6'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
