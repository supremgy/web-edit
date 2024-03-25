import { useLogin } from '@/hooks/useLogin';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
export interface LoginProps {
  email: string;
  password: string;
}
const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginProps>();
  const { userLogin } = useLogin();
  const onSubmit = (data: LoginProps) => {
    userLogin(data);
  };
  return (
    <>
      <header className='p-5'>
        <strong className='text-2xl'>Programmers Note Editor</strong>
      </header>

      <Container onSubmit={handleSubmit(onSubmit)}>
        <Title>로그인</Title>
        <Input
          type='email'
          placeholder='이메일'
          {...register('email', { required: '이메일을 입력해주세요.' })}
        />
        {errors.email && <p className='error-text'>{errors.email.message}</p>}
        <Input
          type='password'
          placeholder='비밀번호'
          {...register('password', { required: '비밀번호를 입력해주세요.' })}
        />
        {errors.password && (
          <p className='error-text'>{errors.password.message}</p>
        )}
        <Button>로그인</Button>
        <p className='mt-6'>
          계정이 없으신가요?{' '}
          <Link to='/join' className='text-sky-600 hover:underline'>
            가입하기
          </Link>
        </p>
      </Container>
    </>
  );
};

export const Container = styled.form`
  max-width: 400px;
  margin: 60px auto;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .error-text {
    color: tomato;
    margin: 0 0 15px;
  }
`;

export const Title = styled.h2`
  font-size: 48px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 40px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
`;

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
