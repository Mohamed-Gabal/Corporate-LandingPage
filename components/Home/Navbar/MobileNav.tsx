"use client";
import React from 'react';
import { NAV_LINKS } from '@/constant/constant';
import Link from 'next/link';
import { MdClose } from 'react-icons/md';


type MobileNavProps = {
  isOpen: boolean;
  closeNav: () => void;
};


const MobileNav = ({ isOpen, closeNav }: MobileNavProps) => {
  return (
    <div className={`fixed inset-0 z-50 transition-all duration-500 ${isOpen ? 'visible' : 'invisible'}`}>
      {/* Overlay */}
      <div
        onClick={closeNav}
        className={`fixed inset-0 bg-black transition-opacity duration-500 ${isOpen ? 'opacity-70' : 'opacity-0'}`}
      />

      {/* Nav Panel */}
      <div className={`fixed top-0 left-0 h-full w-[80%] sm:w-[60%] bg-[#9f7c40] z-50
        flex flex-col justify-center gap-8
        transition-transform duration-500
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        {/* Close Button */}
        <MdClose
          onClick={closeNav}
          className='absolute top-6 right-6 w-8 h-8 text-white cursor-pointer'
        />

        {NAV_LINKS.map((link) => (
          <Link href={link.url} key={link.id} onClick={closeNav}>
            <p className='text-white w-fit text-[20px] sm:text-[30px] ml-12 border-b-[1.5px] pb-1 border-white'>
              {link.label}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default MobileNav;