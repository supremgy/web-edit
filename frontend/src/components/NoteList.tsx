import { NoteListProps } from '@/apis/note';
import SidebarButton from '@/pages/SidebarButton';
import { FaRegFileLines } from 'react-icons/fa6';

const NoteList = ({ notes }: NoteListProps) => {
  return (
    <div className=' font-semibold text-gray-500'>
      <p className='pt-3 pl-3 pb-2'>노트 목록</p>
      {notes.map((note) => (
        <SidebarButton
          key={note.id}
          onClick={() => {}}
          type={note.title}
          icon={<FaRegFileLines />}
        />
      ))}
    </div>
  );
};

export default NoteList;
