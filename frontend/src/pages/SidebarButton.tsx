import React from 'react';

interface Props {
  type: string;
  icon: React.ReactNode;
}
const SidebarButton = ({ type, icon }: Props) => {
  return (
    <button className=' flex items-center px-4 py-2 text-base  gap-2 font-semibold text-gray-500'>
      {icon}
      <p>{type}</p>
    </button>
  );
};

export default SidebarButton;
