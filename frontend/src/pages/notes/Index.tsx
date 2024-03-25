import Detail from './Detail';
import { FaUser, FaRegSquarePlus, FaRegFileLines } from 'react-icons/fa6';
import { FiLogOut } from 'react-icons/fi';
export interface NoteProps {
  id: number;
  title: string;
  content: string;
  userId: number;
  createdAt: string;
  updatedAt: string;
}
let noteList: NoteProps[] = [
  {
    id: 1,
    title: '제목 없음1',
    content: '내용1',
    userId: 1,
    createdAt: '2024-03-25 12:16:53',
    updatedAt: '2024-03-25 12:16:53',
  },
  {
    id: 2,
    title: '제목 없음2',
    content: '내용2',
    userId: 1,
    createdAt: '2024-03-25 12:16:53',
    updatedAt: '2024-03-25 12:16:53',
  },
];
const Index = () => {
  return (
    <div className='flex flex-row h-screen'>
      <div className=' basis-1/6 flex flex-col fixed-element w-30 bg-[#e6e6ea]'>
        <div className=' flex items-center p-4 text-xl gap-2'>
          <FaUser className='flex-none' />
          <strong className='flex-1'>sample@exmaple.com</strong>
        </div>
        <button className=' flex items-center px-4 py-2 text-base  gap-2 font-semibold text-gray-500'>
          <FiLogOut />
          <p>로그아웃</p>
        </button>
        <button className=' flex items-center px-4 py-2 text-base gap-2 font-semibold text-gray-500'>
          <FaRegSquarePlus />
          노트 생성
        </button>
        <div className=' font-semibold text-gray-500'>
          <p className='pt-3 pl-3'>노트 목록</p>
          {noteList.map((item) => (
            <button
              key={item.id}
              className=' flex items-center px-4 py-2 text-base gap-2 font-semibold text-gray-500'
            >
              <FaRegFileLines />
              <p>{item.title}</p>
            </button>
          ))}
        </div>
      </div>

      <div className='basis-5/6 scrollable-element overflow-y-auto'>
        <Detail />
      </div>
    </div>
  );
};

export default Index;
