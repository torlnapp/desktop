import { getCurrentWindow } from '@tauri-apps/api/window';
import { IconButton } from '@vanta-design/desktop/src/components/atom/button';
import { Container } from '@vanta-design/desktop/src/components/layout/container';
import { Row } from '@vanta-design/desktop/src/components/layout/row';
import { spacing } from '@vanta-design/desktop/src/tokens/attribute.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { type MouseEvent, useCallback } from 'react';
import { wrapper } from './styles.css';

export function TopNavigation() {
  const handleMouseDown = useCallback((e: MouseEvent) => {
    const appWindow = getCurrentWindow();
    if (e.buttons === 1) {
      e.detail === 2 ? appWindow.toggleMaximize() : appWindow.startDragging();
    }
  }, []);

  return (
    <Container
      className={wrapper}
      horizontal='narrow'
      onMouseDown={handleMouseDown}
    >
      <Row gap={spacing[12]} justify='start'>
        <Row>
          <IconButton.Small variant='bare' icon={ChevronLeft} />
          <IconButton.Small variant='bare' icon={ChevronRight} />
        </Row>
      </Row>
    </Container>
  );
}
