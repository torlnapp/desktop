import { Badge } from '@vanta-design/desktop/src/components/atom/badge';
import { Button } from '@vanta-design/desktop/src/components/atom/button';
import { Panel } from '@vanta-design/desktop/src/components/molecule/panel';
import { BookmarkCheck, Box, FileText, HardDrive, Plus } from 'lucide-react';

export function Sidebar() {
  return (
    <Panel>
      <Panel.Header
        imageSrc='/vanta.png'
        name='Vanta Design'
        description='8K members ⋅ Free plan'
      />
      <Panel.Section title='Works'>
        <Panel.Section.Item leadingIcon={Box}>Projects</Panel.Section.Item>
        <Panel.Section.Item
          leadingIcon={BookmarkCheck}
          trailingArea={
            <Badge.Small semantic='caution'>3 assigned</Badge.Small>
          }
        >
          Tasks
        </Panel.Section.Item>
        <Panel.Section.Item
          leadingIcon={HardDrive}
          trailingArea={<Badge.Small semantic='positive'>Good</Badge.Small>}
        >
          Drive
        </Panel.Section.Item>
        <Panel.Section.Item
          leadingIcon={FileText}
          trailingArea={<Badge.Small semantic='neutral'>1.5K</Badge.Small>}
        >
          Documents
        </Panel.Section.Item>
      </Panel.Section>
      <Panel.Section title='Chats'>
        <Button.Small variant='bare' leadingIcon={Plus}>
          Add Chats
        </Button.Small>
      </Panel.Section>
      <Panel.Section title='Directs'>
        <Button.Small variant='bare' leadingIcon={Plus}>
          Add Directs
        </Button.Small>
      </Panel.Section>
    </Panel>
  );
}
