import { style } from '@vanilla-extract/css';

export const dragRegion = style({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: 32,
});

export const content = style({
  width: 350,
  height: '45%',
});
