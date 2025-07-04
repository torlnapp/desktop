import { Button } from '@vanta-design/desktop/src/components/atom/button';
import { TorlnSymbol } from '@vanta-design/desktop/src/components/atom/torln-symbol';
import { Column } from '@vanta-design/desktop/src/components/layout/column';
import { Row } from '@vanta-design/desktop/src/components/layout/row';
import { fullHeight } from '@vanta-design/desktop/src/styles/utils.css';
import { useNavigate } from 'react-router-dom';
import { dynamic } from '~/utils/component';
import { content, dragRegion } from './styles.css';

function IndexPage() {
  const navigate = useNavigate();

  return (
    <>
      <div className={dragRegion} data-tauri-drag-region />
      <Row className={fullHeight} align='center'>
        <Column className={content}>
          <Column className={fullHeight}>
            <TorlnSymbol size={96} />
          </Column>
          <Column gap={8}>
            <Button.Large onClick={() => navigate('/app')}>
              Sign in
            </Button.Large>
            <Button.Large variant='secondary'>Sign up</Button.Large>
          </Column>
        </Column>
      </Row>
    </>
  );
}

export default dynamic(IndexPage);
