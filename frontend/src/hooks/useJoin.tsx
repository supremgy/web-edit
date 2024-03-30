import { requestJoin } from '@/apis/user';
import { LoginProps } from '@/components/LoginForm';
import { useMutation } from '@tanstack/react-query';
import to from 'await-to-js';
import { AxiosError, isAxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';

export const useJoin = () => {
  const navigate = useNavigate();
  const userJoin = (data: LoginProps) => {
    requestJoin(data)
      .then((res) => {
        window.alert('회원가입이 완료되었습니다.');
        navigate('/login');
      })
      .catch((err: AxiosError) => {
        if (err instanceof AxiosError && err.response && err.response.data) {
          const { message } = err.response.data as { message: string };
          window.alert(message);
        }
      });
  };

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
  });

  return { join: joinMutation.mutateAsync };
};
