import Image from "next/image";

const Hero = () => {
  return (
    <div data-aos="fade-up" className="relative w-full h-[80vh] bg-[#1f242c] flex justify-center flex-col">
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
        {/* Text Content */}
        <div>
          <h1 className="text-4xl md:text-7xl font-bold text-white">
            Creating your digital story with passion
          </h1>
          {/* Description */}
          <p className="ml-0 md:ml-12 md:mt-10 mt-5 text-sm md:text-base font-semibold text-white">
            payment solutions enable businesses to accept payments payment
            solutions enable businesses to accept payments from customers
            conveniently securely from customers conveniently and securely.
          </p>
          <button type="button" className="px-8 py-3 rounded-full mt-10 ml-0 md:ml-12 text-white font-semibold cursor-pointer hover:bg-[#9f7c4e] focus:bg-[#9f7c4e] transition-all duration-300 outline-2 outline-gray-300">Discover More</button>
        </div>
        {/* Image Content */}
        <div className="absolute top-0 right-48 hidden lg:block">
          <Image src='/images/hero.png' alt="hero banner" width={550} height={550} priority />
        </div>
      </div>
    </div>
  );
};
export default Hero;
