import { requestLogin } from '@/apis/user';
import { LoginProps } from '@/components/LoginForm';
import { useAuthStore } from '@/store/authStore';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';

export const useLogin = () => {
  const { storeLogin, storeLogout, isLoggedIn } = useAuthStore();
  const navigate = useNavigate();
  const userLogin = (data: LoginProps) => {
    requestLogin(data)
      .then((res) => {
        storeLogin(res.token);
        window.alert('로그인 되었습니다.');
        navigate('/');
      })
      .catch((err: AxiosError) => {
        if (err instanceof AxiosError && err.response && err.response.data) {
          const { message } = err.response.data as { message: string };
          window.alert(message);
        }
      });
  };
  return { userLogin };
};
