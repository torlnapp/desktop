import { style } from '@vanilla-extract/css';
import { radius } from '@vanta-design/desktop/src/tokens/attribute.css';
import { fill, line } from '@vanta-design/desktop/src/tokens/color.css';
import { padding } from '@vanta-design/desktop/src/tokens/layout.css';

export const app = style({
  margin: `${padding.narrow} ${padding.narrow} ${padding.narrow} 0`,
  border: `1px solid ${line.outline}`,
  borderRadius: radius[12],
  overflow: 'hidden',
});

export const content = style({
  backgroundColor: fill.surface.raised,
});
