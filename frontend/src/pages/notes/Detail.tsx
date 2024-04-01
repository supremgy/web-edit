import NoteContentEditor from '@/components/NoteContentEditor';
import NoteTitleInput from '@/components/NoteTitleInput';
import DetailButton from './DetailButton';
import { withCurrentNote } from '@/components/hocs/withCurrentNote';
import { useEffect, useState } from 'react';
import { useDeleteNote } from '@/hooks/useDeleteNote';
import { useNavigate } from 'react-router-dom';
import { useUpdateNote } from '@/hooks/useUpdateNote';
const Detail = withCurrentNote(({ currentNote }) => {
  const [title, setTitle] = useState(currentNote.title);
  const [content, setContet] = useState(currentNote.content);
  const { deleteNote } = useDeleteNote();
  const { updateNote } = useUpdateNote();
  const navigate = useNavigate();
  useEffect(() => {
    setTitle(currentNote.title);
    setContet(currentNote.content);
  }, [currentNote]);

  const handleSave = async () => {
    await updateNote({
      id: currentNote.id,
      title: title,
      content: content,
    });
    alert('저장되었습니다.');
  };

  const handleDelete = async () => {
    if (!window.confirm('정말로 삭제하시겠습니까?')) return;
    await deleteNote(currentNote.id);
    navigate('/notes');
  };
  return (
    <div className='flex-grow w-auto h-full'>
      <header className='flex px-6 py-9 items-center justify-between'>
        <NoteTitleInput title={title} onChangeTitle={setTitle} />

        <div className='flex items-center gap-4'>
          <DetailButton onClick={handleSave} types={'save'} />
          <DetailButton onClick={handleDelete} types={'delete'} />
        </div>
      </header>

      <NoteContentEditor content={content} onChangeContent={setContet} />
    </div>
  );
});

export default Detail;
