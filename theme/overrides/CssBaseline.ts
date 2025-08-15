import type { Theme } from "@mui/material";

export const CssBaseline = (theme: Theme) => ({
  MuiCssBaseline: {
    styleOverrides: {
      body: {
        fontFamily: theme.typography.fontFamily,
      },
    },
  },
});
