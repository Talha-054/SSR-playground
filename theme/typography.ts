import type { Palette, TypographyVariantsOptions } from '@mui/material/styles';

export const createTypography = (palette: Palette): TypographyVariantsOptions => ({
  fontFamily: '"Source Sans Pro", sans-serif',
  // Variants
  bodyLarge: {
    fontSize: '1.125rem',
  },
  body1: {
    fontSize: '1rem',
  },
  bodySmall: {
    fontSize: '0.875rem',
  },
  bodyXSmall: {
    fontSize: '0.75rem',
  },
  bodyXXSmall: {
    fontSize: '0.625rem',
  },
  h1: {
    fontSize: '2.03rem',
  },
  h2: {
    fontSize: '1.8rem',
  },
  h3: {
    fontSize: '1.6rem',
  },
  h4: {
    fontSize: '1.42rem',
  },
  h5: {
    fontSize: '1.27rem',
  },
  bodyThin: {
    fontWeight: 300,
  },
  bodyNormal: {
    fontWeight: 400,
  },
  bodyBold: {
    fontWeight: 600,
  },
  bodyBolder: {
    fontWeight: 700,
  },

  tableCell: {
    fontSize: '1rem', // 16px
    fontWeight: 400, // Regular table text
    lineHeight: 1.5, // 24px
    color: palette.grey[600], // or use palette.text.secondary
  },
  tableCellBold: {
    fontSize: '1rem',
    fontWeight: 600, // Emphasized values (price, totals)
    lineHeight: 1.5,
    color: '#6B6B6B',
  },
});
