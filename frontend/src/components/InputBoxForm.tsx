import React, { useState } from 'react';
import { LoginProps } from './LoginForm';
import {
  FieldError,
  FieldErrors,
  UseFormGetValues,
  UseFormRegister,
} from 'react-hook-form';
import { JoinFormProps } from './JoinForm';

type Input = 'email' | 'password' | 'checkPassword';
interface Props {
  type: Input;
  register: UseFormRegister<JoinFormProps>;
  getValues: UseFormGetValues<JoinFormProps>;
  errors: FieldError | undefined;
}
const InputBoxForm = ({ type, register, getValues, errors }: Props) => {
  return (
    <div className='relative flex items-center my-2'>
      <input
        type={type === 'checkPassword' ? 'password' : type}
        className={`bg-transparent z-10 peer border-2  focus:outline-none rounded w-full h-11 p-2 ${
          getValues(type) ? 'border-blue-600' : 'border-zinc-500'
        }`}
        {...register(type, { required: true })}
      />
      <span
        className={`absolute z-0 duration-200 uppercase left-2 text-lg peer-focus:-translate-y-8 peer-focus:text-sm text-zinc-500 ${
          getValues(type) &&
          '-translate-y-8 text-sm text-blue-600 peer-focus:text-sm'
        }`}
      >
        {type}
      </span>
      {errors && <p>testss</p>}
    </div>
  );
};

export default InputBoxForm;
