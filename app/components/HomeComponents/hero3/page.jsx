'use client'
import React, { useState } from "react";
import Image from "next/image";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai"; // Importing React icons

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
        <div className="w-full h-auto bg-[#374853] mx-[20px] rounded-3xl justify-between p-8 mt-[80px] mb-[40px] ">
          <div className="grid grid-cols-1 lg:grid-cols-2 text-[#F5F7F8]">
            <div className="p-5">
              <Image src={currentItem.source} alt="image" className="w-full h-full rounded-2xl" />
            </div>
            <div className="p-5 flex flex-col justify-center gap-5">
              <h2 className="text-2xl font-bold">{currentItem.heading}</h2>
              <p className="text-base">{currentItem.body}</p>
              <button className='text-[#F9FAFB] bg-[#282828] w-fit p-3 rounded-md mt-4 font-bold'>Learn more</button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="text-center">
        <button
          className="mr-10 bg-[#374853] p-3 rounded-full"
          onClick={handlePrev}
          disabled={number === 0}
        >
          <AiOutlineArrowLeft size={32} color="#fff" />
        </button>
        <button 
          onClick={handleNext} 
          disabled={number === all.length - 1}
          className="bg-[#374853] p-3 rounded-full "
        >
          <AiOutlineArrowRight size={32} color="#fff" />
        </button>
      </div>
    </div>
  );
}

export default Hero3;
