import React from 'react';

interface Props {
  onClick: () => void;
  type: string;
  icon: React.ReactNode;
}
const SidebarButton = ({ type, icon, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className=' flex items-center px-4 py-2 text-base  gap-2 font-semibold text-gray-500'
    >
      {icon}
      <p>{type}</p>
    </button>
  );
};

export default SidebarButton;
