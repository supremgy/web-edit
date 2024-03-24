import { LoginProps } from '@/components/LoginForm';
import { httpClient } from '@/utils/https';
import { AxiosError } from 'axios';

export const fetchCurrentUser = () => {};

interface LoginResponse {
  token: string;
}
export const requestLogin = async (data: LoginProps) => {
  const response = await httpClient.post<LoginResponse>('/login', data);

  return response.data;
};
export const requestLogout = () => {};
export const requestJoin = async (data: LoginProps) => {
  const response = await httpClient.post('/users', data);

  return response.data;
};
