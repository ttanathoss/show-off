import { Operation } from './models';

const hexToRGB = (hex: string) => {
  const hex6 =
    hex.length === 7
      ? hex
      : hex
          .slice(1)
          .split('')
          .reduce((acc, c) => `${acc}${c}${c}`, '#');
  const r = parseInt(hex6.slice(1, 3), 16);
  const g = parseInt(hex6.slice(3, 5), 16);
  const b = parseInt(hex6.slice(5, 7), 16);
  return { r, g, b };
};

const numToHex = (x: number): string => {
  return x.toString(16).padStart(2, '0');
};

const rgbToHEX = (r: number, g: number, b: number): string => {
  return `#${numToHex(r)}${numToHex(g)}${numToHex(b)}`;
};

export const alterColor = (operation: Operation, hex: string, percentage: number): string => {
  const { r, g, b } = hexToRGB(hex);
  const factor = percentage / 100;
  const edge = operation === Operation.Darken ? 0 : 255;
  const nr = Math.round(r + (edge - r) * factor);
  const ng = Math.round(g + (edge - g) * factor);
  const nb = Math.round(b + (edge - b) * factor);
  return rgbToHEX(nr, ng, nb);
};
