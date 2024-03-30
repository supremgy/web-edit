import { fetchNotes } from '@/apis/note';
import { useQuery } from '@tanstack/react-query';

export const useNotes = () => {
  const notesQuerry = useQuery({
    queryKey: ['notes'],
    queryFn: fetchNotes,
  });
  return { notes: notesQuerry.data };
};
