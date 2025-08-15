import type { Theme } from '@mui/material/styles';

export const Button = (theme: Theme) => ({
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: theme.custom.borderRadius.xxl,
        transition: theme.custom.transition.fast,
        gap: theme.spacing(1),
        textTransform: 'none' as const,
        boxShadow: 'none',
        fontWeight: 600,
        lineHeight: 'normal',

        '&:hover': {
          boxShadow: 'none',
        },

        '&:active': {
          boxShadow: 'none',
        },

        '&.Mui-disabled': {
          opacity: theme.palette.action.disabledOpacity,

          '&.MuiButton-outlined': {
            borderWidth: 2,
          },

          '&.MuiButton-loading': {
            opacity: 1,

            '&.MuiButton-loadingPositionCenter': {
              color: 'transparent',
            },
          },
        },

        '&.MuiButton-sizeSmall': {
          fontSize: theme.typography.pxToRem(14.22),
          padding: `${theme.spacing(0.875)} ${theme.spacing(3)}`,
          lineHeight: 'normal',

          '&.MuiButton-outlined': {
            padding: `calc(${theme.spacing(0.875)} - 2px) calc(${theme.spacing(3)} - 2px)`,
          },
        },

        '&.MuiButton-sizeMedium': {
          fontSize: theme.typography.pxToRem(16),
          padding: `${theme.spacing(1.25)} ${theme.spacing(4)}`,
          lineHeight: theme.typography.pxToRem(24),

          '&.MuiButton-outlined': {
            padding: `calc(${theme.spacing(1.25)} - 2px) calc(${theme.spacing(4)} - 2px)`,
          },
        },

        '&.MuiButton-sizeLarge': {
          fontSize: theme.typography.pxToRem(18),
          lineHeight: theme.typography.pxToRem(36),
          padding: `${theme.spacing(1.25)} ${theme.spacing(5)}`,
          '&.MuiButton-outlined': {
            padding: `calc(${theme.spacing(1.25)} - 2px) calc(${theme.spacing(5)} - 2px)`,
          },
        },

        // Icon spacing adjustments
        '& .MuiButton-startIcon': {
          marginLeft: theme.spacing(-1),
          marginRight: 0,
        },

        '& .MuiButton-endIcon': {
          marginLeft: 0, // 8px
          marginRight: theme.spacing(-1),
        },
      },
    },

    variants: [
      {
        props: { variant: 'contained', color: 'primary' },
        style: {
          backgroundColor: theme.palette.primary.main, // #ED5745
          color: theme.palette.primary.contrastText, // #FFFFFF

          '&:hover, &:focus:hover': {
            backgroundColor: theme.palette.custom.primaryHover, // #BA3B28
          },

          '&:active, &:hover:active': {
            backgroundColor: theme.palette.primary.dark,
          },

          '&:focus': {
            backgroundColor: theme.palette.primary.main,
          },

          '&.Mui-disabled': {
            backgroundColor: theme.palette.primary.main, // #ED5745
            color: theme.palette.primary.contrastText, // #FFFFFF
          },

          '&.MuiButton-loading': {
            backgroundColor: theme.palette.custom.primaryHover,

            '& .MuiButton-loadingIndicator': {
              color: theme.palette.primary.contrastText,
            },
          },
        },
      },
      {
        props: { variant: 'contained', color: 'secondary' },
        style: {
          backgroundColor: theme.palette.secondary.main,
          color: theme.palette.secondary.contrastText,

          '&:hover, &:focus:hover': {
            backgroundColor: theme.palette.custom.secondaryHover,
          },

          '&:active, &:hover:active': {
            backgroundColor: theme.palette.secondary.dark,
          },

          '&:focus': {
            backgroundColor: theme.palette.secondary.main,
          },

          '&.Mui-disabled': {
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.secondary.contrastText,
          },

          '&.MuiButton-loading': {
            backgroundColor: theme.palette.custom.secondaryHover,

            '& .MuiButton-loadingIndicator': {
              color: theme.palette.secondary.contrastText,
            },
          },
        },
      },
      {
        props: { variant: 'outlined', color: 'secondary' },
        style: {
          color: theme.palette.grey[700],
          backgroundColor: theme.palette.background.default,
          border: theme.custom.border.light2,

          '&:hover, &:focus:hover': {
            borderColor: theme.palette.secondary.dark,
            backgroundColor: theme.palette.grey[100],
          },

          '&.Mui-disabled': {
            color: theme.palette.grey[700],
          },

          '&.MuiButton-loading': {
            border: theme.custom.border.dark2,
            backgroundColor: theme.palette.grey[100],
          },

          '& .MuiButton-loadingIndicator': {
            color: theme.palette.grey[700],
          },
        },
      },
      {
        props: { variant: 'ghost' },
        style: {
          color: theme.palette.grey[700],
          backgroundColor: 'transparent',
          fontSize: theme.typography.pxToRem(16),

          '&:hover, &:focus:hover': {
            backgroundColor: theme.palette.grey[100],
          },

          '&.Mui-disabled': {
            color: theme.palette.grey[700],
          },

          '&.MuiButton-loading': {
            color: theme.palette.grey[700],
            backgroundColor: theme.palette.grey[100],
          },

          '& .MuiButton-loadingIndicator': {
            color: theme.palette.grey[700],
          },
        },
      },
    ],
  },
});
