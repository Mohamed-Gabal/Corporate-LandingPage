import { WorkProcess_Data } from "@/constant/constant";
import WorkProcessCard from "./WorkProcessCard";
import SectionHeading from "@/components/SectionHeading";

const WorkProcess = () => {
  return (
    <div data-aos="fade-up" className="pt-24 pb-24 bg-white">
      {/* Import SectionHeading Component */}
      <SectionHeading
        subTitle="Work Process"
        title="Transforming ideas into"
        title2="digital reality"
        titleColor="#000000"
      />
      <div className="w-[80%] mx-auto mt-20 grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-14">
        {WorkProcess_Data.map((item) => (
          <WorkProcessCard
            key={item.id}
            data-aos="fade-up"
            number={item.number}
            title={item.title}
            isExtraClass={item.isExtraClass}
          />
        ))}
      </div>
    </div>
  );
};
export default WorkProcess;
