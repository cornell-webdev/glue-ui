import palette from './palette'

export const theme = {
  ...palette,

  disabled: palette.grey[400],

  brand: {
    50: '#FCF6F6',
    100: '#f9ecec',
    200: '#e8afaf',
    300: '#de8f8f',
    400: '#d77777',
    500: '#d05f5f',
    600: '#cb5757',
    700: '#c44d4d',
    800: '#be4343',
    900: '#b33232',
  },

  // bg
  bg: {
    default: palette.grey[0],
    wash: palette.grey[50],
    grey: palette.grey[200],
  },

  // border
  border: {
    default: palette.grey[200],
    light: palette.grey[50],
    dark: palette.grey[400],
  },

  // text
  text: {
    default: 'rgba(0, 0, 0, 0.87)',
    light: '#575859',
    muted: '#737576',
    placeholder: '#D3D7DB',
    disabled: 'rgba(0, 0, 0, 0.38)',
  },

  // shadow
  shadow: '0 2px 4px rgba(0, 0, 0, .2)',

  // social
  facebook: '#3B5998',
  twitter: '#00ACED',
  google: '#ea4335',
  github: '#16171A',

  // breakpoints
  small: '576px', // landscape phones
  tablet: '1366px', // tablets (includes 12.9 iPad pro)
  large: '992px', // desktops, laptops
}

export default theme
