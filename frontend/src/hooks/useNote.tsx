import { fetchNote } from '@/apis/note';
import { useQuery } from '@tanstack/react-query';

export const useNote = (noteId: number) => {
  const noteQuery = useQuery({
    queryKey: ['note', noteId],
    queryFn: async () => await fetchNote(noteId),
  });
  return { note: noteQuery.data };
};
