import React from "react";
import Image from "next/image";
import MapImage from "@/app/assets/map.png";
import PeopleImage from "@/app/assets/people.png";

function Hero5() {
  // Footer data
const footerData = [
  {
    title: "General",
    links: [
      { name: "About Us", href: "#" },
      { name: "Terms & Conditions", href: "#" },
      { name: "Privacy Policy", href: "#" },
    ],
  },
  {
    title: "Community",
    links: [
      { name: "Join Community", href: "#" },
      { name: "Community Guidelines", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Contact Us", href: "#" },
      { name: "FAQs", href: "#" },
    ],
  },
];
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
        absolute right-[50%] md:top-[30%] top-[14%] hidden lg:block"
        />
        <h1
          className="lg:text-[50px] leading-[50px] 
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
        absolute right-[20%] bottom-[26%] md:block hidden"
          />
          <Image
            src={MapImage}
            alt="map"
            height={500}
            className="w-1/5 absolute 
  inset-0 translate-y-[17%] translate-x-[126%] hidden lg:flex"
          />
          <div className="flex justify-between h-[350px] w-full mt-20">
            {/* left */}
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-1">
                <h6 className="md:text-[20px] leading-[50px] 
      font-bold text-[#F1F8EC] nunito text-[14px]">Logo</h6>
                <span className="w-full  text-[#F1F8EC]">
                  Make Your <br /> Neighborhood Better
                </span>
              </div>
              <p className="mt-20">
                © 2024 USA, Inc. All rights reserved.
              </p>
            </div>
            {/* right */}
            <div className="grid grid-cols-1 md:grid-cols-3">
            {footerData.map((item, index) => (
              <div key={index} className="flex flex-col">
                <h6 className="md:text-[20px] leading-[50px] 
                font-bold text-[#F1F8EC] nunito text-[14px]">
                  {item.title}
                </h6>
                {item.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.href}
                    className="w-full text-[#F1F8EC] hover:underline"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero5;
