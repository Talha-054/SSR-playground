import { type Components, type Theme } from '@mui/material';
// import {
//   CheckboxCheckedIcon,
//   CheckboxIcon,
//   CheckboxIndeterminateIcon,
// } from '@components/icons/checkbox';

export const Checkbox = (theme: Theme): Components<Omit<Theme, 'components'>> => ({
  MuiCheckbox: {
    // defaultProps: {
    //   icon: <CheckboxIcon />,
    //   checkedIcon: <CheckboxCheckedIcon />,
    //   indeterminateIcon: <CheckboxIndeterminateIcon />,
    // },
    styleOverrides: {
      root: {
        marginRight: theme.spacing(2),
        padding: 0,
        color: theme.palette.grey[300],
        transition: 'opacity 0.2s ease, color 0.2s ease, transform 0.2s ease',

        '&.Mui-checked, &.MuiCheckbox-indeterminate': {
          color: theme.palette.secondary.main,
        },

        '&:hover': {
          backgroundColor: 'transparent',
        },

        '&:not(.Mui-checked):not(.Mui-disabled):not(.MuiCheckbox-indeterminate):hover': {
          color: theme.palette.grey[700],
        },

        '& .MuiSvgIcon-root': {
          '&.MuiSvgIcon-fontSizeMedium': {
            height: theme.spacing(4),
            width: theme.spacing(4),
          },

          '&.MuiSvgIcon-fontSizeSmall': {
            height: theme.spacing(3),
            width: theme.spacing(3),
          },
        },

        '&.Mui-disabled': {
          color: theme.palette.grey[200],
        },
      },
    },
  },
});
