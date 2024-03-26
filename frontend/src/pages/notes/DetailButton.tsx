import { FaRegTrashCan, FaRegFloppyDisk } from 'react-icons/fa6';

const DetailButton = ({ types }: { types: string }) => {
  return (
    <button className='border-solid border-2 border-gray-300 w-20 flex items-center justify-evenly text-lg py-2 rounded-lg'>
      {types && types === 'save' ? <FaRegFloppyDisk /> : <FaRegTrashCan />}
      <p>{types && types === 'save' ? '저장' : '삭제'}</p>
    </button>
  );
};

export default DetailButton;
