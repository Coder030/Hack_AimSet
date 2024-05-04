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

  const currentItem = all[number];

  const handleNext = () => {
    if (number < all.length - 1) {
      setNumber(number + 1);
    }
  };

  const handlePrev = () => {
    if (number > 0) {
      setNumber(number - 1);
    }
  };

  return (
    <div>
      <h1 className="md:text-[50px] text-center leading-[50px] font-bold text-[#000000] nunito mt-20 text-[40px]">
        Success Stories
      </h1>
      <br />
      <p className="text-base text-center w-4/5 mx-auto">
        Describe exactly what your product or service does to solve this
        problem.
        <br />
        Avoid using verbose words or phrases.
      </p>
      {/* Display current item */}
      <div className="flex justify-center items-center">
        <div className="w-full h-auto bg-[#374853]
         mx-[20px] rounded-3xl justify-between p-8
         mt-[80px] mb-[40px] ">
          <div className="grid grid-cols-1 lg:grid-cols-2 text-[#F5F7F8]">
            <div className="p-5">
              <Image src={currentItem.source} alt="image" className="w-full h-full" />
            </div>
            <div className="p-5">
              <h2 className="text-2xl font-bold">{currentItem.heading}</h2>
              <p className="text-base">{currentItem.body}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="text-center">
        <button
          className="mr-10"
          onClick={handlePrev}
          disabled={number === 0}
        >
          <Image src={alc} alt="map" className="m-0" />
        </button>
        <button onClick={handleNext} disabled={number === all.length - 1}>
          <Image src={arc} alt="map" className="m-0" />
        </button>
      </div>
    </div>
  );
}

export default Hero3;
