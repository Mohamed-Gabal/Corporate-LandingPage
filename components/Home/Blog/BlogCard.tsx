import { BlogItem } from "@/types/navigation";
import Image from "next/image";
import { BiCalendar } from "react-icons/bi";
import { FaRegFolderOpen } from "react-icons/fa";
import { FiArrowDownRight } from "react-icons/fi";

type BlogCardProps = Omit<BlogItem, "id">;

const BlogCard = ({ image, title }: BlogCardProps) => {
  return (
    <div className="bg-gray-100 rounded-lg overflow-hidden">
      <Image
        src={image}
        alt="Blog image"
        width={300}
        height={206}
        className="w-full"
      />
      <div className="p-6">
        <div className="flex items-center justify-between">
          {/* Category */}
          <div className="flex items-center space-x-3">
            <FaRegFolderOpen className="w-6 h-6 text-orange-700" />
            <p className="text-sm text-gray-800 font-semibold">Category</p>
          </div>
          {/* Date */}
          <div className="flex items-center space-x-3">
            <BiCalendar className="w-6 h-6 text-orange-700" />
            <p className="text-sm text-gray-800 font-semibold">
              October 27, 2025
            </p>
          </div>
        </div>
        <h1 className="text-lg mt-4 font-bold text-gray-900 hover:text-blue-700 transition-all duration-300">
          {title}
        </h1>
        {/* Read More Button */}
        <button className="relative inline-block mt-8 cursor-pointer group">
          <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-[2px] uppercase text-[#1a1a1a]">
            Read More
            <FiArrowDownRight className='text-xl text-[#b79d70] transition-transform duration-300 group-hover:translate-x-1' />
          </span>
          {/* Underline */}
          <span className='block w-full h-px group-hover:w-0 transition-all duration-300 bg-[#514f4f] mt-2'></span>
        </button>
      </div>
    </div>
  );
};
export default BlogCard;
