import { Link } from 'react-router-dom';
import { Button, LoginProps } from './LoginForm';
import { useJoin } from '@/hooks/useJoin';
import { useForm } from 'react-hook-form';
import InputBoxForm from './InputBoxForm';

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
    watch,
  } = useForm<JoinFormProps>();
  const onSubmit = (data: LoginProps) => {
    console.log(data);
    // userJoin(data);
  };
  watch(['email', 'password', 'checkPassword']);
  return (
    <>
      <header className='p-5'>
        <strong className='text-2xl'>Programmers Note Editor</strong>
      </header>
      <form
        className='flex flex-col mx-auto max-w-sm my-20 gap-4'
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className='text-5xl font-bold text-center mb-10'>회원가입</h2>
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
        <InputBoxForm
          type='checkPassword'
          register={register}
          getValues={getValues}
          errors={errors.checkPassword}
        />
        {getValues('password') !== getValues('checkPassword') && (
          <p className='text-red-500 pl-3 -translate-y-5'>
            Passwords do not match
          </p>
        )}
        <Button>회원가입</Button>
        <p className='mt-6 text-center'>
          계정이 이미 있으신가요?
          <Link to='/login' className='text-sky-600 hover:underline'>
            로그인하기
          </Link>
        </p>
      </form>
    </>
  );
};

export default JoinForm;
