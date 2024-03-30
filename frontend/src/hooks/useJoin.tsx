import { requestJoin } from '@/apis/user';
import { LoginProps } from '@/components/LoginForm';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import to from 'await-to-js';
import { isAxiosError } from 'axios';

export const useJoin = () => {
  const queryClient = useQueryClient();
  const joinMutation = useMutation({
    mutationFn: async (params: LoginProps) => {
      const [error] = await to(requestJoin(params));

      if (isAxiosError(error) && error.response?.status === 409) {
        return {
          result: 'unauthorized' as const,
          message: error.response.data.message,
        };
      }
      if (error) {
        throw error;
      }
      return { result: 'success' as const };
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['currentUser'] });
    },
  });

  return { join: joinMutation.mutateAsync };
};
