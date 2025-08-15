import '@mui/material/Button';
import '@mui/material/IconButton';
import '@mui/material/Typography';
import '@mui/material/styles';
import type { CSSProperties } from '@mui/system';

//
// ────────────────────────────────────────────────────────────────────────────────
// SECTION 1 — THEME EXTENSIONS (custom.borderRadius, custom.shadow, etc.)
// ────────────────────────────────────────────────────────────────────────────────
//

declare module '@mui/material/styles' {
  interface Theme {
    custom: {
      borderRadius: {
        xs: number;
        sm: number;
        md: number;
        lg: number;
        xl: number;
        xxl: number;
      };
      shadow: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
      };
      transition: {
        fast: string;
        normal: string;
        layout: string;
        default: string;
      };
      border: {
        // 1px borders
        default: string;
        light: string;
        divider: string;

        // 2px borders
        default2: string;
        light2: string;
        dark2: string;
        white: string;
      };

      cardSizes: {
        hero: {
          width: number;
          height: number;
          padding: {
            xs: number;
            sm: number;
          };
        };
      };
    };
  }

  interface ThemeOptions {
    custom?: {
      [K in keyof Theme['custom']]?: Partial<Theme['custom'][K]>;
    };
  }

  //
  // ────────────────────────────────────────────────────────────────────────────────
  // SECTION 2 — PALETTE EXTENSION (custom colors, hover states, etc.)
  // ────────────────────────────────────────────────────────────────────────────────
  //

  interface Palette {
    custom: {
      primaryHover: string;
      primaryHighlight: string;
      secondaryHover: string;
      secondaryHighlight: string;
      successHover: string;
      successBackground: string;
      errorHover: string;
      errorBackground: string;
      warningHover: string;
      warningBackground: string;
      infoHover: string;
      infoBackground: string;
      gradient: string;
      linearGradient: string;
    };
  }

  interface PaletteOptions {
    custom?: Partial<Palette['custom']>;
  }

  //
  // ────────────────────────────────────────────────────────────────────────────────
  // SECTION 3 — TYPOGRAPHY VARIANTS (custom font styles)
  // ────────────────────────────────────────────────────────────────────────────────
  //

  interface TypographyVariants {
    bodyLarge: CSSProperties;
    bodySmall: CSSProperties;
    bodyXSmall: CSSProperties;
    bodyXXSmall: CSSProperties;
    bodyThin: CSSProperties;
    bodyNormal: CSSProperties;
    bodyBold: CSSProperties;
    bodyBolder: CSSProperties;

    // Table
    tableCell: CSSProperties;
    tableCellBold: CSSProperties;
  }

  type TypographyVariantsOptions = {
    [K in keyof TypographyVariants]?: CSSProperties;
  };

  interface BreakpointOverrides {
    xxl: true;
  }
}

//
// ────────────────────────────────────────────────────────────────────────────────
// SECTION 4 — TYPOGRAPHY COMPONENT VARIANT OVERRIDES
// ────────────────────────────────────────────────────────────────────────────────
//

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    bodyLarge: true;
    bodySmall: true;
    bodyXSmall: true;
    bodyXXSmall: true;
    bodyThin: true;
    bodyNormal: true;
    bodyBold: true;
    bodyBolder: true;
    tableCell: true;
    tableCellBold: true;
  }
}

//
// ────────────────────────────────────────────────────────────────────────────────
// SECTION 5 — ICON BUTTON VARIANT OVERRIDES + TYPE-SAFE PROP ENFORCEMENT
// ────────────────────────────────────────────────────────────────────────────────
//

declare module '@mui/material/IconButton' {
  interface IconButtonPropsVariantOverrides {
    contained: true;
    outlined: true;
    ghost: true;
  }
}

// 👇 Disallow color when `variant="ghost"` on IconButton
export type SafeIconButtonProps =
  | (Omit<import('@mui/material').IconButtonProps, 'variant' | 'color'> & {
      variant?: 'contained' | 'outlined';
      color?: import('@mui/material').IconButtonProps['color'];
    })
  | (Omit<import('@mui/material').IconButtonProps, 'variant' | 'color'> & {
      variant: 'ghost';
      color?: never;
    });

//
// ────────────────────────────────────────────────────────────────────────────────
// SECTION 6 — BUTTON VARIANT OVERRIDES + TYPE-SAFE PROP ENFORCEMENT
// ────────────────────────────────────────────────────────────────────────────────
//

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    ghost: true;
  }
}

// 👇 Disallow color when `variant="ghost"` on Button
export type SafeButtonProps =
  | (Omit<import('@mui/material').ButtonProps, 'variant' | 'color'> & {
      variant?: 'contained' | 'outlined' | 'text';
      color?: import('@mui/material').ButtonProps['color'];
    })
  | (Omit<import('@mui/material').ButtonProps, 'variant' | 'color'> & {
      variant: 'ghost';
      color?: never;
    });
