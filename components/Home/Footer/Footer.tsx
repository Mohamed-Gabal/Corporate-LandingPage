import Logo from "@/components/Helper/Logo";
import { Footer_Services, Footer_Social_Links } from "@/constant/constant";
import Image from "next/image";
import { BiCalendar } from "react-icons/bi";
import { FaPaperPlane, FaPhone } from "react-icons/fa";
import { IoMailOpen } from "react-icons/io5";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Footer = () => {
  return (
    <div className="pt-16 pb-16">
      <div className="w-[80%] mx-auto items-start grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {/* 1st Part */}
        <div>
          {/* Import Logo Component */}
          <Logo />
          {/* Description */}
          <p className="mt-6 text-sm text-gray-300 leading-6 font-semibold">
            Conditions Terms of Use fetwesin Services on the Site Privacy Policy
            and Cookie Policy Your California Privacy Rights Do Not Sell My
            Personal Information Copyright Policy Contact Us
          </p>
          {/* Social Links */}
          <div className="flex items-center space-x-4 mt-6">
            {Footer_Social_Links.map((item) => (
              <div
                key={item.id}
                className={`w-12 h-12 rounded-lg bg-gray-700 flex items-center justify-center flex-col cursor-pointer ${item.hoverColor} transition-all duration-300`}
              >
                <item.icon className="w-6 h-6 text-white" />
              </div>
            ))}
          </div>
        </div>

        {/* 2nd Part */}
        <div className="lg:mx-auto">
          <h3 className="text-lg text-white font-bold">Address</h3>
          <div className="mt-8">
            <div className="flex items-center space-x-5">
              <FaPaperPlane className="w-5 h-5 text-white" />
              <p className="text-sm text-white font-medium">
                Old city street, Usa <br /> New York
              </p>
            </div>
            <div className="mb-5 mt-5 flex items-center space-x-5">
              <FaPhone className="w-5 h-5 text-white" />
              <p className="text-sm text-white font-medium">
                +1 (123) 456-7890
              </p>
            </div>
            <div className="flex items-center space-x-5">
              <IoMailOpen className="w-5 h-5 text-white" />
              <p className="text-sm text-white font-medium">
                example@email.com
              </p>
            </div>
          </div>
        </div>

        {/* 3rd Part */}
        <div className="lg:mx-auto">
          <h3 className="text-lg text-white font-bold">More Services</h3>
          <div className="mt-8">
            {Footer_Services.map((service) => (
              <div key={service} className="flex items-center mb-2">
                <MdKeyboardDoubleArrowRight className="w-7 h-7 text-white" />
                <p className="text-sm text-white font-medium">{service}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 4rd Part */}
        <div className="lg:mx-auto">
          <h3 className="text-lg text-white font-bold">Newsletter</h3>
          <div className="mt-8">
            <p className="text-sm text-white font-medium">
              It is a long established fact that a reader will be distracted
            </p>
            <div className="mt-5 flex items-center space-x-4">
              <Image
                src="/images/f.jpg"
                alt="Footer thumbnail"
                width={80}
                height={80}
                className="rounded-md object-cover"
              />
              <div className="flex-1">
                <div className="flex items-center">
                  <BiCalendar className="w-6 h-6 text-amber-600 mr-2" />
                  <p className="text-white text-sm font-semibold">
                    25 October, 2025
                  </p>
                </div>
                <p className="mt-2 text-white font-bold">
                  The standard chunk of lorem Ipsum
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t-2 w-[80%] mx-auto border-gray-700 mt-8">
        <p className="mt-8 text-gray-300">
          Webdev warriors 2025 | All Rights Reserved
        </p>
      </div>
    </div>
  );
};
export default Footer;
