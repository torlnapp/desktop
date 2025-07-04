import { type JSX, lazy } from 'react';

export function dynamic(component: () => JSX.Element) {
  return lazy(async () => ({ default: component }));
}
