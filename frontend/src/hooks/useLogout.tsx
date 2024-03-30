import { requestLogout } from '@/apis/user';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useLogout = () => {
  const queryClient = useQueryClient();

  const logoutMutation = useMutation({
    mutationFn: requestLogout,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['currnetUser'] });
    },
  });
  return { logout: logoutMutation.mutateAsync };
};
