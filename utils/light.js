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
    success: {
        main: '#1A1818',
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
                fontSize: '52px',
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
        fontWeight: 600,
        fontSize: 46,
        color: PALETTE.text.primary,
        '@media (max-width:600px)': {
            fontSize: '38px',
        },
        '@media (max-width:960px)': {
            fontSize: '40px',
        },
        '@media (max-width:1200px)': {
            fontSize: '42px',
        },
    },
    h3: {
        fontFamily: FONT_FAMILY.primary,
        fontWeight: 700,
        fontSize: 52,
        color: PALETTE.text.primary,
        '@media(min-width: 375px)': {
            fontSize: '36px'
        },
        '@media (max-width:375px)': {
          fontSize: '26px',
        },
        '@media (min-width:960px)': {
          fontSize: '62px',
        },
    },
    h4: {
        fontFamily: FONT_FAMILY.primary,
        fontWeight: 600,
        fontSize: 30,
        color: '#e64a4a',
        '@media (max-width:600px)': {
            fontSize: '22px',
        },
        '@media (min-width:601px)': {
            fontSize: '36px',
        },
        '@media (min-width:960px)': {
          fontSize: '42px',
        },
    },
    h5: {
        fontFamily: FONT_FAMILY.primary,
        fontWeight: 600,
        fontSize: 24
    },
    body1: {
        fontFamily: FONT_FAMILY.primary,
        fontSize: 52,
        fontWeight: 600,
        '@media (max-width:600px)': {
            fontSize: '32px',
        },
    },
    body2: {
        fontFamily: FONT_FAMILY.primary,
        fontSize: 14,
        lineHeight: 1.5,
        fontWeight: 400,
        '@media (min-width:350px)': {
            fontSize: '16px',
        },
        '@media (min-width:601px)': {
            fontSize: '18px'
        },
        '@media(min-width:1280px)': {
            fontSize: "20px"
        }
    },
    caption: {
            fontFamily: FONT_FAMILY.secondary,
            fontWeight: 400,
            fontSize: 24,
            lineHeight: 1.25,
            '@media(max-width:768px)': {
                fontSize: "22px"
            },
            '@media(max-width:600px)': {
                fontSize: "14px"
            },
            '@media(max-width:375px)': {
                fontSize: "12px"
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
      },
      MuiIconButton: {
          root: {
              color: '#1A1818'
          }
      },
     
  }

});

export default light;