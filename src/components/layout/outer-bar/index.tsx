import { IconButton } from '@vanta-design/desktop/src/components/atom/button';
import { Column } from '@vanta-design/desktop/src/components/layout/column';
import { Container } from '@vanta-design/desktop/src/components/layout/container';
import { Flex } from '@vanta-design/desktop/src/components/layout/flex';
import { fullHeight } from '@vanta-design/desktop/src/styles/utils.css';
import { spacing } from '@vanta-design/desktop/src/tokens/attribute.css';
import { cn } from '@vanta-design/desktop/src/utils/common';
import { Cog, Plus } from 'lucide-react';
import { image, item, wrapper } from './styles.css';

export function OuterBar() {
  return (
    <Container
      className={cn(wrapper, fullHeight)}
      vertical='wide'
      horizontal='narrow'
    >
      <Column className={fullHeight} align='center'>
        <Container className={fullHeight} horizontal='none'>
          <Column justify='start'>
            <Item />
            <Item />
            <Item />
          </Column>
        </Container>
        <Column gap={spacing[8]}>
          <IconButton.Medium variant='secondary' icon={Plus} />
          <IconButton.Medium variant='secondary' icon={Cog} />
        </Column>
      </Column>
    </Container>
  );
}

function Item() {
  return (
    <Flex className={item}>
      <img className={image} src='vanta.png' alt='example' />
    </Flex>
  );
}
