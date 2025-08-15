import type { Components, Theme } from '@mui/material/styles';

export const FormControlLabel = (theme: Theme): Components<Theme> => ({
  MuiFormControlLabel: {
    styleOverrides: {
      root: {
        // Only apply spacing rules if the control is a radio
        '& .MuiRadio-root + .MuiFormControlLabel-label': {
          marginLeft: theme.spacing(0.875),
        },

        '&.MuiFormControlLabel-labelPlacementStart': {
          '& .MuiRadio-root + .MuiFormControlLabel-label': {
            marginRight: theme.spacing(0.875),
            marginLeft: 0,
          },
        },

        // '&.MuiFormControlLabel-labelPlacementTop': {
        //   '& .MuiRadio-root + .MuiFormControlLabel-label': {
        //     marginBottom: theme.spacing(0.875),
        //   },
        // },
        //
        // '&.MuiFormControlLabel-labelPlacementBottom': {
        //   '& .MuiRadio-root + .MuiFormControlLabel-label': {
        //     marginTop: theme.spacing(0.875),
        //   },
        // },
      },
      label: {
        color: theme.palette.secondary.main,
      },
    },
  },
});
