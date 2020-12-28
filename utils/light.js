import { createMuiTheme } from "@material-ui/core";

const FONT_FAMILY = {
    primary: [
        'Metropolis',
        'sans-serif'
    ].join(','),
    secondary: [
        'Poppins',
        'sans-serif'
    ].join(','),
};

const PALETTE = {
    primary: {
        main: '#252422',
    },
    secondary: {
        main: '#69f0ae',
    },
    text: {
        primary: '#1A1818',
        secondary: '#000',
        disabled: '#D8D8D8',
        hint: '#FFF'
    },
    background: {
        paper: '#E64A4A',
        default: '#FFFFFF',
        secondary: '#F5F5F5',
    },
};

const light = createMuiTheme({
    palette: PALETTE,
    typography: {
    fontFamily: FONT_FAMILY.primary,
    h1: {
        fontFamily: FONT_FAMILY.primary,
        fontWeight: 700,
        fontSize: 60,
        color: PALETTE.text.primary,
        '@media (max-width:600px)': {
                fontSize: '60px',
        },
        '@media (min-width:601px)': {
          fontSize: '70px',
        },
        '@media (min-width:960px)': {
          fontSize: '90px',
        },
    },
    h2: {
        fontFamily: FONT_FAMILY.primary,
        fontWeight: 500,
        fontSize: 52,
        color: PALETTE.text.primary,
        '@media (max-width:600px)': {
            fontSize: '42px',
        },
    },
    h3: {
        fontFamily: FONT_FAMILY.primary,
        fontWeight: 700,
        fontSize: 42,
        color: PALETTE.text.primary,
        '@media (max-width:600px)': {
            fontSize: '26px',
        },
        '@media (min-width:601px)': {
            fontSize: '36px',
        },
        '@media (min-width:960px)': {
          fontSize: '42px',
        },
    },
    h4: {
        fontFamily: FONT_FAMILY.primary,
        fontWeight: 600,
        fontSize: 30
    },
    h5: {
        fontFamily: FONT_FAMILY.primary,
        fontWeight: 600,
        fontSize: 24
    },
    body1: {
        fontFamily: FONT_FAMILY.primary,
        fontSize: 40,
        fontWeight: 600
    },
    body2: {
        fontFamily: FONT_FAMILY.primary,
        fontSize: 18,
        fontWeight: 300,
        '@media (max-width:600px)': {
            fontSize: '12px',
        },
        '@media (min-width:601px)': {
            fontSize: '14px'
        },
        '@media(min-width:1280px)': {
            fontSize: "18px"
        }
    },
    button: {
        color: PALETTE.text.primary
    }
  },
  overrides: {
      MuiBackdrop: {
          root: {
              opacity: 0
          }
      },
      MuiSwitch: {
          root: {
              zIndex: 9999
          }
      }
  }

});

export default light;