"use client";

// import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import { IoSearch } from "react-icons/io5";
import Dash from "../components/DashboardComponents/Dash/page";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  // const user = await currentUser();
  const [searchBar, setSearchBar] = useState("");
  const user = {
    firstName: "Kartik",
    lastName: "Garg",
    username: "kartik",
    imageUrl:
      "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18yZzhSWTE3R28zTENJcERUVGRYTEhoT3lKSDAifQ",
  };
  const user2 = {
    image: user.imageUrl,
    firstName: user.firstName,
    lastName: user.lastName,
    username: user.username,
    heading: "Heading Will Go Here",
    About:
      "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ab eius suscipit. Porro corrupti consequuntur eius aliquam a eum sit? Quidem, non corporis? Obcaecati magni aliquid expedita eius! Reiciendis animi et soluta unde itaque perspiciatis in rerum ullam inventore temporibus saepe, alias quo tenetur porro facere veniam, dignissimos maxime non sint consequatur nobis distinctio quis vitae minus. Animi quasi sed ipsa voluptatibus, harum nisi, cum deleniti mollitia dicta omnis dolorem repellat asperiores.",
  };
  // console.log(searchBar);
  return (
    <>
      <div className="bg-[#374853] py-[30px] flex items-center border-b-[1px] border-[#FFFFFF] sticky top-0 left-0 z-50	">
        <div className="flex w-[100%] items-center">
          <p className="text-[#FFFFFF] ml-[3%] text-[25px]">Logo</p>
          <button
            className="text-[#FFFFFF] text-[15px] ml-[6%] focus:border-b-[1.5px] p-[10px]"
            onClick={() => {
              router.push("/initiatives");
            }}
          >
            Initiative feed
          </button>
          <button className="text-[#FFFFFF] text-[15px] ml-[3%] border-b-[1.5px] p-[10px]">
            Dashboard
          </button>
        </div>

        <div className="px-[25px] flex">
          <input
            type="text"
            className="w-[400px] h-[50px] rounded-md focus:outline-none px-[15px]	"
            placeholder="🔎   Search the initiative..."
            value={searchBar}
            onChange={(e) => {
              setSearchBar(e.target.value);
            }}
          />
          <Image
            src={user.imageUrl}
            width={50}
            height={30}
            className="ml-[20px] rounded-full"
          />
        </div>
      </div>

      <div className="bg-[#374853] p-[35px] px-[45px]">
        <p className="text-[25px] text-[#FFFFFF]">
          Welcome back, {user2.firstName} {user2.lastName}!{" "}
        </p>
      </div>
      <div className="bg-[#374853] p-[15px] px-[15px]"></div>
      <Dash
        about={user2.About}
        head={user2.heading}
        user={user2.username}
        img={user2.image}
        searchBar={searchBar}
      />
    </>
  );
}
