import { Column } from '@vanta-design/desktop/src/components/layout/column';
import { fullHeight } from '@vanta-design/desktop/src/styles/utils.css';
import { cn } from '@vanta-design/desktop/src/utils/common';
import { wrapper } from './styles.css';

export function Sidebar() {
  return <Column className={cn(wrapper, fullHeight)} shrink={false}></Column>;
}
