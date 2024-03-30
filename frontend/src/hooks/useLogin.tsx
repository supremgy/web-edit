import { requestLogin } from '@/apis/user';
import { LoginProps } from '@/components/LoginForm';
import { useAuthStore } from '@/store/authStore';
import { useMutation } from '@tanstack/react-query';
import to from 'await-to-js';
import { isAxiosError } from 'axios';

export const useLogin = () => {
  const { storeLogin } = useAuthStore();
  const loginMutation = useMutation({
    mutationFn: async (params: LoginProps) => {
      const [error, data] = await to(requestLogin(params));
      if (isAxiosError(error) && error.response?.status === 409) {
        return { result: 'unauthorized' as const };
      }
      if (error) {
        throw error;
      }
      storeLogin(data.token);
      return { result: 'success' as const };
    },
  });

  return { login: loginMutation.mutateAsync };
};
