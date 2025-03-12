import React from "react";

type SectionTypes = {
  children: React.ReactNode;
  className?: string;
  idName?: "servisi" | "chven";
  divClassName?: string;
};

function Section({ children, className, idName, divClassName }: SectionTypes) {
  return (
    <section className={`  pt-32  pb-10 ${className}`}>
      <span className="scroll-mt-56 opacity-0" id={idName} />
      <div
        className={`mx-auto h-full  w-full max-w-[90%] xl:max-w-[1000px] ${divClassName}`}
      >
        {children}
      </div>
    </section>
  );
}

export default Section;
