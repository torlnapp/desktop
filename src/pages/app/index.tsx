import { Typo } from '@vanta-design/desktop/src/components/atom/typography';
import { dynamic } from '~/utils/component';

function AppIndexPage() {
  return <Typo.Body>AppIndexPage</Typo.Body>;
}

export default dynamic(AppIndexPage);
