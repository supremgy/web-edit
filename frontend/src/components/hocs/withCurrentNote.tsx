import { Note } from '@/apis/note';
import { useNote } from '@/hooks/useNote';
import { ComponentType } from 'react';
import { useParams } from 'react-router-dom';

interface WithCurrentNoteProps {
  currentNote: Note;
}
export const withCurrentNote = (
  Component: ComponentType<WithCurrentNoteProps>
) => {
  return () => {
    const { noteId } = useParams<'noteId'>();
    const { note } = useNote(Number(noteId));
    if (!note) {
      return null;
    }
    return <Component currentNote={note} />;
  };
};
