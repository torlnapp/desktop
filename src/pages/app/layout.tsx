import { Column } from '@vanta-design/desktop/src/components/layout/column';
import { Row } from '@vanta-design/desktop/src/components/layout/row';
import {
  fullHeight,
  fullWidth,
} from '@vanta-design/desktop/src/styles/utils.css';
import { cn } from '@vanta-design/desktop/src/utils/common';
import { Outlet } from 'react-router-dom';
import { OuterBar } from '~/components/layout/outer-bar';
import { Sidebar } from '~/components/layout/sidebar';
import { TopNavigation } from '~/components/layout/top-navigation';
import { dynamic } from '~/utils/component';
import { app, content } from './layout.css';

function AppLayout() {
  return (
    <Row className={fullHeight} justify='start'>
      <OuterBar />
      <Row className={cn(app, fullWidth)} justify='start'>
        <Sidebar />
        <Column className={cn(content, fullWidth, fullHeight)} justify='start'>
          <TopNavigation />
          <Outlet />
        </Column>
      </Row>
    </Row>
  );
}

export default dynamic(AppLayout);
