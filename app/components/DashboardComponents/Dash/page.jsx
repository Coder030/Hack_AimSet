"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaRegThumbsUp } from "react-icons/fa";
import "./style.css";
import { useRouter } from "next/navigation";

function Dash(props) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const [theme, setTheme] = useState("");
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const ab = props["about"];
  const head = props["head"];
  const user = props["user"];
  const img = props["img"];
  const search = props["searchBar"];
  const [number, setNumber] = useState(24);
  const [filter, setFilter] = useState("All");
  const initiatives = [
    {
      MadeBy: "User Name",
      user: "UserName",
      Img: img,
      CreatedAt: "Apr 09, 2024",
      Heading: "Heading will go here",
      SubDesc:
        "Corrupti fugit temporibus. Aspernatur eos reiciendis quis. Dolorem suscipit distinctio doloribus est est quam. Nesciunt ut sed quae et tenetur sunt maiores. Quam minus qui qui ipsa illum. Velit cum veniam modi doloremque nemo.",
      topic: "Animal",
      voters: ["userName1", "userName2", "userName3", "userName4", "kartik"],
      id: "1",
    },
    {
      MadeBy: "Kartik Garg",
      user: "kartik",
      Img: img,
      CreatedAt: "Apr 09, 2 024",
      Heading: "Heading will go here",
      SubDesc:
        "Corrupti fugit temporibus. Aspernatur eos reiciendis quis. Dolorem suscipit distinctio doloribus est est quam. Nesciunt ut sed quae et tenetur sunt maiores. Quam minus qui qui ipsa illum. Velit cum veniam modi doloremque nemo.",
      topic: "Animal",
      voters: ["userName1", "userName2", "userName3", "userName4"],
      id: "2",
    },
    {
      MadeBy: "User Name",
      user: "UserName",
      Img: img,
      CreatedAt: "Apr 09, 2024",
      Heading: "Heading will go here",
      SubDesc:
        "Corrupti fugit temporibus. Aspernatur eos reiciendis quis. Dolorem suscipit distinctio doloribus est est quam. Nesciunt ut sed quae et tenetur sunt maiores. Quam minus qui qui ipsa illum. Velit cum veniam modi doloremque nemo.",
      topic: "Animal",
      voters: ["userName1", "userName2", "userName3", "userName4"],
      id: "3",
    },
  ];
  const [all, setAll] = useState(true);
  const [my, setMy] = useState(false);
  const [sup, setSup] = useState(false);
  return (
    <div className="flex">
      <div>
        <div className="bg-[#E0E7EB] p-[30px] w-[300px] ml-[20px] relative	 bottom-[30px] rounded-xl mb-[30px] mr-[30px]">
          <p className="text-[#374853]">Total initiatives created</p>
          <hr />
          <p className="text-[#374853] text-[25px] mt-[25px]">{number}</p>
          <button
            className="text-center w-[100%] bg-[#000] text-[#fff] py-[5px] mt-[20px] font-bold rounded-md"
            onClick={() => {
              router.push("create");
            }}
          >
            Create Initiative
          </button>
        </div>
        <div className="bg-[#E0E7EB] p-[30px] ml-[20px] relative	 bottom-[30px] rounded-xl min-h-[400px] w-[300px] mr-[30px]  h-[fit]">
          <p className="text-[25px] text-[#253037]">About</p>
          <hr className="bg-gray-200" />
          <p className="mt-[30px] text-[20px] text-[#253037]">{head}</p>
          <p className="mt-[15px] font-light text-[#253037]">{ab}</p>
        </div>
      </div>
      <div className="bg-[#E0E7EB] p-[30px] relative bottom-[30px] rounded-2xl m-[20px] mt-0 min-h-[575px] w-[1300px] h-[fit]">
        <p className="text-[25px] text-[#253037] mb-[10px]">Initiatives</p>
        <div className="float-right w-[30%]">
          <div className="relative bottom-[52px] border-b-[1px] pb-[12px]">
            <button
              onClick={toggleDropdown}
              type="button"
              className="inline-flex justify-start w-full rounded-md bg-[#FFFFFF] px-4 py-2 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 text-[#89A1B0]"
              id="options-menu"
              aria-expanded={isOpen}
              aria-haspopup="true"
            >
              {theme && theme}
              {!theme && <p>All</p>}
              {/* Heroicon name: chevron-down */}
              <svg
                className={`-mr-1 ml-auto h-5 w-5 transition-transform transform ${
                  isOpen ? "rotate-180 -mt-100" : "-mb-100"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 12l-6-6 1.5-1.5L10 9l4.5-4.5L16 6l-6 6z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          <div
            className={`${
              isOpen ? "" : "hidden"
            } origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-[#FFFFFF] ring-1 ring-black ring-opacity-5 focus:outline-none relative bottom-[52px]`}
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <div className="py-1" role="none">
              {/* Dropdown items */}
              <button
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
                onClick={() => {
                  setIsOpen(false);
                  setTheme("");
                }}
              >
                All
              </button>
              <button
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
                onClick={() => {
                  setIsOpen(false);
                  setTheme("Animal");
                }}
              >
                Animal
              </button>
              <button
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
                onClick={() => {
                  setIsOpen(false);
                  setTheme("Events");
                }}
              >
                Events
              </button>
              <button
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
                onClick={() => {
                  setIsOpen(false);
                  setTheme("Education");
                }}
              >
                Education
              </button>
              <button
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
                onClick={() => {
                  setIsOpen(false);
                  setTheme("Volunteering");
                }}
              >
                Volunteering
              </button>
              <button
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
                onClick={() => {
                  setIsOpen(false);
                  setTheme("Environment");
                }}
              >
                Environment
              </button>
              <button
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
                onClick={() => {
                  setIsOpen(false);
                  setTheme("Health and Sanitation");
                }}
              >
                Health and Sanitation
              </button>
              <button
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
                onClick={() => {
                  setIsOpen(false);
                  setTheme("Charity");
                }}
              >
                Charity
              </button>
              <button
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
                onClick={() => {
                  setIsOpen(false);
                  setTheme("Women Empowerment");
                }}
              >
                Women Empowerment
              </button>
              <button
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
                onClick={() => {
                  setIsOpen(false);
                  setTheme("Traffic and Transportation");
                }}
              >
                Traffic and Transportation
              </button>
              <button
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
                onClick={() => {
                  setIsOpen(false);
                  setTheme("Infrastructure and Utilities");
                }}
              >
                Infrastructure and Utilities
              </button>
            </div>
          </div>
        </div>
        <hr className="z-50" />
        <div className="flex bg-none mt-[30px] text-[17px] text-[#627F92]">
          {/* border-b-[1.5px] */}
          {!all && (
            <button
              onClick={() => {
                setFilter("All");
                setMy(false);
                setAll(true);
                setSup(false);
              }}
              className="p-[8px] w-[20%] "
            >
              All Initiatives
            </button>
          )}
          {all && (
            <button
              onClick={() => {
                setFilter("All");
                setAll(true);
              }}
              className="p-[8px] w-[20%] text-[#000000] border-b-[1.5px]"
            >
              All Initiatives
            </button>
          )}
          {!my && (
            <button
              className="ml-[10px] w-[20%] p-[8px]"
              onClick={() => {
                setFilter("My");
                setMy(true);
                setAll(false);
                setSup(false);
              }}
            >
              My Initiatives
            </button>
          )}
          {my && (
            <button
              onClick={() => {
                setFilter("My");
                setMy(true);
              }}
              className="p-[8px] w-[20%] text-[#000000] border-b-[1.5px]"
            >
              My Initiatives
            </button>
          )}
          {!sup && (
            <button
              className="ml-[10px] w-[30%] p-[8px]]"
              onClick={() => {
                setFilter("Sup");
                setSup(true);
                setAll(false);
                setMy(false);
              }}
            >
              Supported Initiatives
            </button>
          )}
          {sup && (
            <button
              onClick={() => {
                setFilter("Sup");
                setSup(true);
              }}
              className="p-[8px] w-[30%] text-[#000000] border-b-[1.5px]"
            >
              Supported Initiatives
            </button>
          )}
        </div>
        {initiatives.map((item) => {
          if (
            item.user === user &&
            item.topic.includes(theme) &&
            (filter === "All" || filter === "My") &&
            (item.Heading.includes(search) ||
              item.SubDesc.includes(search) ||
              item.MadeBy.includes(search))
          ) {
            return (
              <div
                className="bg-[#F5F7F8] mt-[16px] p-[20px] rounded-2xl"
                key={item.id}
              >
                {/* <img src={item.Img} alt="" height={30} width={50} /> */}
                <div className="flex items-center mb-[20px]">
                  <Image
                    src={item.Img}
                    alt="profile image"
                    height={20}
                    width={40}
                    className="rounded-full mr-[15px]"
                  />
                  <div>
                    <p className="text-[20px] text-[#253037]">{item.MadeBy}</p>
                  </div>
                </div>
                <p className="text-[20px] text-[#253037] mb-[20px]">
                  {item.Heading}
                </p>
                <p className="text-[#253037] text-[16px]">{item.SubDesc}</p>
                <p className="text-[#FFFFFF] text-[15px] bg-[#58AEE4] w-fit p-[8px] rounded-3xl px-[25px] mt-[14px]">
                  {item.topic}
                </p>
                <hr className="mt-[18px]" />
                <Link
                  href="/"
                  className=" text-[#0F766E] text-[17px] relative top-[10px] underline font-bold"
                >
                  Read more...
                </Link>
              </div>
            );
          }
          if (
            item.voters.includes(user) &&
            item.topic.includes(theme) &&
            (filter === "All" || filter === "Sup") &&
            (item.Heading.includes(search) ||
              item.SubDesc.includes(search) ||
              item.MadeBy.includes(search))
          ) {
            return (
              <div
                className="bg-[#F5F7F8] mt-[16px] p-[20px] rounded-2xl"
                key={item.id}
              >
                {/* <img src={item.Img} alt="" height={30} width={50} /> */}
                <div className="flex items-center mb-[20px]">
                  <Image
                    src={item.Img}
                    alt="profile image"
                    height={20}
                    width={40}
                    className="rounded-full mr-[15px]"
                  />
                  <div>
                    <p className="text-[20px] text-[#253037]">{item.MadeBy}</p>
                  </div>
                </div>
                <p className="text-[20px] text-[#253037] mb-[20px]">
                  {item.Heading}
                </p>
                <p className="text-[#253037] text-[16px]">{item.SubDesc}</p>
                <p className="text-[#FFFFFF] text-[15px] bg-[#58AEE4] w-fit p-[8px] rounded-3xl px-[25px] mt-[14px]">
                  {item.topic}
                </p>
                <hr className="mt-[18px]" />
                <Link
                  href="/"
                  className=" text-[#0F766E] text-[17px] relative top-[10px] underline font-bold"
                >
                  Read more...
                </Link>
                <div className="flex items-center mt-[30px]">
                  <p className="text-[17px] font-bold mr-[10px]">
                    You have supported this
                  </p>
                  <FaRegThumbsUp className="relative bottom-[3.5px] w-[50px] h-[50px] rounded-full p-[15px] bg-[#ebe8e8]" />
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
export default Dash;
