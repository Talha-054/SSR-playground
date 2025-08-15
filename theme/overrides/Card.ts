import type { Components, Theme } from '@mui/material/styles';

export const Card = (theme: Theme): Components<Theme> => ({
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: theme.custom.borderRadius.md,
        padding: theme.spacing(1),
        transition: 'box-shadow 0.3s ease-in-out',
        backgroundColor: theme.palette.background.paper,

        // Remove padding when CardActionArea is used
        '&:has(.MuiCardActionArea-root)': {
          padding: 0,
        },
      },
    },
    defaultProps: {
      elevation: 0,
    },
  },
  MuiCardMedia: {
    styleOverrides: {
      root: {
        borderRadius: theme.custom.borderRadius.md,
        padding: theme.spacing(3),
        backgroundColor: theme.palette.grey[100],
      },
    },
  },
  MuiCardContent: {
    styleOverrides: {
      root: {
        padding: `${theme.spacing(1.5)} ${theme.spacing(1)} ${theme.spacing(1.5)} 0`,

        '&:last-child': {
          paddingBottom: theme.spacing(1.5), // Ensures MUI doesn't override
        },
      },
    },
  },
  MuiCardActionArea: {
    styleOverrides: {
      root: {
        // Add padding inside CardActionArea instead
        padding: theme.spacing(1),
        borderRadius: theme.custom.borderRadius.md,
        // Ensure the ripple effect extends to edges
        margin: 0,

        // Remove hover background
        '&:hover': {
          backgroundColor: 'transparent',
        },
        // Also remove the default hover overlay
        '&:hover .MuiCardActionArea-focusHighlight': {
          opacity: 0,
        },
      },
      // Remove the focus highlight overlay
      focusHighlight: {
        opacity: 0,
      },
    },
  },
});
