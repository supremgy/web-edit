import { FaRegTrashCan, FaRegFloppyDisk } from 'react-icons/fa6';

interface DetailButtonProps {
  types: string;
  onClick(): void;
}
const DetailButton = ({ types, onClick }: DetailButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`border-solid border-2 border-gray-300 w-20 flex items-center justify-evenly text-lg py-2 rounded-lg duration-300 ${
        types === 'save'
          ? 'hover:bg-hoverButton active:bg-activeButton'
          : 'hover:bg-delete active:bg-[#A0153E]'
      }`}
    >
      {types && types === 'save' ? <FaRegFloppyDisk /> : <FaRegTrashCan />}
      <p>{types && types === 'save' ? '저장' : '삭제'}</p>
    </button>
  );
};

export default DetailButton;
