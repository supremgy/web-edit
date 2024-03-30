export interface NoteTitleInputProps {
  title: string;
  onChangeTitle(value: string): void;
}
const NoteTitleInput = ({ title, onChangeTitle }: NoteTitleInputProps) => {
  return (
    <input
      type='text'
      value={title}
      onChange={(event) => {
        onChangeTitle(event.target.value);
      }}
      placeholder='제목 없음'
      className='focus:outline-none text-4xl font-semibold w-full'
    />
  );
};

export default NoteTitleInput;
