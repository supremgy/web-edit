import { NoteListProps } from '@/apis/note';
import { FaRegFileLines } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';

const NoteList = ({ notes }: NoteListProps) => {
  return (
    <div className=' font-semibold text-gray-500'>
      <p className='pt-3 pl-3 pb-2'>노트 목록</p>
      {notes.map((note) => (
        <NavLink
          to={`/notes/${note.id}`}
          className={({ isActive }) =>
            `flex items-center p-2 text-base  gap-2 font-semibold ${
              isActive
                ? 'text-black  bg-slate-300 rounded-md duration-300'
                : 'text-gray-500 '
            } `
          }
        >
          {<FaRegFileLines />}
          <p>{note.title}</p>
        </NavLink>
      ))}
    </div>
  );
};

export default NoteList;
