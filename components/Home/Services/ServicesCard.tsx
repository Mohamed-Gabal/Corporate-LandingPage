import Image from 'next/image';
import { ServiceItem } from '@/types/navigation';

type ServicesCardProps = Omit<ServiceItem, 'id'>;



const ServicesCard = ({ icon, image }: ServicesCardProps) => {
  return (
    <div className='rounded-lg group overflow-hidden bg-white'>
      <Image src={image} alt='Services image' width={300} height={179} />
      <div className='p-4'>
        <div className='relative w-22 h-22 -mt-14 group-hover:bg-black transition-all duration-200 z-10 ml-auto rounded-lg flex items-center justify-center flex-col bg-[#b69974]'>
          <Image src={icon} alt='Services icon' width={60} height={60} />
        </div>
      </div>
    </div>
  )
}
export default ServicesCard;