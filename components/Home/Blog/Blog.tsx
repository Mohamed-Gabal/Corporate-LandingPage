import SectionHeading from "@/components/SectionHeading";
import BlogCard from "./BlogCard";
import { Blog_Data } from "@/constant/constant";

const Blog = () => {
  return (
    <div data-aos="fade-up" className="pt-16 pb-16 bg-white">
      {/* Import SectionHeading Component */}
      <SectionHeading
        subTitle="Blog"
        title="Latest news & articles "
        title2="From our blog"
        titleColor="#000000"
      />
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-20">
        {Blog_Data.map((item) => (
          <BlogCard key={item.id} data-aos="fade-up" image={item.image} title={item.title} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
