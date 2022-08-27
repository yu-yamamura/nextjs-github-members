import { Card, Image } from 'semantic-ui-react';
import type { User } from '@/domains/models/user';

type Props = { users: User[] };

const MemberList = ({ users = [] }: Props) => (
  <>
    <Card.Group>
      {users.map((user) => (
        <Card
          key={user.id}
          href={`https://github.com/${user.login}`}
          target="_blank"
        >
          <Card.Content>
            <Image
              floated="right"
              size="mini"
              src={user.avatarUrl}
              alt="user's avatar"
            />
            <Card.Header>{user.login}</Card.Header>
            <Card.Meta>GitHub ID: {user.id}</Card.Meta>
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
  </>
);

export default MemberList;
