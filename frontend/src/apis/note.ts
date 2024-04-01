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
export type CreateNoteRequest = Pick<Note, 'title' | 'content'>;
const createNote = async (params: CreateNoteRequest) => {
  const { data } = await httpClient.post<Note>('/notes', params);
  console.log(data);

  return data;
};
export type UpdateNoteRequest = {
  id: number;
  title: string;
  content: string;
};
const updateNote = async ({ id, title, content }: UpdateNoteRequest) => {
  const { data } = await httpClient.put(`/notes/${id}`, { title, content });
  return data;
};
const deleteNote = async (noteId: number) => {
  const { data } = await httpClient.delete(`/notes/${noteId}`);
  return data;
};
export { fetchNote, fetchNotes, createNote, updateNote, deleteNote };
