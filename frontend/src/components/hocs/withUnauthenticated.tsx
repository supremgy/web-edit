import { useAuthStore } from '@/store/authStore';
import { ComponentType, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface WrappedProps {}

const withUnauthenticated = <P extends WrappedProps>(
  WrappedComponent: ComponentType<P>
) => {
  const Component = (props: P) => {
    const { isLoggedIn } = useAuthStore();
    const navigate = useNavigate();
    useEffect(() => {
      if (isLoggedIn) {
        navigate('/notes');
      }
    }, [isLoggedIn, navigate]);
    return <WrappedComponent {...props} />;
  };
  return Component;
};
export default withUnauthenticated;
