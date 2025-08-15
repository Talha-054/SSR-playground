import type { Components, Theme } from '@mui/material';

export const Dialog = (theme: Theme): Components<Omit<Theme, 'components'>> => ({
  MuiDialog: {
    styleOverrides: {
      paper: {
        borderRadius: theme.spacing(3),
        boxShadow: theme.custom.shadow.xl,
        padding: 0,
        maxWidth: '100%',
        overflow: 'hidden',
      },
      paperWidthMd: {
        maxWidth: 640,
      },
      paperWidthLg: {
        maxWidth: 1080,
      },
      paperWidthXl: {
        maxWidth: 1528,
      },
    },
    defaultProps: {
      BackdropProps: {
        sx: {
          backgroundColor: `${theme.palette.secondary.dark}33`,
        },
      },
    },
  },
  MuiDialogTitle: {
    styleOverrides: {
      root: {
        padding: theme.spacing(5, 5, 2, 5),
        fontSize: theme.typography.h2.fontSize,
        fontWeight: 600,
        textAlign: 'center',
      },
    },
  },
  MuiDialogContent: {
    styleOverrides: {
      root: {
        padding: theme.spacing(0),
        overflow: 'hidden',
      },
    },
  },
  MuiDialogActions: {
    styleOverrides: {
      root: {
        padding: theme.spacing(2, 5, 5),
        justifyContent: 'center',
        gap: theme.spacing(2),
      },
    },
  },
});
