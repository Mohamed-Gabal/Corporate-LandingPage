import Image from "next/image";
import ServicesCard from "./ServicesCard";
import { Services_Data } from "@/constant/constant";

const Services = () => {
  return (
    <div className="pt-20 pb-20 relative">
      {/* Side image pattern */}
      <Image
        src="/images/service_bg.png"
        alt="Services Background"
        width={300}
        height={300}
        className="absolute right-0"
      />
      <div className="w-[80%] mx-auto">
        <h1 className="text-lg text-[#eeb956] font-semibold tracking-widest">Our Services</h1>
        <h2 className="text-3xl md:text-5xl mt-4 font-bold text-white">
          Crafting your digital <br />
          story with passion
        </h2> 
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* Import ServicesCard Component */}
            {Services_Data.map((service) => (
              <ServicesCard key={service.id} image={service.image} icon={service.icon} />
            ))}
        </div>
      </div>
    </div>
  )
};
export default Services;

