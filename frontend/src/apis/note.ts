import { httpClient } from '@/utils/https';
export interface NoteListProps {
  notes: { id: number; title: string }[];
}
export interface NoteProps {
  id: number;
  title: string;
  content: string;
  userId: number;
  createdAt: string;
  updatedAt: string;
}
export interface Note {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}
export type FetchNotesResponse = Omit<Note, 'content'>[];
const fetchNotes = async () => {
  const { data } = await httpClient.get<FetchNotesResponse>('/notes');
  return data;
};
const fetchNote = async () => {};
const createNote = () => {};
const updateNote = () => {};
const deleteNote = () => {};
export { fetchNote, fetchNotes, createNote, updateNote, deleteNote };
