import { useAuthStore } from '@/store/authStore';
import useCurrentUser from '@/hooks/useCurrentUser';
import { ComponentType, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
interface WrappedProps {}
const withAuthenticatedUser = <P extends WrappedProps>(
  WrappedComponent: ComponentType<P>
) => {
  const Component = (props: P) => {
    const { isLoggedIn } = useAuthStore();
    const user = useCurrentUser();
    const navigate = useNavigate();
    useEffect(() => {
      if (!isLoggedIn) {
        navigate('/login');
      }
    }, [isLoggedIn, navigate]);
    return <WrappedComponent {...props} user={user} />;
  };
  return Component;
};
export default withAuthenticatedUser;
