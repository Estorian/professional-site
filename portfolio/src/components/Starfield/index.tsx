export { default } from './Starfield';
export type { StarfieldProps } from './Starfield';

// Optional: Export additional types if needed
export interface StarfieldColors {
  dark: {
    star: string;
    glow: string;
  };
  light: {
    star: string;
    glow: string;
  };
}