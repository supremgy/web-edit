import { useRef, useState } from 'react';
import { FaRegTrashCan, FaRegFloppyDisk } from 'react-icons/fa6';
import styled from 'styled-components';

const Detail = () => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [text, setText] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.currentTarget.value);
    // textarea 높이 조절
    if (textareaRef && textareaRef.current) {
      textareaRef.current.style.height = '0px';
      const scrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = scrollHeight + 'px';
    }
  };
  return (
    <form className='flex-grow w-auto h-full'>
      <header className='flex px-6 py-9 items-center justify-between'>
        <input
          type='text'
          placeholder='제목 없음'
          className='focus:outline-none text-4xl font-semibold w-full'
        />
        <div className='flex items-center gap-4'>
          <button className='border-solid border-2 border-gray-300 w-20 flex items-center justify-evenly text-lg py-2 rounded-lg'>
            <FaRegFloppyDisk />
            <p>저장</p>
          </button>
          <button className='border-solid border-2 border-gray-300 w-20 flex items-center justify-evenly text-lg py-2 rounded-lg'>
            <FaRegTrashCan />
            <p>삭제</p>
          </button>
        </div>
      </header>

      <textarea
        placeholder='내용을 입력하세요'
        ref={textareaRef}
        value={text}
        onChange={onChange}
        className='focus:outline-none w-full min-h-20 resize-none px-6 overflow-hidden'
      ></textarea>
    </form>
  );
};

const DetailStyle = styled.div``;

export default Detail;
