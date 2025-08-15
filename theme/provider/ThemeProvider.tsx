"use client";

import React, { type PropsWithChildren, useMemo } from "react";
import { CssBaseline, ThemeProvider as MuiThemeProvider } from "@mui/material";
import { createAppTheme } from "../utils/createAppTheme";

export const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  console.log("😒😒 creating theme");
  
  const mode = "light";
  const theme = useMemo(() => createAppTheme(mode), [mode]);

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};
