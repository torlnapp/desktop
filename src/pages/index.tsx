import { Button } from '@vanta-design/desktop/src/components/atom/button';
import { TorlnSymbol } from '@vanta-design/desktop/src/components/atom/torln-symbol';
import { Column } from '@vanta-design/desktop/src/components/layout/column';
import { Row } from '@vanta-design/desktop/src/components/layout/row';
import { fullHeight } from '@vanta-design/desktop/src/styles/utils.css';
import { content, dragRegion } from './styles.css';

export default function () {
  return (
    <>
      <div className={dragRegion} data-tauri-drag-region />
      <Row className={fullHeight} align='center'>
        <Column className={content}>
          <Column className={fullHeight}>
            <TorlnSymbol size={96} />
          </Column>
          <Column gap={8}>
            <Button.Large>Sign in</Button.Large>
            <Button.Large variant='secondary'>Sign up</Button.Large>
          </Column>
        </Column>
      </Row>
    </>
  );
}
