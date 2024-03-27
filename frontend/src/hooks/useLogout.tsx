import { requestLogout } from '@/apis/user';
import { useAuthStore } from '@/store/authStore';
import { useNavigate } from 'react-router-dom';

export const useLogout = () => {
  const { storeLogout } = useAuthStore();
  const navigate = useNavigate();
  const userLogout = () => {
    requestLogout().then((res) => {
      storeLogout();
      alert(res.message);
      navigate('/');
    });
  };
  return { userLogout };
};
