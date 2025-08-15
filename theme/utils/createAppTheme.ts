import { createTheme, responsiveFontSizes } from "@mui/material";
import { getPalette } from "../palette";
import { custom } from "../custom";
import { getShadows } from "../shadows";

type ThemeMode = "light" | "dark";
import {
  Button,
  IconButton,
  Card,
  Radio,
  Switch,
  Typography,
  Checkbox,
  FormControlLabel,
  Chip,
  TextField,
  Tab,
  Alert,
  Dialog,
  Accordion,
  CssBaseline,
} from "../overrides";

import { breakpoints } from "../breakpoints";
import { createTypography } from "../typography";

export const createAppTheme = (mode: ThemeMode) => {
  const palette = getPalette(mode);
  const shadows = getShadows(mode);

  const base = createTheme({
    palette,
    breakpoints,
    shadows,
    shape: { borderRadius: 8 },
  });

  const withCustom = createTheme({
    ...base,
    typography: createTypography(base.palette),
    custom: custom(base),
  });

  const components = {
    ...Button(withCustom),
    ...IconButton(withCustom),
    ...Card(withCustom),
    ...Typography(),
    ...Chip(withCustom),
    ...FormControlLabel(withCustom),
    ...Radio(withCustom),
    ...Checkbox(withCustom),
    ...Switch(withCustom),
    ...Tab(withCustom),
    ...TextField(withCustom),
    ...Alert(withCustom),
    ...Dialog(withCustom),
    ...Accordion(withCustom),
    ...CssBaseline(withCustom),
  };

  const finalTheme = createTheme(withCustom, {
    components,
  });

  return responsiveFontSizes(finalTheme);
};
