import { useAuthStore } from '@/store/authStore';
import { ComponentType, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { User } from '@/apis/user';
import { useCurrentUser } from '@/hooks/useCurrentUser';
interface WithAuthenticatedProps {
  currentUser: User;
}

export const withAuthenticatedUser = (
  Component: React.ComponentType<WithAuthenticatedProps>
): React.FC => {
  return () => {
    const { currentUser } = useCurrentUser();
    const navigate = useNavigate();

    if (!currentUser) {
      return null;
    }
    if (currentUser === 'unauthenticated') {
      navigate('/login');
      return null;
    }
    return <Component currentUser={currentUser} />;
  };
};
