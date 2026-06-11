
import { WorkProcessItem } from "@/types/navigation";

type WorkProcessCardProps = Omit<WorkProcessItem, 'id'>;



const WorkProcessCard = ({ number, title, isExtraClass }: WorkProcessCardProps) => {
  return (
    <div className={`flex items-center gap-3 ${isExtraClass ? 'lg:border-r-2 lg:border-gray-300' : ''}`}>
      <div className='text-[40px] md:text-[60px] lg:text-[80px] font-bold mr-5 leading-none text-amber-600'>{number}</div>
      <div> 
        <h3 className='text-xl text-[#252525] font-semibold'>{title}</h3>
        <p className='lg:w-[90%] mt-3 leading-8 font-medium text-gray-700'>
          Ished fact that a reader will be distrol acted bioliy desig the.ished fact that a reader will be distrol.
        </p>
      </div>
    </div> 
  )
} 
export default WorkProcessCard;
