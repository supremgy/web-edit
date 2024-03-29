import { useAuthStore } from '@/store/authStore';
import useCurrentUser from '@/hooks/useCurrentUser';
import { ComponentType, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { User } from '@/apis/user';

const withAuthenticatedUser = <P extends User>(
  WrappedComponent: ComponentType<P>
) => {
  const Component = () => {
    const { isLoggedIn } = useAuthStore();
    const user = useCurrentUser();
    const navigate = useNavigate();

    useEffect(() => {
      if (!isLoggedIn) {
        navigate('/login');
      }
    }, [isLoggedIn, navigate, user]);
    return <WrappedComponent {...user} {...({} as P)} />;
  };
  return Component;
};
export default withAuthenticatedUser;
