const setDisign = (mode) => ({
  palette: {
    mode,
    primary: {
      main: '#3bc1ae',
    },
    background: {
      default: mode === 'light' ? '#fff' : '#1c1c1c',
    },
  },
  typography: {
    fontFamily: 'Montserrat, sans-serif',
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: '#2d2c2c',
          color: '#fff',
        },
      },
    },
  },
});

export default setDisign;
