import { style } from '@vanilla-extract/css';
import {
  radius,
  spacing,
} from '@vanta-design/desktop/src/tokens/attribute.css';
import { line } from '@vanta-design/desktop/src/tokens/color.css';

export const wrapper = style({
  width: 'fit-content',
});

export const item = style({
  padding: spacing[8],
});

export const image = style({
  width: 42,
  aspectRatio: '1/1',
  border: `1px solid ${line.outline}`,
  borderRadius: radius[12],
});
