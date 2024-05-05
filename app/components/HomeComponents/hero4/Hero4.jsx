import React from "react";
import Image from "next/image";
import ImageOne from "@/app/assets/ph2.png";
import ImageMap from "@/app/assets/map2.png";

const dummyData = [
  {
    image: ImageOne,
    alt: "Image One",
    title: "Blog title heading will go here 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  },
  {
    image: ImageOne,
    alt: "Image Two",
    title: "Blog title heading will go here 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  },
  {
    image: ImageOne,
    alt: "Image Three",
    title: "Blog title heading will go here 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  },
];

const Hero4 = () => {
  return (
    <div className="relative">
      <div
        className="bg-[#138808] w-[22px] h-[22px] rounded-full
        absolute left-4 md:left-[6rem] hidden md:block"
      />
      <div
        className="bg-[#F5F7F8] flex flex-col h-auto mb-3 gap-4
        w-11/12 mx-auto"
      >
        {/* subheading */}
        <div className="mx-auto">
          <h1 className="md:text-[50px] text-center leading-[50px] font-bold text-[#000000] nunito mt-20 text-[40px]">
            Recent initiative
          </h1>
          <p className="text-center hidden md:block">
            Describe exactly what your product or service does to
            <br />
            solve this problem. Avoid using verbose words or phrases.
          </p>
          <p className="text-center md:hidden block">
            Describe exactly what your product or service
            <br />
            does to solve this problem. Avoid using verbose words or phrases.
          </p>
        </div>
        {/* card blog post */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 
            lg:grid-cols-3 mt-10 gap-4 
             mx-auto rounded-b-3xl"
        >
          {dummyData.map((item, index) => (
            <div key={index} className="shadow-lg mx-auto rounded-b-3xl">
              <Image
                src={item.image}
                alt={item.alt}
                className="m-0 rounded-t-3xl"
                width={500}
                height={300}
              />
              {/* desc */}
              <div className="bg-[#F9FAFB] rounded-b-3xl p-8 ">
                <h6
                  className="md:text-[20px] leading-[20px] font-bold
                             text-[#000000] nunito text-base
                            mb-4"
                >
                  {item.title}
                </h6>
                <p>{item.description}</p>
                <button className="text-[#F9FAFB] bg-[#282828] p-3 rounded-md mt-4">
                  Read more
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero4;
