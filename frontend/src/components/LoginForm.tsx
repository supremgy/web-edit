import { useLogin } from '@/hooks/useLogin';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import InputBoxForm from './InputBoxForm';
import { JoinFormProps } from './JoinForm';
export interface LoginProps {
  email: string;
  password: string;
}
const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    watch,
  } = useForm<JoinFormProps>();
  const { userLogin } = useLogin();
  const onSubmit = (data: JoinFormProps) => {
    userLogin(data);
  };
  watch(['email', 'password']);

  return (
    <>
      <header className='p-5'>
        <strong className='text-2xl'>Programmers Note Editor</strong>
      </header>

      <form
        className='flex flex-col mx-auto max-w-sm my-20 gap-4'
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className='text-5xl font-bold text-center mb-10'>로그인</h2>
        <div className='flex flex-col gap-3'>
          <InputBoxForm
            type='email'
            register={register}
            getValues={getValues}
            errors={errors.email}
          />
          <InputBoxForm
            type='password'
            register={register}
            getValues={getValues}
            errors={errors.password}
          />
        </div>

        <Button>로그인</Button>
        <p className='mt-6 text-center'>
          계정이 없으신가요?
          <Link to='/join' className='px-2 text-sky-600 hover:underline'>
            가입하기
          </Link>
        </p>
      </form>
    </>
  );
};

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
`;

export default LoginForm;
