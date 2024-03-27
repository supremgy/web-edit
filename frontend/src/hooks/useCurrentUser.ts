import { User, fetchCurretUser } from '@/apis/user';
import { useQuery } from '@tanstack/react-query';

const useCurrentUser = () => {
  const { data } = useQuery<User>({
    queryKey: ['user'],
    queryFn: fetchCurretUser,
  });

  return data;
};

export default useCurrentUser;
