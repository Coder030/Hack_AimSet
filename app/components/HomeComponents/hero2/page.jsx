import React from "react";
import Image from "next/image";
import wp1 from "@/app/assets/wp-1.png";
import wp2 from "@/app/assets/wp-2.png";
import wp3 from "@/app/assets/wp-3.png";
import MapImage from "@/app/assets/map.png";

function Hero2() {
  // Define JSON data for the cards
  const cardData = [
    {
      image: wp1,
      title: "Solve issues in your community",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur accusantium placeat porro facilis magni libero aliquam perferendis a amet quos, at sed et nostrum nobis, harum ratione error. Adipisci, dolore."
    },
    {
      image: wp2,
      title: "Render assistance to your neighbour",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur accusantium placeat porro facilis magni libero aliquam perferendis a amet quos, at sed et nostrum nobis, harum ratione error. Adipisci, dolore."
    },
    {
      image: wp3,
      title: "Receive assistance in return",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur accusantium placeat porro facilis magni libero aliquam perferendis a amet quos, at sed et nostrum nobis, harum ratione error. Adipisci, dolore."
    }
  ];

  return (
    <div className="flex justify-center flex-col gap-5 relative bg-mine-1 h-fit">
      <h1 className="md:text-[50px] text-center leading-[50px] font-bold text-[#000000] nunito mt-20 text-[40px]">
        Why participate?
      </h1>
      <p className="text-base text-center w-4/5 mx-auto">
        Describe exactly what your product or service does to solve this
        problem.
        <br />
        Avoid using verbose words or phrases.
      </p>
      <br />
      <div className="grid grid-cols-1 lg:grid-cols-3 w-11/12 mx-auto gap-5">
        {cardData.map((card, index) => (
          <div key={index} className="bg-[#FFFFFF] h-auto py-10 
          flex justify-center items-center flex-col p-5
           mb-5 rounded-3xl mx-auto shadow-md">
            <Image src={card.image} alt="map" className="m-0" />
            <p className="md:text-[25px] text-center font-bold text-[#000000] nunito m-7 text-[20px]">
              {card.title}
            </p>
            <p className="text-base text-center">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hero2;
