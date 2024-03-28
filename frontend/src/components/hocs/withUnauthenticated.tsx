import { useAuthStore } from '@/store/authStore';
import React from 'react';
import { Navigate, redirect } from 'react-router-dom';
interface Props {
  children: React.ReactNode;
}
const WithUnauthenticated = ({ children }: Props) => {
  const { isLoggedIn } = useAuthStore();

  return isLoggedIn ? <Navigate to='/notes' /> : <>{children}</>;
};

export default WithUnauthenticated;
