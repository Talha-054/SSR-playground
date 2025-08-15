import type { Theme } from '@mui/material/styles';
// import { AngleDownIcon } from '@components/icons';

export const Accordion = (theme: Theme) => ({
  MuiAccordion: {
    styleOverrides: {
      root: {
        boxShadow: 'none',
        '&&': {
          borderRadius: 0,
          padding: theme.spacing(3, 0),
        },
        '&[data-isfirst="true"]': {
          padding: theme.spacing(0, 0, 3, 0),
        },
        '&::after': {
          content: "''",
          position: 'absolute',
          top: 0,
          width: '100%',
          height: '1px',
          backgroundColor: theme.palette.divider,
        },
        '&[data-isfirst="true"]::after': {
          display: 'none',
        },
        '&.Mui-expanded': {
          margin: 0,
        },
      },
    },
  },
  MuiAccordionSummary: {
    // defaultProps: {
    //   expandIcon: React.createElement(AngleDownIcon),
    // },
    styleOverrides: {
      root: {
        display: 'flex',
        alignItems: 'flex-start',
        minHeight: theme.spacing(4),
        padding: 0,
        margin: 0,
        '&.Mui-expanded': {
          minHeight: theme.spacing(4),
        },
      },
      content: {
        margin: theme.spacing(0, 5, 0, 0),
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        '&.Mui-expanded': {
          overflow: 'visible',
          textOverflow: 'unset',
          whiteSpace: 'normal',
          margin: theme.spacing(0, 5, 0, 0),
        },
        '& .MuiTypography-root': {
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          display: 'block',
          ...theme.typography.bodyBold,
          ...theme.typography.bodyLarge,
          '.Mui-expanded &': {
            overflow: 'visible',
            textOverflow: 'unset',
            whiteSpace: 'normal',
          },
        },
      },
      expandIconWrapper: {
        width: theme.spacing(4),
        height: theme.spacing(4),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        borderRadius: theme.custom.borderRadius.xxl,
        transition: theme.custom.transition.normal,
        '&.Mui-expanded': {
          backgroundColor: theme.palette.action.selected,
        },
        '&:hover': {
          backgroundColor: theme.palette.action.selected,
        },
      },
    },
  },
  MuiAccordionDetails: {
    styleOverrides: {
      root: {
        padding: 0,
        marginTop: theme.spacing(2),
      },
    },
  },
});
