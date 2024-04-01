import { User, fetchCurretUser } from '@/apis/user';
import { useQuery } from '@tanstack/react-query';
import to from 'await-to-js';
import { isAxiosError } from 'axios';

export const useCurrentUser = () => {
  const currentUserQuery = useQuery({
    queryKey: ['currentUser'],
    queryFn: async () => {
      const [error, data] = await to(fetchCurretUser());
      if (isAxiosError(error) && error.response?.status === 401) {
        return 'unauthenticated' as const;
      }

      if (error) {
        throw error;
      }
      return data;
    },
  });
  return { currentUser: currentUserQuery.data };
};
