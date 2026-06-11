import Image from "next/image";
import AboutProgress from "./AboutProgress";
import SectionHeading from "@/components/SectionHeading ";

const About = () => {
  return (
    <div className="pt-16 pb-16 bg-white">
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Image Content */}
        <div className="relative flex items-center justify-center">
          <Image src={"/images/a3.png"} alt="about us background" width={500} height={500} />
          <Image
            src={"/images/a4.png"}
            alt="about us team"
            width={550}
            height={550}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg md:ml-4 w-[200px] h-[200px] md:w-[550px] md:h-[550px]"
          />
        </div>
        {/* Test Content */}
        <div>
          {/* Import SectionHeading Component */}
          <SectionHeading subTitle="About Us" title="Innovative solutions for digital success" titleColor="#000000" />
          {/* Description */}
          <p className="ml-0 md:ml-12 md:mt-10 mt-5 text-black text-sm md:text-base font-semibold leading-loose">
            Payment solutions enable businesses to accept payments Payment
            solutions enable businesses to accept payments from customers
            conveniently securely from customers conveniently and securely.
          </p>
          {/* Import AboutProgress Component */} 
          <AboutProgress />
        </div>
      </div>
    </div>
  );
};
export default About;
