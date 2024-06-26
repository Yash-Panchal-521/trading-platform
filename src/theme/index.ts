import { createTheme } from "@mui/material";

export const appTheme = createTheme({
    palette: {
      primary: {
        main: '#9333ea',
      },
      secondary: {
        main: '#4caf50',
      },
        error: {
            main: '#f44336',
        },
    },
    typography: {
      fontFamily: "Source Sans Pro, sans-serif",
    },

  });