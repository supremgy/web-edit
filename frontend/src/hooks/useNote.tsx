import { fetchNote } from '@/apis/note';
import { useQuery } from '@tanstack/react-query';

export const useNote = (noteId: number) => {
  const noteQuery = useQuery({
    queryKey: ['note', noteId],
    queryFn: () => fetchNote(noteId),
  });
  return { note: noteQuery.data };
};
