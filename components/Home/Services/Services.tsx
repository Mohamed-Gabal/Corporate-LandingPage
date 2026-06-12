import Image from "next/image";
import ServicesCard from "./ServicesCard";
import { Services_Data } from "@/constant/constant";
import SectionHeading from "@/components/SectionHeading";

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
      <div data-aos="fade-up" className="w-[80%] mx-auto">
        {/* Import SectionHeading Component */}
        <SectionHeading
          subTitle="Our Services"
          title="Transforming ideas into"
          title2="digital reality"
        />
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* Import ServicesCard Component */}
          {Services_Data.map((service) => (
            <ServicesCard
              key={service.id}
              data-aos="fade-up"
              image={service.image}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Services;
