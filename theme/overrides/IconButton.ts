import type { Theme } from '@mui/material/styles';

export const IconButton = (theme: Theme) => ({
  MuiIconButton: {
    styleOverrides: {
      root: {
        transition: theme.custom.transition.fast,

        '&.Mui-disabled': {
          opacity: theme.palette.action.disabledOpacity,
          '&.MuiIconButton-loading': {
            color: 'transparent',
            opacity: 1,
          },
        },

        '&.MuiIconButton-sizeSmall': {
          padding: theme.spacing(1),
          '& .MuiSvgIcon-root, & .MuiCustomIcon': {
            width: 16,
            height: 16,
          },
        },

        '&.MuiIconButton-sizeMedium': {
          padding: theme.spacing(1.5),
          '& .MuiSvgIcon-root, & .MuiCustomIcon': {
            width: 20,
            height: 20,
          },
        },

        '&.MuiIconButton-sizeLarge': {
          padding: theme.spacing(2),
          '& .MuiSvgIcon-root, & .MuiCustomIcon': {
            width: 24,
            height: 24,
          },
        },
      },
    },

    variants: [
      {
        props: { variant: 'contained', color: 'primary' },
        style: {
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,

          '&:hover, &:focus:hover': {
            backgroundColor: theme.palette.custom.primaryHover,
          },

          '&:active': {
            backgroundColor: theme.palette.primary.dark,
          },

          '&.Mui-disabled': {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,

            '&.MuiIconButton-loading': {
              backgroundColor: theme.palette.custom.primaryHover,
            },

            '& .MuiCircularProgress-root': {
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

          '&.Mui-disabled': {
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.secondary.contrastText,

            '&.MuiIconButton-loading': {
              backgroundColor: theme.palette.custom.secondaryHover,
            },

            '& .MuiCircularProgress-root': {
              color: theme.palette.secondary.contrastText,
            },
          },
        },
      },
      {
        props: { variant: 'outlined', color: 'secondary' },
        style: {
          color: theme.palette.secondary.main,
          border: theme.custom.border.light2,
          backgroundColor: theme.palette.background.default,

          '&.MuiIconButton-sizeSmall': {
            padding: `calc(${theme.spacing(1)} - 2px)`,
          },

          '&.MuiIconButton-sizeMedium': {
            padding: `calc(${theme.spacing(1.25)} - 2px)`,
          },

          '&.MuiIconButton-sizeLarge': {
            padding: `calc(${theme.spacing(2)} - 2px)`,
          },

          '&:hover, &:focus:hover': {
            borderColor: theme.palette.secondary.dark,
            backgroundColor: theme.palette.grey[100],
          },

          '&.Mui-disabled': {
            color: theme.palette.grey[700],

            '&.MuiIconButton-loading': {
              border: theme.custom.border.dark2,
              backgroundColor: theme.palette.grey[100],
            },

            '& .MuiCircularProgress-root': {
              color: theme.palette.grey[700],
            },
          },
        },
      },
      {
        props: { variant: 'ghost' },
        style: {
          color: theme.palette.grey[700],

          '&:hover, &:focus:hover': {
            backgroundColor: theme.palette.grey[100],
          },

          '&.Mui-disabled': {
            color: theme.palette.grey[700],

            '&.MuiIconButton-loading': {
              backgroundColor: theme.palette.grey[100],
            },

            '& .MuiCircularProgress-root': {
              color: theme.palette.grey[700],
            },
          },
        },
      },
    ],
  },
});
