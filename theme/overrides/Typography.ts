import type { Theme, Components } from '@mui/material/styles';

export const Typography = (): Components<Theme> => {
  return {
    MuiTypography: {
      defaultProps: {
        fontFamily: '"Source Sans Pro", sans-serif',
        variantMapping: {
          bodyLarge: 'p',
          bodySmall: 'p',
          bodyXSmall: 'p',
          bodyXXSmall: 'p',
        },
      },
    },
  };
};
