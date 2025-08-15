import { type Components, type Theme } from '@mui/material';

export const Switch = (theme: Theme): Components<Omit<Theme, 'components'>> => ({
  MuiSwitch: {
    styleOverrides: {
      root: {
        height: 28,
        padding: 0,
        overflow: 'visible',
        position: 'relative',

        '&.MuiSwitch-sizeSmall': {
          height: 20,
          '& .MuiSwitch-switchBase': {
            padding: 2,
          },
          '& .MuiSwitch-thumb': {
            width: 16,
            height: 16,
          },

          '& .MuiSwitch-track': {
            '&::before': {
              fontSize: 9.029,
              left: '18px',
            },
            '&::after': {
              fontSize: 9.029,
              left: '5px',
            },
          },
        },
        '&.MuiSwitch-sizeMedium': {
          height: 32,
          '& .MuiSwitch-thumb': {
            width: 28,
            height: 28,
          },

          '& .MuiSwitch-track': {
            '&::before': {
              fontSize: 14.446,
            },
            '&::after': {
              fontSize: 14.446,
              left: '7px',
            },
          },
        },
      },
      switchBase: {
        padding: 2,
        color: theme.palette.grey[400],
        '& + .MuiSwitch-track': {
          backgroundColor: theme.palette.grey[100],
        },
        '&.Mui-checked': {
          transform: `translateX(${54 - 28}px)`,
          color: theme.palette.success.main,
          '& + .MuiSwitch-track': {
            backgroundColor: theme.palette.success.light,
          },
        },
        '&.Mui-checked.Mui-disabled': {
          color: theme.palette.success.main,
          opacity: 0.5,
          '& + .MuiSwitch-track': {
            opacity: 0.5,
          },
        },
        '&.Mui-disabled': {
          color: theme.palette.grey[400],
          opacity: 0.5,
          '& + .MuiSwitch-track': {
            opacity: 0.5,
          },
        },
      },
      input: {
        position: 'absolute',
        height: '100%',
        top: 0,
        margin: 0,
        padding: 0,
        opacity: 0,
        cursor: 'pointer',
        zIndex: 2,
      },
      track: {
        borderRadius: 20,
        backgroundColor: theme.palette.grey[300],
        transition: theme.transitions.create(['background-color'], {
          duration: 300,
        }),
      },
    },
  },
});
