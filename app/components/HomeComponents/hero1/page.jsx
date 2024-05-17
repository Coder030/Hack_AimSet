import React from "react";
import Image from "next/image";
import MapImage from "../../../assets/map.png";
import PeopleImage from "../../../assets/people.png";

function Hero1() {
  return (
    <div
      className="bg-[#374853] w-full 
    h-auto text-[#F1F8EC]
    "
    >
      <div className="flex justify-center flex-col gap-5 relative">
        <div
          className="bg-[#FF9933] w-[22px] h-[22px] rounded-full
        absolute right-[10%] md:top-[30%] top-[14%]"
        />
        <h1
          className="md:text-[50px] text-center leading-[50px] 
      font-bold text-[#F1F8EC] nunito mt-20 text-[40px]"
        >
          Resonate with the <br />
          visitor's problem
        </h1>
        <p className="text-base text-center">
          Describe exactly what your product or service does to solve this
          problem.
          <br />
          Avoid using verbose words or phrases.
        </p>
        <button
          className="text-[#253037] bg-[#F1F8FC] p-2 rounded-sm
        lg:w-1/5 md:w-2/5 w-3/5 mx-auto hover:bg-[#e0e6e9] ease-out duration-200 "
        >
          Join your local community
        </button>
      </div>
      <div>
        <div className="relative">
          <div
            className="bg-[#138808] w-[22px] h-[22px] rounded-full
        absolute left-4 md:left-[6rem]"
          />
          <div
            className="bg-[#FFFFFF] w-[22px] h-[22px] rounded-full
        absolute right-[20%] bottom-[60%]"
          />

          <Image
            src={MapImage}
            alt="map"
            height={500}
            className="w-1/5 absolute 
  inset-0 translate-y-[104%] translate-x-[19px] mx-auto hidden md:flex"
          />
          <Image
            src={PeopleImage}
            alt="people"
            height={500}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero1;
