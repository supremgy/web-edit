import { httpClient } from '@/utils/https';
export interface NoteListProps {
  notes: { id: number; title: string }[];
}

export interface Note {
  id: number;
  title: string;
  content: string;
  userId: number;
  createdAt: string;
  updatedAt: string;
}
export type FetchNotesResponse = Omit<Note, 'content'>[];
const fetchNotes = async () => {
  const { data } = await httpClient.get<FetchNotesResponse>('/notes');
  return data;
};
const fetchNote = async (noteId: number) => {
  const { data } = await httpClient.get<Note>(`/notes/${noteId}`);
  return data;
};
const createNote = () => {};
const updateNote = () => {};
const deleteNote = () => {};
export { fetchNote, fetchNotes, createNote, updateNote, deleteNote };
