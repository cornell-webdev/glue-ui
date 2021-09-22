import palette from './palette'

export const theme = {
  ...palette,

  disabled: palette.grey[400],

  // brand
  brand: {
    50: '#F2F9FF',
    75: '#E0F1FE',
    100: '#bce0fb',
    200: '#90cbf9',
    300: '#64b6f7',
    400: '#42a6f5',
    500: '#2196f3',
    600: '#1d8ef1',
    700: '#1883ef',
    800: '#1479ed',
    900: '#0b68ea',
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
