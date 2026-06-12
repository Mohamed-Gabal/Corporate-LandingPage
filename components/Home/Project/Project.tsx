"use client";

import SectionHeading from "@/components/SectionHeading";
import { Projects_Images } from "@/constant/constant";
import Image from "next/image";
import Tilt from "react-parallax-tilt";

const Project = () => {
  return (
    <div data-aos="fade-up" className="pt-16 pb-16 bg-black">
      {/* Import SectionHeading Component */}
      <SectionHeading
        subTitle="Portfolio"
        title="Transforming ideas into"
        title2="digital reality"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-20 w-[80%] mx-auto gap-6">
        {Projects_Images.map((image, index) => (
          <div key={image} data-aos="fade-up">
            <Tilt>
              <Image
                src={image}
                alt={`Project image ${index + 1}`}
                width={450}
                height={550}
                className="rounded-md"
              />
            </Tilt>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Project;
