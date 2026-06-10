
import { AboutProgress_Data } from '@/constant/constant';


const AboutProgress = () => { 
  return (
    <div className='space-y-8 py-6 md:py-10'>
      {AboutProgress_Data.map((item) => (
        <div key={item.id} className='flex items-center gap-6 bg-white rounded-xl shadow-md p-6'>
          {/* Icon */}
          <div className='bg-[#b58b58] p-5 rounded-md flex items-center justify-center'><item.icon /></div>
          {/* Text Progress */}
          <div className='flex-1'>
            <div className='flex items-center justify-between mb-2'>
              <h3 className='font-semibold text-gray-800 text-lg'>{item.title}</h3>
              <p className='font-semibold text-gray-800'>{item.percent}%</p>
            </div>
            <div className='w-full h-2 bg-gray-300 rounded-full overflow-hidden'>
              <div className='h-2 bg-[#b58b58] rounded-full transition-all duration-500' style={{ width: `${item.percent}%`}}></div>
            </div>
          </div>
        </div>
      ))}
    </div> 
  );
}
export default AboutProgress;
