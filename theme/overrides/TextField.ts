import { type Components, type Theme } from '@mui/material';

export const TextField = (theme: Theme): Components<Omit<Theme, 'components'>> => ({
  MuiTextField: {
    defaultProps: {
      color: 'secondary', // you can't directly set grey here, so set it on subcomponents below
    },
    styleOverrides: {
      root: ({ className }) => ({
        marginTop:
          className?.includes('input-search-field') ||
            className?.includes('input-form-select-field')
            ? undefined
            : theme.spacing(1),

        '& label.Mui-error': {
          color: theme.palette.text.secondary,
          ...theme.typography.bodyBold,

          '& span': {
            color: theme.palette.text.secondary,
          },
        },
      }),
    },
  },

  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        borderRadius: theme.custom.borderRadius.xxl,
        minHeight: theme.spacing(6.5),
        color: theme.palette.grey[700],
        paddingRight: theme.spacing(2),
        paddingLeft: theme.spacing(3.25),

        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: theme.palette.grey[300],
          borderWidth: 1,
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
          borderWidth: 1,
          borderColor: theme.palette.grey[700],
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
          color: theme.palette.grey[700],
          borderWidth: 1,
        },
        '&.Mui-disabled': {
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.grey[200],
          },
        },
        '& legend': {
          marginLeft: theme.spacing(2.25),
        },
        '.MuiSelect-icon': {
          top: 'auto',
          right: theme.spacing(2),
        },
      },
      input: {
        padding: theme.spacing(1.75, 4.5, 1.75, 0.75),
        minHeight: theme.spacing(3),
      },
    },
  },
  MuiInputLabel: {
    styleOverrides: {
      root: {
        color: theme.palette.grey[400],
        left: theme.spacing(2.125),
        '&.MuiInputLabel-shrink': {
          ...theme.typography.bodyBold,
        },
        '&.Mui-focused': {
          color: theme.palette.grey[700],
          ...theme.typography.bodyBold,
        },
        '&.Mui-disabled': {
          color: theme.palette.grey[400],
        },
      },
    },
  },
  MuiFormHelperText: {
    styleOverrides: {
      root: {
        marginLeft: theme.spacing(4),
        marginTop: theme.spacing(1),
        color: theme.palette.success.main,
        lineHeight: 'normal',
        fontSize: theme.typography.pxToRem(12.64),
        height: theme.spacing(2),
      },
    },
  },
  MuiInputAdornment: {
    styleOverrides: {
      root: {
        color: theme.palette.grey[700],
        marginRight: '10px',
        '.MuiOutlinedInput-root.Mui-disabled &': {
          '& svg': {
            color: theme.palette.action.disabled,
          },
        },
      },
    },
  },
});
