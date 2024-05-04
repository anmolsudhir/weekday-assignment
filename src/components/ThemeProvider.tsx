import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react';

const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(85, 239, 196)",
    },
    secondary: {
      main: "rgb(73, 67, 218)",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            boxShadow: "none",
          },
          borderRadius: "8px",
          textTransform: "none",
          boxShadow: "none"
        }
      }
    }
  },
  typography: {
    button: {
      color: 'black',
      '&.MuiButton-primary': {
        color: 'black',
      },
      '&.MuiButton-secondary': {
        color: 'white',
      },
    }
  }
});

export function CustomThemeProvider(
  {
    children
  }: {
    children: React.JSX.Element
  }
) {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}