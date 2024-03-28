import Detail from './Detail';
import { FaUser, FaRegSquarePlus } from 'react-icons/fa6';
import { FiLogOut } from 'react-icons/fi';
import SidebarButton from '../SidebarButton';
import NoteList from '@/components/NoteList';
import { useLogout } from '@/hooks/useLogout';
import { User } from '@/apis/user';
import withAuthenticatedUser from '@/components/hocs/withAuthenticatedUser';
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
  {
    id: 2,
    title: '제목 없음2',
    content: '내용2',
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
  {
    id: 2,
    title: '제목 없음2',
    content: '내용2',
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
  {
    id: 2,
    title: '제목 없음2',
    content: '내용2',
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
  {
    id: 2,
    title: '제목 없음2',
    content: '내용2',
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
  {
    id: 2,
    title: '제목 없음2',
    content: '내용2',
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
  {
    id: 2,
    title: '제목 없음2',
    content: '내용2',
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
  {
    id: 2,
    title: '제목 없음2',
    content: '내용2',
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
  {
    id: 2,
    title: '제목 없음2',
    content: '내용2',
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
  {
    id: 2,
    title: '제목 없음2',
    content: '내용2',
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
  {
    id: 2,
    title: '제목 없음2',
    content: '내용2',
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
  {
    id: 2,
    title: '제목 없음2',
    content: '내용2',
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
  {
    id: 2,
    title: '제목 없음2',
    content: '내용2',
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
  {
    id: 2,
    title: '제목 없음2',
    content: '내용2',
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
  {
    id: 2,
    title: '제목 없음2',
    content: '내용2',
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
  {
    id: 2,
    title: '제목 없음2',
    content: '내용2',
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
  {
    id: 2,
    title: '제목 없음2',
    content: '내용2',
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
  {
    id: 2,
    title: '제목 없음2',
    content: '내용2',
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
  {
    id: 2,
    title: '제목 없음2',
    content: '내용2',
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
  {
    id: 2,
    title: '제목 없음2',
    content: '내용2',
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
  {
    id: 2,
    title: '제목 없음2',
    content: '내용2',
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
  {
    id: 2,
    title: '제목 없음2',
    content: '내용2',
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
  {
    id: 2,
    title: '제목 없음2',
    content: '내용2',
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
  {
    id: 2,
    title: '제목 없음2',
    content: '내용2',
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
  {
    id: 2,
    title: '제목 없음2',
    content: '내용2',
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
  {
    id: 2,
    title: '제목 없음2',
    content: '내용2',
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
  {
    id: 2,
    title: '제목 없음2',
    content: '내용2',
    userId: 1,
    createdAt: '2024-03-25 12:16:53',
    updatedAt: '2024-03-25 12:16:53',
  },
];
interface NoteIndexProps {
  user: User;
}

const Index: React.FC<NoteIndexProps> = ({ user }) => {
  const { userLogout } = useLogout();

  return (
    <div className='flex flex-row h-full w-full max-w-screen-2xl mx-auto justify-center'>
      <div className=' basis-1/6 flex flex-col fixed-element w-30 bg-[#e6e6ea]'>
        <div className=' flex items-center p-4 text-xl gap-2'>
          <FaUser />
          <p className='font-semibold'>{user?.email}</p>
        </div>
        <SidebarButton
          onClick={userLogout}
          type='로그아웃'
          icon={<FiLogOut />}
        />
        <SidebarButton
          onClick={() => {}}
          type='노트 생성'
          icon={<FaRegSquarePlus />}
        />
        <NoteList list={noteList} />
      </div>

      <div className='basis-5/6 scrollable-element overflow-y-auto'>
        <Detail />
      </div>
    </div>
  );
};

export default withAuthenticatedUser(Index);
