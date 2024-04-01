import {
  FetchNotesResponse,
  Note,
  createNote,
  fetchNote,
  fetchNotes,
} from '@/apis/note';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useCreateNote = () => {
  const queryClient = useQueryClient();
  const createNoteMutate = useMutation({
    mutationFn: createNote,
    onSuccess: (newNote) => {
      queryClient.setQueryData(['notes'], (notes: FetchNotesResponse) => [
        newNote,
        ...notes,
      ]);
    },
  });
  return { createNote: createNoteMutate.mutateAsync };
};
