import ky, { Options } from 'ky';
import { isUsers } from '@/domains/models/user';
import { DEFAULT_API_OPTIONS } from '@/domains/services/config';
import type { User } from '@/domains/models/user';

export const getMembers = async (
  orgCode: string,
  options?: Options,
): Promise<User[]> => {
  const mergedOptions = {
    ...DEFAULT_API_OPTIONS,
    ...options,
  };
  const response = await ky.get(`orgs/${orgCode}/members`, mergedOptions);
  const members: unknown[] = await response.json();

  if (!isUsers(members)) throw Error('API type error');

  return members;
};
