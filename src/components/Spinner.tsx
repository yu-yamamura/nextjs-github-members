import { Dimmer, Loader, Segment } from 'semantic-ui-react';
import styles from '@/styles/components/Spinner.module.css';

const Spinner = () => (
  <Segment className={styles.spinner}>
    <Dimmer active inverted>
      <Loader inverted={false}>読み込み中...</Loader>
    </Dimmer>
  </Segment>
);

export default Spinner;
