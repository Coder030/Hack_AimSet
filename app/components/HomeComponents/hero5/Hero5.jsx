import React from "react";
import Image from "next/image";
import MapImage from "@/app/assets/map.png";
import PeopleImage from "@/app/assets/people.png";

function Hero5() {
  return (
    <div
      className="bg-[#374853] w-full 
    h-auto text-[#F1F8EC] p-8 mt-16
    "
    >
      {/* above part  */}
      <div className="flex justify-between gap-5 relative mt-10">
        <div
          className="bg-[#FF9933] w-[22px] h-[22px] rounded-full
        absolute right-[50%] md:top-[30%] top-[14%]"
        />
        <h1
          className="md:text-[50px] leading-[50px] 
      font-bold text-[#F1F8EC] nunito text-[40px]"
        >
          Be part
          <br />
          of the change
        </h1>
        <div className="flex flex-col gap-5">
          <p className="text-base">
            Highlight Unique Selling Proposition (USP) with a short
            <br />
            summary of the key feature and how it benefits customers.
          </p>
          <button
            className="text-[#253037] bg-[#F1F8FC] p-2 rounded-sm
        w-fit
        hover:bg-[#e0e6e9] ease-out duration-200 "
          >
            Join your local community
          </button>
        </div>
      </div>
      {/* bottom part */}
      <div>
        <div className="relative flex justify-between gap-5 mt-10">
          <div
            className="bg-[#ffffff] w-[22px] h-[22px] 
            rounded-full
        absolute left-4 md:left-[6rem] top-5"
          />
          <div
            className="bg-[#138808] w-[22px] h-[22px] rounded-full
        absolute right-[20%] bottom-[60%]"
          />
          <Image
            src={MapImage}
            alt="map"
            height={500}
            className="w-1/5 absolute 
  inset-0 translate-y-[17%] translate-x-[19px] mx-auto hidden md:flex"
          />
          <div className="flex justify-between h-[350px] w-full mt-20">
            {/* left */}
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-1">
                <h6 className="md:text-[20px] leading-[50px] 
      font-bold text-[#F1F8EC] nunito text-[14px]">Logo</h6>
                <span className="w-full md:w-[60%] text-[#F1F8EC]">
                  Make Your Neighborhood Better
                </span>
              </div>
              <p className="mt-20">
                © 2024 USA, Inc. All rights reserved.
              </p>
            </div>
            {/* right */}
            <div className="grid grid-cols-1 lg:grid-cols-3">
              <div className="flex flex-col">
                <h6 className="md:text-[20px] leading-[50px] 
      font-bold text-[#F1F8EC] nunito text-[14px]">General</h6>
                <span className="w-full text-[#F1F8EC]">
                  About Us
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero5;
