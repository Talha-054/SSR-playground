import { type Components, type Theme } from '@mui/material';
// import { RadioCheckedIcon, RadioIcon } from '@components/icons';

export const Radio = (theme: Theme): Components<Omit<Theme, 'components'>> => ({
  MuiRadio: {
    // defaultProps: {
    //   icon: <RadioIcon />,
    //   checkedIcon: <RadioCheckedIcon />,
    // },
    styleOverrides: {
      root: {
        opacity: 1, // ← base state is required
        transition: 'opacity 0.2s ease, color 0.2s ease, transform 0.2s ease',

        '&.Mui-checked': {
          color: theme.palette.grey[700],
        },

        '&:hover': {
          backgroundColor: 'transparent',
          opacity: 0.5,
        },

        '& .MuiSvgIcon-root': {
          '&.MuiSvgIcon-fontSizeMedium': {
            height: 28,
            width: 28,
          },

          '&.MuiSvgIcon-fontSizeSmall': {
            height: 24,
            width: 24,
          },
        },

        '&.Mui-disabled .MuiSvgIcon-root': {
          color: theme.palette.grey[200],
        },
      },
    },
  },
});
