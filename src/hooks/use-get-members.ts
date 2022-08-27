import { useEffect, useState } from 'react';
import { User } from '@/domains/models/user';
import { getMembers } from '@/domains/services/getMembers';

type ReturnValue = {
  users: User[];
  isLoading: boolean;
};

export const useGetMembers = (orgCode: string): ReturnValue => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const load = async () => {
      setIsLoading(true);

      try {
        const userData = await getMembers(orgCode);
        setUsers(userData);
      } catch (error) {
        throw Error(`organization '${orgCode}' not exists`);
      } finally {
        setIsLoading(false);
      }
    };

    void load();
  }, [orgCode]);

  return { users, isLoading };
};
