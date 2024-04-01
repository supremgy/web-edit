import NoteContentEditor from '@/components/NoteContentEditor';
import NoteTitleInput from '@/components/NoteTitleInput';
import DetailButton from './DetailButton';
import { withCurrentNote } from '@/components/hocs/withCurrentNote';
import { useState } from 'react';
const Detail = withCurrentNote(({ currentNote }) => {
  const [title, setTitle] = useState(currentNote.title);
  const [content, setContet] = useState(currentNote.content);

  const handleSave = () => {
    console.log(title, content);
  };
  return (
    <div className='flex-grow w-auto h-full'>
      <header className='flex px-6 py-9 items-center justify-between'>
        <NoteTitleInput title={title} onChangeTitle={setTitle} />

        <div className='flex items-center gap-4'>
          <DetailButton onClick={handleSave} types={'save'} />
          <DetailButton onClick={handleSave} types={'delete'} />
        </div>
      </header>

      <NoteContentEditor content={content} onChangeContent={setContet} />
    </div>
  );
});

export default Detail;
