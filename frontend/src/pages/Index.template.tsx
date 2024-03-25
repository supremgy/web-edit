import { Link } from 'react-router-dom';

import { ReactComponent as MussgImage } from '@/assets/mussg.svg';

export const IndexTemplate: React.FC = () => {
  return (
    <div className='px-24 py-72 text-center flex flex-col items-center'>
      <MussgImage />

      <h1 className='text-5xl font-bold mt-0 mr-0 mb-8'>
        Programmers Note Editor
      </h1>

      <p className='text-lg font-normal mt-0 mr-0 mb-12'>
        <strong>Programmers Note Editor</strong>는 웹 브라우저에서 사용할 수
        있는 메모장 서비스입니다.
        <br />
        메모는 클라우드에 저장되어 언제 어디서나 접근할 수 있습니다.
      </p>

      <Link
        to='/login'
        className='inline-block bg-gray-900 text-white rounded-md px-4 py-2 text-base  transition duration-300 ease-in-out hover:bg-gray-800 focus:bg-gray-800 active:bg-gray-700'
      >
        무료로 시작하기
      </Link>

      <footer className='text-sm font-normal text-gray-600 py-10'>
        © 2024 Grepp Co.
      </footer>
    </div>
  );
};
