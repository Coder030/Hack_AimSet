"use client";

import React, { useState } from "react";
import Image from "next/image";
import alc from "../../../assets/alc.png";
import arc from "../../../assets/arc.png";
import ph1 from "../../../assets/placeHol1.png";
import ph2 from "../../../assets/ph2.png";
import ph3 from "../../../assets/ph3.png";

function Hero3() {
  const [number, setNumber] = useState(0);
  const all = [
    {
      source: ph1,
      heading: "Lorem Ipsum Dolor Sit1",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis volutpat tortor, sed cursus urna. Nunc molestie nunc sed diam condimentum sagittis. Phasellus dolor diam, semper sed porttitor id, molestie.",
    },
    {
      source: ph2,
      heading: "Lorem Ipsum Dolor Sit2",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis volutpat tortor, sed cursus urna. Nunc molestie nunc sed diam condimentum sagittis. Phasellus dolor diam, semper sed porttitor id, molestie.",
    },
    {
      source: ph3,
      heading: "Lorem Ipsum Dolor Sit3",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis volutpat tortor, sed cursus urna. Nunc molestie nunc sed diam condimentum sagittis. Phasellus dolor diam, semper sed porttitor id, molestie.",
    },
  ];
  return (
    <div>
      <h1
        className="md:text-[50px] text-center leading-[50px] 
      font-bold text-[#000000] nunito mt-20 text-[40px]"
      >
        Success Stories
      </h1>
      <br />
      <p className="text-base text-center">
        Describe exactly what your product or service does to solve this
        problem.
        <br />
        Avoid using verbose words or phrases.
      </p>
      <div class="flex justify-center items-center">
        <div class="relative w-[1312px] h-[615px] bg-[#374853] mx-[20px] rounded-3xl mt-[80px] mb-[40px]">
          <div class="absolute right-0 top-[200px] transform -translate-y-1/2 w-[50%] text-center items-center">
            <h1 class="text-3xl md:text-[50px] md:leading-[60px] font-bold text-[#FFFFFF] nunito text-left mt-[180px]">
              {all[number]["heading"]}
            </h1>
            <br />
            <br />
            <p class="text-lg md:text-[17px] text-[#FFFFFF] nunito relative inline-block text-left">
              {all[number]["body"]}
            </p>
            <br />
            <br />
            <button
              className="text-[#FFFFFF] bg-[#282828] w-fit
        py-2 px-4 rounded-md float-left"
            >
              View more
            </button>
            <div class="absolute w-full h-0.5 bg-white bottom-0 left-0 right-[50%]"></div>
          </div>

          <div className="h-[615px] flex items-center pr-[200px]">
            <Image
              src={all[number]["source"]}
              alt="map"
              className="h-40% w-[40%] md:ml-[80px] lg:ml-[40px] ml-5"
            />
          </div>
        </div>
      </div>

      <div className="text-center">
        <button
          className="mr-10"
          onClick={() => {
            if (number !== 0) {
              setNumber(number - 1);
            }
          }}
        >
          <Image src={alc} alt="map" className="m-0" />
        </button>
        <button
          onClick={() => {
            if (number !== all.length - 1) {
              setNumber(number + 1);
            }
          }}
        >
          <Image src={arc} alt="map" className="m-0" />
        </button>
      </div>
    </div>
  );
}

export default Hero3;
