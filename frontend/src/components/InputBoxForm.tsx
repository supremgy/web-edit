import React, { useState } from 'react';

interface Props {
  type: string;
}
const InputBoxForm = ({ type }: Props) => {
  const [input, setInput] = useState('');
  const handle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
    console.log(input);
  };
  return (
    <div className='relative flex items-center my-2'>
      <input
        value={input}
        type={type}
        onChange={handle}
        className={`peer border-2 border-zinc-500 focus:outline-none rounded w-full h-11 p-2 ${
          input && 'border-blue-600'
        }`}
      />
      <span
        className={`absolute duration-200 uppercase left-2 text-lg peer-focus:-translate-y-8 peer-focus:text-sm text-zinc-500 ${
          input && '-translate-y-8 text-sm text-blue-600 peer-focus:text-sm'
        }`}
      >
        {type}
      </span>
    </div>
  );
};

export default InputBoxForm;
