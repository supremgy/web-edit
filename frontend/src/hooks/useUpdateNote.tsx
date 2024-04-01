import { FetchNotesResponse, UpdateNoteRequest, updateNote } from '@/apis/note';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import to from 'await-to-js';
import React from 'react';

export const useUpdateNote = () => {
  const queryClient = useQueryClient();
  const updateNoteMutate = useMutation({
    mutationFn: updateNote,
    onSuccess: (updatedNote) => {
      queryClient.setQueryData(['notes'], (notes: FetchNotesResponse) =>
        notes.map((note) =>
          note.id === updatedNote.id
            ? { ...note, title: updatedNote.title }
            : note
        )
      );
      queryClient.setQueryData(['note', updatedNote.id], () => updatedNote);
    },
  });
  return { updateNote: updateNoteMutate.mutateAsync };
};
