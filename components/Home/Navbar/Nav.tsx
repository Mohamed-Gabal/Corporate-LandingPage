import Logo from '@/components/Helper/Logo';
import { NAV_LINKS } from '@/constant/constant';
import Link from 'next/link';
import { HiMiniBars3BottomRight } from 'react-icons/hi2';


type NavProps = {
  openNav: () => void;
};


const Nav = ({ openNav }: NavProps) => {
  return (
    <div className='h-[12vh] bg-[#1f242c] relative z-10 lg:mt-8'>
      <div className='flex items-center justify-between h-full w-[90%] xl:w-[80%] mx-auto'>
        {/* Import Logo Component */}
        <Logo />

        {/* Nav links */}
        <div className='hidden lg:flex items-center space-x-10 text-white'>
          {NAV_LINKS.map((link) => (
            <Link
              href={link.url}
              key={link.id}
              className='text-white hover:text-[#9f7c40] font-semibold transition-all duration-300'
            >
              {link.label}
            </Link>
          ))}
          <button className='px-6 py-3 bg-[#9f7c40] cursor-pointer text-white font-black rounded'>
            Create Account
          </button>
        </div>

        {/* Mobile menu button */}
        <div className='lg:hidden'>
          <HiMiniBars3BottomRight
            onClick={openNav}
            className='w-9 h-9 text-white cursor-pointer'
          />
        </div>
      </div>
    </div>
  );
};
export default Nav;