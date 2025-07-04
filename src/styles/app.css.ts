import { style } from '@vanilla-extract/css';
import { fill } from '@vanta-design/desktop/src/tokens/color.css';

export const app = style({
  width: '100vw',
  height: '100vh',
  backgroundColor: fill.surface.glass,
});
