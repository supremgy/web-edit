import Placeholder from '@tiptap/extension-placeholder';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { useEffect, useRef } from 'react';
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
  const lastChangeHTML = useRef('');

  const editor = useEditor({
    extensions,
    editorProps: {
      attributes: {
        class:
          'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl px-6 mx-auto focus:outline-none h-dvh',
      },
    },
    onUpdate: ({ editor }) => {
      lastChangeHTML.current = editor.getHTML();
      onChangeContent(lastChangeHTML.current);
    },
  });

  useEffect(() => {
    if (lastChangeHTML.current === content || !editor) return;
    editor.commands.setContent(content);
    lastChangeHTML.current = content;
  }, [editor, content]);

  return <>{editor && <EditorContent editor={editor} />}</>;
};

export default NoteContentEditor;
