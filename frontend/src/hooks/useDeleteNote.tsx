import { FetchNotesResponse, deleteNote } from '@/apis/note';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import React from 'react';

export const useDeleteNote = () => {
  const queryClient = useQueryClient();
  const deleteNoteMutate = useMutation({
    mutationFn: deleteNote,
    onSuccess: (_, noteId) => {
      queryClient.setQueryData(['notes'], (notes: FetchNotesResponse) =>
        notes.filter((note) => note.id !== noteId)
      );
    },
  });
  return { deleteNote: deleteNoteMutate.mutateAsync };
};
