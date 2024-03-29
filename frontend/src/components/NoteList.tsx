import SidebarButton from '@/pages/SidebarButton';
import { NoteProps } from '@/pages/notes/Index';
import { FaRegFileLines } from 'react-icons/fa6';

export interface NoteListProps {
  notes: { id: number; title: string }[];
}

const NoteList = ({ notes }: NoteListProps) => {
  return (
    <div className=' font-semibold text-gray-500'>
      <p className='pt-3 pl-3 pb-2'>노트 목록</p>
      {notes.map((item) => (
        <SidebarButton
          onClick={() => {}}
          type={item.title}
          icon={<FaRegFileLines />}
        />
      ))}
    </div>
  );
};

export default NoteList;
