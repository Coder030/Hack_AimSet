import React from "react";
import Image from "next/image";
import wp1 from "@/app/assets/wp-1.png";
import wp2 from "@/app/assets/wp-2.png";
import wp3 from "@/app/assets/wp-3.png";
import MapImage from "@/app/assets/map.png";

function Hero2() {
  return (
    <div className="flex justify-center flex-col gap-5 relative bg-mine-1 h-fit">
      <h1
        className="md:text-[50px] text-center leading-[50px] 
      font-bold text-[#000000] nunito mt-20 text-[40px]"
      >
        Why participate?
      </h1>
      <p className="text-base text-center">
        Describe exactly what your product or service does to solve this
        problem.
        <br />
        Avoid using verbose words or phrases.
      </p>
      <br />
      <div className="flex flex-wrap justify-center">
        <div className="bg-[#FFFFFF] md:w-[380px] h-fit py-10 ml-[1%] flex justify-center items-center flex-col mb-5 rounded-3xl">
          <Image src={wp1} alt="map" className="m-0" />
          <p className="md:text-[25px] text-center font-bold text-[#000000] nunito m-7 text-[20px]">
            Solve issues in your community
          </p>
          <p className="text-base text-center m-0 w-[350px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequatur accusantium placeat porro facilis magni libero aliquam
            perferendis a amet quos, at sed et nostrum nobis, harum ratione
            error. Adipisci, dolore.
          </p>
        </div>
        <div className="bg-[#FFFFFF] md:w-[380px] h-fit py-10 ml-[5%] flex justify-center items-center flex-col mb-5 rounded-3xl">
          <Image src={wp2} alt="map" className="m-0" />
          <p className="md:text-[25px] text-center font-bold text-[#000000] nunito m-7 text-[20px]">
            Render assistance to your neighbour
          </p>
          <p className="text-base text-center m-0 w-[350px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequatur accusantium placeat porro facilis magni libero aliquam
            perferendis a amet quos, at sed et nostrum nobis, harum ratione
            error. Adipisci, dolore.
          </p>
        </div>
        <div className="bg-[#FFFFFF] md:w-[380px] h-fit py-10 ml-[5%] flex justify-center items-center flex-col md:mb-0 rounded-3xl">
          <Image src={wp3} alt="map" className="m-0" />
          <p className="md:text-[25px] text-center font-bold text-[#000000] nunito m-7 text-[20px]">
            Receive assistance in return
          </p>
          <p className="text-base text-center m-0 w-[350px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequatur accusantium placeat porro facilis magni libero aliquam
            perferendis a amet quos, at sed et nostrum nobis, harum ratione
            error. Adipisci, dolore.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero2;
