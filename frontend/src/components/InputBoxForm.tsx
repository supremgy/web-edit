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
  console.log(getValues(type));

  return (
    <>
      <div className='relative flex items-center my-2'>
        <input
          id={type}
          type={type === 'checkPassword' ? 'password' : type}
          className={`peer border-2  focus:outline-none rounded w-full h-11 p-2 ${
            getValues(type) ? 'border-blue-600' : 'border-zinc-500'
          }`}
          {...register(type, { required: true })}
        />
        <label
          htmlFor={type}
          className={`absolute duration-200 uppercase left-2 text-lg peer-focus:-translate-y-8 peer-focus:text-sm  ${
            getValues(type)
              ? '-translate-y-8 text-sm text-blue-600'
              : 'text-zinc-500'
          }`}
        >
          {type}
        </label>
      </div>
      {errors && (
        <div className='flex gap-1 text-red-500 pl-3 -translate-y-5'>
          <p className='capitalize'>{type}</p>
          is required
        </div>
      )}
    </>
  );
};

export default InputBoxForm;
