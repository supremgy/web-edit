import { Link } from 'react-router-dom';
import { Button, Container, Input, LoginProps, Title } from './LoginForm';
import { useJoin } from '@/hooks/useJoin';
import { useForm } from 'react-hook-form';

export interface JoinFormProps extends LoginProps {
  checkPassword: string;
}

const JoinForm = () => {
  const { userJoin } = useJoin();
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<JoinFormProps>({});
  const onSubmit = (data: LoginProps) => {
    userJoin(data);
  };
  return (
    <>
      <header className='p-5'>
        <strong className='text-2xl'>Programmers Note Editor</strong>
      </header>
      <Container onSubmit={handleSubmit(onSubmit)}>
        <Title>회원가입</Title>
        <Input
          placeholder='이메일'
          type='email'
          {...register('email', { required: '이메일을 입력해주세요' })}
        />
        {errors.email && <p className='error-text'>{errors.email.message}</p>}
        <Input
          placeholder='비밀번호'
          type='password'
          {...register('password', { required: '비밀번호를 입력해주세요' })}
        />
        {errors.password && (
          <p className='error-text'>{errors.password.message}</p>
        )}
        <Input
          placeholder='비밀번호 확인'
          type='password'
          {...register('checkPassword', {
            required: '비밀번호를 입력해주세요.',
            validate: (value) =>
              value === getValues('password') ||
              '비밀번호가 일치하지 않습니다.',
          })}
        />
        {errors.checkPassword && (
          <p className='error-text'>{errors.checkPassword.message}</p>
        )}

        <Button>회원가입</Button>
        <p className='mt-6'>
          계정이 이미 있으신가요?
          <Link to='/login' className='text-sky-600 hover:underline'>
            로그인하기
          </Link>
        </p>
      </Container>
    </>
  );
};

export default JoinForm;
