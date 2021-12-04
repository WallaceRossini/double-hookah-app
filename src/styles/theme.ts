export const theme = {
  colors: {
    primary: '#E02041',
    secondary: '#1B121E',
    success: '#1BA15A',
    danger: '#EB385A',
    warning: '#F7B731',
    info: '#2F80ED',
    white: '#FFFFFF',
  },
  fonts: {
    light: 'Ubuntu_300Light',
    regular: 'Ubuntu_400Regular',
    medium: 'Ubuntu_500Medium',
    bold: 'Ubuntu_700Bold',
  }
};

export const type_message = [
  {
    type: 'success',
    image: require('../assets/checked.png'),
    color: theme.colors.success
  },
  {
    type: 'danger',
    image: require('../assets/cancel.png'),
    color: theme.colors.danger
  },
  {
    type: 'warning',
    image: require('../assets/warning.png'),
    color: theme.colors.warning
  },
  {
    type: 'info',
    image: require('../assets/info.png'),
    color: theme.colors.info
  },
]