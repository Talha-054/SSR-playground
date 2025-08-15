import type { Theme } from '@mui/material/styles';

// Icon mapping is handled at the component level since theme files
// cannot easily import React components
export const Alert = (theme: Theme) => ({
  MuiAlert: {
    styleOverrides: {
      root: {
        fontSize: theme.typography.pxToRem(16),
        fontWeight: 400,
        lineHeight: 'normal',
        color: theme.palette.text.primary,
        margin: 0,
        display: 'flex',
        alignItems: 'stretch',
        width: '100%',
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(0, 2),
        borderRadius: theme.spacing(1),
        overflow: 'hidden',
        minWidth: 300,
        boxShadow: 'none',

        '& .MuiAlert-icon': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: 0,
          marginRight: '10px',
          '& .MuiSvgIcon-root': {
            fontSize: theme.spacing(3),
            width: theme.spacing(3),
            height: theme.spacing(3),
          },
        },

        '& .MuiAlert-message': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          padding: '10px 0',
          flex: 1,
          fontSize: theme.typography.pxToRem(14),
          fontWeight: 400,
          color: theme.palette.text.primary,
        },

        '& .MuiAlert-action': {
          alignSelf: 'flex-start',
          paddingTop: theme.spacing(1),
          paddingRight: theme.spacing(1),
        },
      },
      standardSuccess: {
        backgroundColor:
          theme.palette.mode === 'dark'
            ? 'rgba(51, 204, 140, 0.1)'
            : (theme.palette.custom?.successBackground ?? theme.palette.background.paper),
        '& .MuiAlert-icon': {
          color: theme.palette.success?.main ?? theme.palette.text.primary,
        },
        '& .MuiAlert-message': {
          color:
            theme.palette.mode === 'dark'
              ? (theme.palette.success?.light ?? theme.palette.text.primary)
              : (theme.palette.success?.dark ?? theme.palette.text.primary),
        },
      },
      standardError: {
        backgroundColor:
          theme.palette.mode === 'dark'
            ? 'rgba(204, 77, 51, 0.1)'
            : (theme.palette.custom?.errorBackground ?? theme.palette.background.paper),
        '& .MuiAlert-icon': {
          color: theme.palette.error?.main ?? theme.palette.text.primary,
        },
        '& .MuiAlert-message': {
          color:
            theme.palette.mode === 'dark'
              ? (theme.palette.error?.light ?? theme.palette.text.primary)
              : (theme.palette.error?.dark ?? theme.palette.text.primary),
        },
      },
      standardWarning: {
        backgroundColor:
          theme.palette.mode === 'dark'
            ? 'rgba(204, 171, 51, 0.1)'
            : (theme.palette.custom?.warningBackground ?? theme.palette.background.paper),
        '& .MuiAlert-icon': {
          color: theme.palette.warning?.main ?? theme.palette.text.primary,
        },
        '& .MuiAlert-message': {
          color:
            theme.palette.mode === 'dark'
              ? (theme.palette.warning?.light ?? theme.palette.text.primary)
              : (theme.palette.warning?.dark ?? theme.palette.text.primary),
        },
      },
      standardInfo: {
        backgroundColor:
          theme.palette.mode === 'dark'
            ? 'rgba(51, 135, 204, 0.1)'
            : (theme.palette.custom?.infoBackground ?? theme.palette.background.paper),
        '& .MuiAlert-icon': {
          color: theme.palette.info?.main ?? theme.palette.text.primary,
        },
        '& .MuiAlert-message': {
          color:
            theme.palette.mode === 'dark'
              ? (theme.palette.info?.light ?? theme.palette.text.primary)
              : (theme.palette.info?.dark ?? theme.palette.text.primary),
        },
      },
    },
  },
});
