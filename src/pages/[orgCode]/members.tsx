import { ParsedUrlQuery } from 'querystring';
import capitalize from 'lodash/capitalize';
import { NextPage } from 'next';
import Head from 'next/head';
import { Divider } from 'semantic-ui-react';
import { useGetMembers } from '@/hooks/use-get-members';
import orgCodes from '@/data/org-codes';
import HomeButton from '@/components/HomeButton';
import MemberList from '@/components/MemberList';
import Spinner from '@/components/Spinner';
import type { GetStaticProps, GetStaticPaths } from 'next';

type Params = ParsedUrlQuery & {
  orgCode: string;
};

type Props = { orgCode: string };

export const getStaticPaths: GetStaticPaths<Params> = () => ({
  paths: orgCodes.map((orgCode) => ({ params: { orgCode } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<Props, Params> = ({ params }) => {
  const { orgCode } = params as Params;

  return {
    props: {
      orgCode,
    },
  };
};

const Members: NextPage<Props> = ({ orgCode = 'UnknownCompany' }) => {
  const title = `${capitalize(orgCode)} の開発メンバー`;
  const { users, isLoading } = useGetMembers(orgCode);

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <header className="app-header">
        <h1>{title}</h1>
      </header>
      {isLoading ? <Spinner /> : <MemberList users={users} />}
      <Divider hidden />
      <HomeButton />
    </>
  );
};

export default Members;
