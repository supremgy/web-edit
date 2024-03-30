import Placeholder from '@tiptap/extension-placeholder';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
interface NoteContentEditorProps {
  content: string;
  onChangeContent(value: string): void;
}
const NoteContentEditor = ({
  content,
  onChangeContent,
}: NoteContentEditorProps) => {
  const extensions = [
    StarterKit,
    Placeholder.configure({
      placeholder: '내용을 입력하세요.',
      emptyNodeClass:
        'first:before:text-gray-400 first:before:float-left first:before:content-[attr(data-placeholder)] first:before:pointer-events-none',
    }),
  ];
  const editor = useEditor({
    extensions,
    content: '',
    editorProps: {
      attributes: {
        class:
          'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl px-6 mx-auto focus:outline-none h-dvh',
      },
    },
  });
  return <>{editor && <EditorContent editor={editor} />}</>;
};

export default NoteContentEditor;
