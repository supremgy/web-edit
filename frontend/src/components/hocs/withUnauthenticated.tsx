import { useAuthStore } from '@/store/authStore';
import React, { ComponentType } from 'react';
import { Navigate } from 'react-router-dom';

export const withUnauthenticated = (Component: ComponentType): React.FC => {
  return () => {
    const { isLoggedIn } = useAuthStore();
    if (isLoggedIn) {
      return <Navigate to='/notes' />;
    }
    return <Component />;
  };
};
