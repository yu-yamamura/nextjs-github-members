import Link from 'next/link';
import { Button, Icon } from 'semantic-ui-react';

const HomeButton = () => (
  <Link href="/">
    <Button basic color="grey">
      <Icon name="home" />
      ホームへ
    </Button>
  </Link>
);

export default HomeButton;
