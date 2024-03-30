import { useCurrentUser } from '@/hooks/useCurrentUser';
import { useAuthStore } from '@/store/authStore';
import React, { ComponentType } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

export const withUnauthenticated = (Component: ComponentType): React.FC => {
  return () => {
    const { currentUser } = useCurrentUser();
    const navigate = useNavigate();
    if (!currentUser) {
      return null;
    }
    if (currentUser !== 'unauthenticated') {
      navigate('/notes');
      return null;
    }
    return <Component />;
  };
};
