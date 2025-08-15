import type { Components, Theme } from '@mui/material/styles';

export const Tab = (theme: Theme): Components<Omit<Theme, 'components'>> => ({
  MuiTabs: {
    styleOverrides: {
      root: {
        // Size-specific styles for the Tabs container
        '&.MuiTabs-sizeSmall .MuiTab-root': {
          padding: '12px 24px',
          fontSize: '0.889rem', //~14.22px
          height: theme.spacing(4),
          
          '& .MuiSvgIcon-root': {
            width: '1rem',
            height: '1rem',
          },
          
          '&.MuiTab-iconPositionStart': {
            paddingLeft: 16,
            paddingRight: 24,
          },
          '&.MuiTab-iconPositionEnd': {
            paddingLeft: 24,
            paddingRight: 16,
          },
          '&.MuiTab-iconPositionTop': {
            paddingTop: 4,
            paddingBottom: 16,
          },
          '&.MuiTab-iconPositionBottom': {
            paddingTop: 16,
            paddingBottom: 4,
          },
        },
        
        '&.MuiTabs-sizeMedium .MuiTab-root': {
          padding: '18px 32px',
          fontSize: '1rem',
          height: theme.spacing(6),
          
          '& .MuiSvgIcon-root': {
            width: '1.5rem',
            height: '1.5rem',
          },
          
          '&.MuiTab-iconPositionStart': {
            paddingLeft: 16,
            paddingRight: 24,
          },
          '&.MuiTab-iconPositionEnd': {
            paddingLeft: 24,
            paddingRight: 16,
          },
          '&.MuiTab-iconPositionTop': {
            paddingTop: 12,
            paddingBottom: 20,
          },
          '&.MuiTab-iconPositionBottom': {
            paddingTop: 20,
            paddingBottom: 12,
          },
        },
      },
    },
  },
  MuiTab: {
    styleOverrides: {
      root: {
        padding: '12px 16px',
        textTransform: 'capitalize',
        fontWeight: 600,
        minWidth: 'unset',
        minHeight: 'unset',
        color: theme.palette.action.disabled,
        borderRadius: theme.custom.borderRadius?.xxl || theme.spacing(2),
        transition: theme.transitions.create(['background-color', 'color'], {
          duration: 300,
          easing: 'ease-in-out',
        }),

        '&.Mui-selected': {
          color: theme.palette.action.active,
          backgroundColor: theme.palette.grey['200'],
        },

        '&:hover': {
          backgroundColor: theme.palette.grey[100],
        },

        '&.Mui-selected:hover': {
          backgroundColor: theme.palette.grey['200'],
        },

        '& .MuiTab-iconWrapper': {
          '&.MuiTab-iconPositionStart': {
            marginRight: 8,
          },
          '&.MuiTab-iconPositionEnd': {
            marginLeft: 8,
          },
          '&.MuiTab-iconPositionTop': {
            marginBottom: 4,
          },
          '&.MuiTab-iconPositionBottom': {
            marginTop: 4,
          },
        },
      },
    },
  },
});
