"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaRegThumbsUp } from "react-icons/fa";

function Page() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [sort, setSort] = useState("New to Old");
  const [radiusKm, setRadiusKm] = useState();
  const [radius, setRadius] = useState();
  const [theme, setTheme] = useState("");
  useEffect(() => {
    setRadius(parseInt(radiusKm) / 111);
  }, [radiusKm]);
  const toggleDropdown1 = () => {
    setIsOpen1(!isOpen1);
  };
  const toggleDropdown2 = () => {
    setIsOpen2(!isOpen2);
  };
  async function getLocation(lat, lon) {
    try {
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`
      );

      if (response.data.display_name) {
        return response.data.display_name;
      } else {
        return "Location not found";
      }
    } catch (error) {
      console.error("Error fetching location:", error);
      return null;
    }
  }
  const [location, setLocation] = useState(null);
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);

  useEffect(() => {
    // Check for Geolocation support
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      return;
    }

    // Request user's location
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error) => {
        setError(`Error getting location: ${error.message}`);
      }
    );
  }, []);
  useEffect(() => {
    if (location) {
      setLat(location.latitude);
      setLon(location.longitude);
    }
  }, [location]);

  const [searchBar, setSearchBar] = useState("");
  const [number, setNumber] = useState(24);
  const router = useRouter();
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
  const [initiatives, setInitiatives] = useState([
    {
      MadeByName: "User Name",
      MadeByUserName: "UserName",
      Img: "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18yZzhSWTE3R28zTENJcERUVGRYTEhoT3lKSDAifQ",
      CreatedAt: "Apr 09, 2024",
      Heading: "Voter 1",
      SubDescription:
        "Corrupti fugit temporibus. Aspernatur eos reiciendis quis. Dolorem suscipit distinctio doloribus est est quam. Nesciunt ut sed quae et tenetur sunt maiores. Quam minus qui qui ipsa illum. Velit cum veniam modi doloremque nemo.",
      topic: "Animal",
      voters: ["userName1", "userName2", "userName3", "userName4", "kartik"],
      votes: 5,
      CreatedAt: "2023-01-01T00:00:00.000Z",
      id: "1",
    },
    {
      MadeByName: "Kartik Garg",
      MadeByUserName: "kartik",
      Img: "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18yZzhSWTE3R28zTENJcERUVGRYTEhoT3lKSDAifQ",
      CreatedAt: "Apr 09, 2 024",
      Heading: "Creator 2",
      SubDescription:
        "Corrupti fugit temporibus. Aspernatur eos reiciendis quis. Dolorem suscipit distinctio doloribus est est quam. Nesciunt ut sed quae et tenetur sunt maiores. Quam minus qui qui ipsa illum. Velit cum veniam modi doloremque nemo.",
      topic: "Animal",
      voters: ["userName1", "userName2", "userName3", "userName4"],
      votes: 4,
      CreatedAt: "2023-02-01T00:00:00.000Z",
      id: "2",
    },
    {
      MadeByName: "User Name",
      MadeByUserName: "UserName",
      Img: "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18yZzhSWTE3R28zTENJcERUVGRYTEhoT3lKSDAifQ",
      CreatedAt: "Apr 09, 2024",
      Heading: "Nothing 3",
      SubDescription:
        "Corrupti fugit temporibus. Aspernatur eos reiciendis quis. Dolorem suscipit distinctio doloribus est est quam. Nesciunt ut sed quae et tenetur sunt maiores. Quam minus qui qui ipsa illum. Velit cum veniam modi doloremque nemo.",
      topic: "Animal",
      voters: [
        "userName1",
        "userName2",
        "userName3",
        "userName4",
        "useName5",
        "userName6",
        "userName7",
        "userName8",
        "userName9",
        "userName10",
      ],
      votes: 10,
      CreatedAt: "2023-03-01T00:00:00.000Z",
      latitude: 14.949843,
      longitude: 75.506604,
      id: "3",
    },
    {
      MadeByName: "User Name",
      MadeByUserName: "UserName",
      Img: "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18yZzhSWTE3R28zTENJcERUVGRYTEhoT3lKSDAifQ",
      CreatedAt: "Apr 09, 2024",
      Heading: "Nothing 4",
      SubDescription:
        "Corrupti fugit temporibus. Aspernatur eos reiciendis quis. Dolorem suscipit distinctio doloribus est est quam. Nesciunt ut sed quae et tenetur sunt maiores. Quam minus qui qui ipsa illum. Velit cum veniam modi doloremque nemo.",
      topic: "Animal",
      voters: [
        "userName1",
        "userName2",
        "userName3",
        "userName4",
        "useName5",
        "userName6",
        "userName7",
        "userName8",
        "userName9",
      ],
      votes: 9,
      CreatedAt: "2023-04-01T00:00:00.000Z",
      latitude: 28.576639,
      longitude: 77.388474,
      id: "4",
    },
    {
      MadeByName: "User Name",
      MadeByUserName: "UserName",
      Img: "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18yZzhSWTE3R28zTENJcERUVGRYTEhoT3lKSDAifQ",
      CreatedAt: "Apr 09, 2024",
      Heading: "Nothing 5",
      SubDescription:
        "Corrupti fugit temporibus. Aspernatur eos reiciendis quis. Dolorem suscipit distinctio doloribus est est quam. Nesciunt ut sed quae et tenetur sunt maiores. Quam minus qui qui ipsa illum. Velit cum veniam modi doloremque nemo.",
      topic: "Events",
      voters: [
        "userName1",
        "userName2",
        "userName3",
        "userName4",
        "useName5",
        "userName6",
        "userName7",
        "userName8",
      ],
      votes: 8,
      CreatedAt: "2023-05-01T00:00:00.000Z",
      latitude: -4.398444,
      longitude: 51.436529,
      id: "5",
    },
  ]);
  useEffect(() => {
    if (sort === "Lowest to Highest Voted") {
      const sortedInitiatives = [...initiatives].sort(
        (a, b) => a.votes - b.votes
      );
      setInitiatives(sortedInitiatives);
    }
    if (sort === "Highest to Lowest voted") {
      const sortedInitiatives = [...initiatives].sort(
        (a, b) => b.votes - a.votes
      );
      setInitiatives(sortedInitiatives);
    }
    if (sort === "New to Old") {
      const sortedInitiatives = [...initiatives].sort(
        (a, b) => new Date(a.CreatedAt) - new Date(b.CreatedAt)
      );
      setInitiatives(sortedInitiatives);
    }
    if (sort === "Old to New") {
      const sortedInitiatives = [...initiatives].sort(
        (a, b) => new Date(b.CreatedAt) - new Date(a.CreatedAt)
      );
      setInitiatives(sortedInitiatives);
    }
  }, [sort]);
  return (
    <>
      <div className="bg-[#374853] py-[30px] flex items-center border-b-[1px] border-[#FFFFFF] sticky top-0 left-0 z-50	">
        <div className="flex w-[100%] items-center">
          <p className="text-[#FFFFFF] ml-[3%] text-[25px]">Logo</p>
          <button
            className="text-[#FFFFFF] text-[15px] ml-[6%] border-b-[1.5px] p-[10px]"
            onClick={() => {
              router.push("/initiatives");
            }}
          >
            Initiative feed
          </button>
          <button
            className="text-[#FFFFFF] text-[15px] ml-[3%] focus:border-b-[1.5px] p-[10px]"
            onClick={() => {
              router.push("/dashboard");
            }}
          >
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
      <div className="bg-[#E0E7EB] p-[30px] w-[300px] ml-[20px] relative bottom-[30px] rounded-xl mb-[30px] mr-[30px]">
        <p className="text-[#374853] text-[20px]">Total initiatives created</p>
        <p className="text-[#374853] text-[25px] mt-[25px]">{number}</p>
      </div>
      <div className="bg-[#E0E7EB] p-[30px] w-[300px] ml-[20px] relative bottom-[30px] rounded-xl mb-[30px] mr-[30px]">
        <p className="text-[#374853] text-[20px]">Sort and Filter</p>
        <select
          className="inline-flex justify-start w-full rounded-md px-4 py-2 text-[#89A1B0] mt-[20px] focus:outline-none mb-[10px] appearance-none	"
          onChange={(e) => {
            setSort(e.target.value);
          }}
        >
          <option value="New to Old">New to Old</option>
          <option value="Old to New">Old to New</option>
          <option value="Highest to Lowest voted">
            Highest to Lowest voted
          </option>
          <option value="Lowest to Highest Voted">
            Lowest to Highest Voted
          </option>
        </select>
        <select
          className="inline-flex justify-start w-full rounded-md px-4 py-2 text-[#89A1B0] mt-[20px] focus:outline-none mb-[10px] appearance-none"
          onChange={(e) => {
            setTheme(e.target.value);
          }}
        >
          <option value="">All</option>
          <option value="Animal">Animal</option>
          <option value="Events">Events</option>
          <option value="Education">Education</option>
          <option value="Volunteering">Volunteering</option>
          <option value="Environment">Environment</option>
          <option value="Health and Sanitation">Health and Sanitation</option>
          <option value="Charity">Charity</option>
          <option value="Women Empowerment">Women Empowerment</option>
          <option value="Traffic and Transportation">
            Traffic and Transportation
          </option>
          <option value="Infrastructure and Utilities">
            Infrastructure and Utilities
          </option>
        </select>
        <input
          type="text"
          className="inline-flex justify-start w-full rounded-md px-4 py-2 text-[#89A1B0] mt-[20px] focus:outline-none"
          placeholder="Enter radius in kms"
          value={radiusKm}
          onChange={(e) => {
            setRadiusKm(e.target.value);
          }}
        />
      </div>
      <div className="bg-[#E0E7EB] p-[30px] rounded-2xl mx-[20px] min-h-[475px] w-[1000px] h-[fit] float-right relative bottom-[535px]">
        <p className="text-[25px] text-[#253037] mb-[10px]">Initiatives</p>
        <hr />
        {initiatives.map((item) => {
          console.log(
            lat,
            lon,
            item.latitude,
            item.longitude,
            radius,
            item.latitude < lat + radius &&
              item.latitude > lat - radius &&
              item.longitude < lon + radius &&
              item.longitude > lon - radius
          );
          if (
            !item.voters.includes(user["username"]) &&
            //prettier-ignore
            !(item.MadeByUserName === user["username"]) &&
            item.topic.includes(theme) &&
            (item.Heading.includes(searchBar) ||
              item.SubDescription.includes(searchBar) ||
              item.MadeByName.includes(searchBar)) &&
            radius &&
            item.latitude < lat + radius &&
            item.latitude > lat - radius &&
            item.longitude < lon + radius &&
            item.longitude > lon - radius
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
                    <p className="text-[20px] text-[#253037]">
                      {item.MadeByName}
                    </p>
                  </div>
                </div>
                <p className="text-[20px] text-[#253037] mb-[20px]">
                  {item.Heading}
                </p>
                <p className="text-[#253037] text-[16px]">
                  {item.SubDescription}
                </p>
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
          } else if (
            !radius &&
            !item.voters.includes(user["username"]) &&
            //prettier-ignore
            !(item.MadeByUserName === user["username"]) &&
            item.topic.includes(theme) &&
            (item.Heading.includes(searchBar) ||
              item.SubDescription.includes(searchBar) ||
              item.MadeByName.includes(searchBar))
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
                    <p className="text-[20px] text-[#253037]">
                      {item.MadeByName}
                    </p>
                  </div>
                </div>
                <p className="text-[20px] text-[#253037] mb-[20px]">
                  {item.Heading}
                </p>
                <p className="text-[#253037] text-[16px]">
                  {item.SubDescription}
                </p>
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
        })}
      </div>
    </>
  );
}

export default Page;
