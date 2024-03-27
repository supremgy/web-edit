import { LoginProps } from '@/components/LoginForm';
import { httpClient } from '@/utils/https';
import { AxiosError } from 'axios';

export interface User {
  email: string;
  exp: number;
  iat: number;
  userId: number;
}
export const fetchCurretUser = async () => {
  const response = await httpClient.get<User>('/users/me');

  return response.data;
};

interface LoginResponse {
  token: string;
}
export const requestLogin = async (data: LoginProps) => {
  const response = await httpClient.post<LoginResponse>('/login', data);

  return response.data;
};
interface LogoutResponse {
  message: string;
}
export const requestLogout = async () => {
  const response = await httpClient.post<LogoutResponse>('/logout');

  return response.data;
};
export const requestJoin = async (data: LoginProps) => {
  const response = await httpClient.post('/users', data);

  return response.data;
};
