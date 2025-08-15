import { type Theme, alpha } from '@mui/material/styles';

const ALPHA_COLOR_OPACITY = 0.7;

export const Chip = (theme: Theme) => ({
  MuiChip: {
    styleOverrides: {
      root: {
        textTransform: 'uppercase',
        fontWeight: 600,
        letterSpacing: 1,

        // MUI default spacing reset
        '& span': {
          padding: 0,
        },

        '& .MuiChip-icon, .MuiChip-deleteIcon': {
          margin: 0,
        },
      },
    },

    variants: [
      {
        props: { size: 'small' },
        style: {
          padding: `${theme.spacing(0.75)} ${theme.spacing(1.5)}`,
          height: theme.spacing(3),
          gap: theme.spacing(0.5),

          '& svg': {
            width: theme.spacing(1.5),
            height: theme.spacing(1.5),
          },

          '& span': {
            fontSize: theme.spacing(1.5),
          },
        },
      },
      {
        props: { size: 'medium' },
        style: {
          padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
          height: theme.spacing(4),
          gap: theme.spacing(1),

          '& svg': {
            width: theme.spacing(2),
            height: theme.spacing(2),
          },

          '& span': {
            fontSize: theme.spacing(1.75),
          },
        },
      },
      {
        props: { variant: 'filled', color: 'info' },
        style: {
          color: theme.palette.custom.infoHover,
          backgroundColor: theme.palette.custom.infoBackground,

          '&.MuiChip-clickable': {
            '&:hover, &:focus:hover': {
              color: theme.palette.custom.infoBackground,
              backgroundColor: theme.palette.custom.infoHover,

              '& .MuiChip-deleteIcon': {
                color: alpha(theme.palette.custom.infoBackground, ALPHA_COLOR_OPACITY),

                '&:hover': {
                  color: theme.palette.custom.infoBackground,
                },
              },
            },
          },

          '& .MuiChip-deleteIcon': {
            color: alpha(theme.palette.custom.infoHover, ALPHA_COLOR_OPACITY),

            '&:hover': {
              color: theme.palette.custom.infoHover,
            },
          },
        },
      },
      {
        props: { variant: 'outlined', color: 'info' },
        style: {
          color: theme.palette.custom.infoHover,

          '& .MuiChip-deleteIcon': {
            color: alpha(theme.palette.custom.infoHover, ALPHA_COLOR_OPACITY),

            '&:hover': {
              color: theme.palette.custom.infoHover,
            },
          },
        },
      },
      {
        props: { variant: 'filled', color: 'success' },
        style: {
          color: theme.palette.custom.successHover,
          backgroundColor: theme.palette.custom.successBackground,

          '&.MuiChip-clickable': {
            '&:hover, &:focus:hover': {
              color: theme.palette.custom.successBackground,
              backgroundColor: theme.palette.custom.successHover,

              '& .MuiChip-deleteIcon': {
                color: alpha(theme.palette.custom.successBackground, ALPHA_COLOR_OPACITY),

                '&:hover': {
                  color: theme.palette.custom.successBackground,
                },
              },
            },
          },

          '& .MuiChip-deleteIcon': {
            color: alpha(theme.palette.custom.successHover, ALPHA_COLOR_OPACITY),

            '&:hover': {
              color: theme.palette.custom.successHover,
            },
          },
        },
      },
      {
        props: { variant: 'outlined', color: 'success' },
        style: {
          color: theme.palette.custom.successHover,

          '& .MuiChip-deleteIcon': {
            color: alpha(theme.palette.custom.successHover, ALPHA_COLOR_OPACITY),

            '&:hover': {
              color: theme.palette.custom.successHover,
            },
          },
        },
      },
      {
        props: { variant: 'filled', color: 'error' },
        style: {
          color: theme.palette.custom.errorHover,
          backgroundColor: theme.palette.custom.errorBackground,

          '&.MuiChip-clickable': {
            '&:hover, &:focus:hover': {
              color: theme.palette.custom.errorBackground,
              backgroundColor: theme.palette.custom.errorHover,

              '& .MuiChip-deleteIcon': {
                color: alpha(theme.palette.custom.errorBackground, ALPHA_COLOR_OPACITY),

                '&:hover': {
                  color: theme.palette.custom.errorBackground,
                },
              },
            },
          },

          '& .MuiChip-deleteIcon': {
            color: alpha(theme.palette.custom.errorHover, ALPHA_COLOR_OPACITY),

            '&:hover': {
              color: theme.palette.custom.errorHover,
            },
          },
        },
      },
      {
        props: { variant: 'outlined', color: 'error' },
        style: {
          color: theme.palette.custom.errorHover,

          '& .MuiChip-deleteIcon': {
            color: alpha(theme.palette.custom.errorHover, ALPHA_COLOR_OPACITY),

            '&:hover': {
              color: theme.palette.custom.errorHover,
            },
          },
        },
      },
    ],
  },
});
