"use client";
import React, { useState } from 'react';
import Nav from './Nav';
import MobileNav from './MobileNav';

const NavContainer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Nav openNav={() => setIsOpen(true)} />
      <MobileNav isOpen={isOpen} closeNav={() => setIsOpen(false)} />
    </>
  );
};
export default NavContainer;