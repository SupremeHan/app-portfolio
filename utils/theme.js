import { createMuiTheme } from '@material-ui/core/styles';

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

const BREAKPOINTS = {
    values: {
        xs: 0,
        sm: 600,
        form: 768,
        md: 960,
        lg: 1280,
        lg2: 1440,
        xl: 1920
    },
};

const PALETTE = {
    primary: {
        main: '#252422',
    },
    secondary: {
        main: '#69f0ae',
    },
    text: {
        primary: '#CFC9D7',
        secondary: '#000',
        disabled: '#D8D8D8',
        hint: '#FFF'
    },
    background: {
        paper: '#323031',
        default: '#1A1818',
        secondary: '#F5F5F5',
    },
};

const theme = createMuiTheme({
  palette: PALETTE,
  breakpoints: BREAKPOINTS,
  typography: {
    fontFamily: FONT_FAMILY.primary,
    h1: {
        fontFamily: FONT_FAMILY.primary,
        fontWeight: 700,
        fontSize: 110,
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
        '@media (min-width:1200px)': {
          fontSize: '120px',
        },
    },
    h2: {
        fontFamily: FONT_FAMILY.primary,
        fontWeight: 600,
        fontSize: 52,
        color: PALETTE.text.primary,
        '@media (max-width:600px)': {
            fontSize: '42px',
        },
    },
    h3: {
        fontFamily: FONT_FAMILY.primary,
        fontWeight: 700,
        fontSize: 52,
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
        fontWeight: 600,
        '@media (max-width:600px)': {
            fontSize: '22px',
        },
    },
    body2: {
        fontFamily: FONT_FAMILY.secondary,
        fontSize: 18,
        fontWeight: 400,
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
              zIndex: 9999,
          },
          colorPrimary: {
                color: "#7D83FF !important"
          },
          track: {
              background: "#cfc9d7 !important"
          }
      },
      MuiIconButton: {
          root: {
              color: '#CFC9D7'
          }
      }
  }
});

export default theme;