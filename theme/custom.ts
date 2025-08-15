import type { Theme } from '@mui/material/styles';

export const custom = (theme: Theme) => {
  const isDark = theme.palette.mode === 'dark';

  return {
    borderRadius: {
      xs: 8,
      sm: 12,
      md: 16,
      lg: 24,
      xl: 32,
      xxl: 50,
    },
    shadow: {
      sm: isDark ? '0px 2px 4px rgba(0, 0, 0, 0.6)' : '0px 2px 4px rgba(34, 33, 33, 0.12)',
      md: isDark
        ? '0px 4px 10px rgba(0, 0, 0, 0.7)' // <<< make it strong and visible
        : '0px 2px 8px rgba(34, 33, 33, 0.12)',
      lg: isDark ? '0px 6px 16px rgba(0, 0, 0, 0.75)' : '0px 4px 12px rgba(34, 33, 33, 0.12)',
      xl: isDark ? '0px 10px 24px rgba(0, 0, 0, 0.8)' : '0px 8px 16px rgba(34, 33, 33, 0.16)',
    },
    transition: {
      fast: theme.transitions.create(
        [
          'background-color',
          'border-color',
          'transform',
          'color',
          'width',
          'max-width',
          'min-width',
          'opacity',
          'padding',
          'margin',
          'box-shadow',
        ],
        {
          duration: 300,
          easing: 'ease-in-out',
        }
      ),
      normal: theme.transitions.create(
        [
          'background-color',
          'color',
          'border-color',
          'transform',
          'width',
          'max-width',
          'min-width',
          'opacity',
          'padding',
          'margin',
          'box-shadow',
        ],
        {
          duration: 400,
          easing: 'ease-in-out',
        }
      ),
      layout: theme.transitions.create(
        [
          'transform',
          'width',
          'max-width',
          'min-width',
          'opacity',
          'padding',
          'margin',
          'box-shadow',
        ],
        {
          duration: 400,
          easing: 'ease-in-out',
        }
      ),
      default: 'all 0.3s ease-in-out',
    },
    border: {
      default: `1px solid ${theme.palette.grey[300]}`,
      light: `1px solid ${theme.palette.grey[200]}`,
      divider: `1px solid ${theme.palette.divider}`,
      default2: `2px solid ${theme.palette.grey[300]}`,
      light2: `2px solid ${theme.palette.grey[200]}`,
      dark2: `2px solid ${theme.palette.grey[800]}`,
      white: `2px solid ${theme.palette.background.default}`,
    },
    cardSizes: {
      hero: {
        width: 456,
        height: 316,
        padding: {
          xs: 3,
          sm: 5,
        },
      },
    },
  };
};
