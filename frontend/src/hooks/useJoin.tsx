import { requestJoin } from '@/apis/user';
import { LoginProps } from '@/components/LoginForm';
import { AxiosError } from 'axios';
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
  return { userJoin };
};
