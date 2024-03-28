import { useAuthStore } from '@/store/authStore';
import React, { ComponentType } from 'react';
import { Navigate } from 'react-router-dom';
export interface RedirectChildrenProps {
  children: React.ReactNode;
}
const WithUnauthenticated: React.FC<{ component: ComponentType }> = ({
  component: Component,
}) => {
  const { isLoggedIn } = useAuthStore();

  return isLoggedIn ? <Navigate to='/notes' /> : <Component />;
};

export default WithUnauthenticated;
