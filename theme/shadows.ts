import type { Theme } from '@mui/material/styles';

const makeShadow = (x: number, y: number, blur: number, color: string, opacity: number): string =>
  `0px ${x}px ${y}px ${blur}px rgba(${color}, ${opacity})`;

const getShadowLevel = (level: number): [number, number, number] => {
  const x =
    level <= 5 ? 2 : level <= 9 ? 3 : level <= 12 ? 4 : level <= 14 ? 5 : level <= 16 ? 6 : 7;
  const y = level + 3;
  const blur = 0;
  return [x, y, blur];
};

export const getShadows = (mode: 'light' | 'dark'): Theme['shadows'] => {
  const isDark = mode === 'dark';
  const baseColor = isDark ? '0, 0, 0' : '34, 33, 33';

  const shadows = ['none']; // level 0

  for (let i = 1; i <= 24; i++) {
    const [x, y, blur] = getShadowLevel(i);
    const opacity = isDark ? 0.48 + i * 0.02 : 0.12;
    shadows.push(makeShadow(x, y, blur, baseColor, opacity));
  }

  return shadows as Theme['shadows'];
};
