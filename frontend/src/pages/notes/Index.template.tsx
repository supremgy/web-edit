import NoteList from '@/components/NoteList';
import React from 'react';
import { FaRegSquarePlus, FaUser } from 'react-icons/fa6';
import SidebarButton from '../SidebarButton';
import { FiLogOut } from 'react-icons/fi';
import Detail from './Detail';
import { NoteListProps } from '@/apis/note';
import { Outlet } from 'react-router-dom';

export interface NotesIndexTemplateProps extends NoteListProps {
  currentUserMail: string;
  onClickLogout(): void;
  onClickCreateNote(): void;
}

export const NotesIndexTemplate = (props: NotesIndexTemplateProps) => {
  return (
    <div className='flex  h-dvh w-full max-w-screen-2xl mx-auto justify-center '>
      <div className=' basis-1/6 flex flex-col w-30 bg-[#e6e6ea] overflow-hidden overflow-y-auto'>
        <div className=' flex items-center p-4 text-xl gap-2'>
          <FaUser />
          <p className='font-semibold'>{props.currentUserMail}</p>
        </div>
        <SidebarButton
          onClick={props.onClickLogout}
          type='로그아웃'
          icon={<FiLogOut />}
        />
        <SidebarButton
          onClick={props.onClickCreateNote}
          type='노트 생성'
          icon={<FaRegSquarePlus />}
        />
        <NoteList notes={props.notes} />
      </div>

      <div className='basis-5/6 scrollable-element overflow-y-auto'>
        <Outlet />
      </div>
    </div>
  );
};
