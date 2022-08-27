import capitalize from 'lodash/capitalize';
import Head from 'next/head';
import Link from 'next/link';
import { List } from 'semantic-ui-react';
import orgCodes from '@/data/org-codes';
import type { NextPage, GetStaticProps } from 'next';
import styles from '@/styles/pages/Home.module.css';

type Props = { orgCodes: string[] };

export const getStaticProps: GetStaticProps<Props> = () => ({
  props: {
    orgCodes,
  },
});

const Home: NextPage<Props> = ({ orgCodes }) => {
  const title = '会社一覧';

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <header className="app-header">
        <h1>{title}</h1>
      </header>
      <List celled relaxed>
        {orgCodes.map((orgCode) => (
          <List.Item className={styles['list-item']} key={orgCode}>
            <List.Icon name="users" size="large" verticalAlign="middle" />
            <List.Content>
              <Link href={`/${orgCode}/members`}>
                {`${capitalize(orgCode)} のメンバー`}
              </Link>
            </List.Content>
          </List.Item>
        ))}
      </List>
    </>
  );
};

export default Home;
