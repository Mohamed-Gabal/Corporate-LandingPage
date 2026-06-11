import React from "react";

type Props = {
  subTitle: string;
  title: string;
  title2?: string;    
  titleColor?: string;
};

const SectionHeading = ({ subTitle, title, title2, titleColor }: Props) => {
  return (
    <>
      <p className="text-[#b69974] text-lg text-center font-medium tracking-widest">
        {subTitle}
      </p>
      <h2
        style={{ color: titleColor }}
        className="text-3xl md:text-5xl mt-4 text-white text-center font-bold uppercase"
      >
        {title}
        {title2 && <><br />{title2}</>}
      </h2>
    </>
  );
};
export default SectionHeading;