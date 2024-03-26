import NoteContentEditor from '@/components/NoteContentEditor';
import NoteTitleInput from '@/components/NoteTitleInput';
import DetailButton from './DetailButton';
const Detail = () => {
  return (
    <div className='flex-grow w-auto h-full'>
      <header className='flex px-6 py-9 items-center justify-between'>
        <NoteTitleInput />

        <div className='flex items-center gap-4'>
          <DetailButton types={'save'} />
          <DetailButton types={'delete'} />
        </div>
      </header>

      <NoteContentEditor />
    </div>
  );
};

export default Detail;
