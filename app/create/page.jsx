"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";

import { RiImageAddLine } from "react-icons/ri";

function Page() {
  const [category, setCategory] = useState("Animals");
  const [title, setTitle] = useState("");
  const [votes, setVotes] = useState(50);
  const [voluns, setVoluns] = useState(0);
  const [summary, setSummary] = useState("");
  const [description, setDescription] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [someError, setSomeError] = useState(false);
  const fileInputRef = useRef(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const imageDataUrl = reader.result;
        setSelectedImage(imageDataUrl);
      };
      reader.readAsDataURL(file);
    }
  };
  const user = {
    firstName: "Kartik",
    lastName: "Garg",
    username: "kartik",
    imageUrl:
      "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18yZzhSWTE3R28zTENJcERUVGRYTEhoT3lKSDAifQ",
    email: "garg2012030@gmail.com",
  };
  const user2 = {
    image: user.imageUrl,
    firstName: user.firstName,
    lastName: user.lastName,
    username: user.username,
    heading: "Heading Will Go Here",
    About:
      "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ab eius suscipit. Porro corrupti consequuntur eius aliquam a eum sit? Quidem, non corporis? Obcaecati magni aliquid expedita eius! Reiciendis animi et soluta unde itaque perspiciatis in rerum ullam inventore temporibus saepe, alias quo tenetur porro facere veniam, dignissimos maxime non sint consequatur nobis distinctio quis vitae minus. Animi quasi sed ipsa voluptatibus, harum nisi, cum deleniti mollitia dicta omnis dolorem repellat asperiores.",
    email: user.email,
  };
  return (
    <div>
      <div className="bg-[#374853] py-[30px] flex items-center border-b-[1px] border-[#FFFFFF] sticky top-0 left-0 z-50">
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
          <Image
            src={user.imageUrl}
            width={50}
            height={30}
            className="ml-[20px] rounded-full"
          />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-[1200px] bg-[#f4f4f4] p-[45px]">
          <p className="text-[30px]">Create Initiative</p>
          <p className="my-[20px] text-[20px]">
            Step 1 of 2: Describe your initiaitve
          </p>
          <p className="text-[20px] mb-[15px]">
            Which of these best describe your initiative? (Select only one)
          </p>
          <div className="flex flex-wrap mb-[30px]">
            {[
              "Animals",
              "Infrastructure and Utilities",
              "Events",
              "Education",
              "Volunteering",
              "Environment",
              "Health and Sanitation",
              "Charity",
              "Women Empowerment",
              "Traffic and Transportation",
            ].map((item) => (
              <>
                {category !== item && (
                  <button
                    className="mr-[20px] mt-[10px] border-[1px] px-[10px] py-[5px] rounded-3xl"
                    onClick={() => {
                      setCategory(item);
                    }}
                  >
                    {item}
                  </button>
                )}
                {category === item && (
                  <button className="mr-[20px] mt-[10px] border-[1px] border-[#2DD4BF] px-[10px] py-[5px] rounded-3xl bg-[#CCFBF1]">
                    {item}
                  </button>
                )}
              </>
            ))}
          </div>
          <p className="text-[20px]">Title</p>
          <textarea
            className="flex items-center justify-center w-[100%] bg-[#f4f4f4] border-[1px] border-[#BCCAD3] h-[47px] min-h-[47px] mt-[10px] rounded-lg p-[10px] focus:outline-none mb-[30px]"
            placeholder="What will your initiative be called?"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <p className="text-[20px]">Summary</p>
          <textarea
            className="flex items-center justify-center w-[100%] bg-[#f4f4f4] border-[1px] border-[#BCCAD3] h-[158px] min-h-[47px] mt-[10px] rounded-lg p-[10px] focus:outline-none mb-[30px]"
            placeholder="Write a few words about your initiative..."
            value={summary}
            onChange={(e) => {
              setSummary(e.target.value);
            }}
          />
          <p className="text-[20px]">Details</p>
          <textarea
            className="flex items-center justify-center w-[100%] bg-[#f4f4f4] border-[1px] border-[#BCCAD3] h-[158px] min-h-[47px] mt-[10px] rounded-lg p-[10px] focus:outline-none mb-[30px]"
            placeholder="Provide any necessary details about the initiative..."
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <p className="text-[20px]">Add a cover image</p>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: "none" }}
            ref={fileInputRef}
          />
          {!selectedImage && (
            <div
              className="w-[100%] text-center h-[89px] bg-[#F7FBFD] border-dotted		border-[#58AEE4] flex justify-center items-center mt-[20px] mb-[30px] cursor-pointer rounded-lg"
              onClick={() => fileInputRef.current.click()}
            >
              <div className="flex items-center">
                <RiImageAddLine className="h-[30px] w-[30px] mr-[10px]" />
                Upload an image from your computer
              </div>
            </div>
          )}
          {selectedImage && (
            <div
              className="w-[100%] h-fit mt-[20px] mb-[30px]"
              onClick={() => fileInputRef.current.click()}
            >
              <img
                src={selectedImage}
                alt="Selected"
                className="h-[30%] w-[30%]"
              />
            </div>
          )}
          <p className="text-[20px]">
            Enter the minimum number of votes needed to take action
          </p>
          <div className="flex items-center mt-[10px] mb-[45px]">
            <input
              type="number"
              className="h-[35px] w-[200px] p-[10px] mr-[15px] text-[20px] text-center"
              value={votes}
              onChange={(e) => {
                const value = e.target.value;
                if (value >= 50) {
                  setVotes(value);
                }
              }}
            />
            <p className="text-[20px]">Votes</p>
          </div>
          <p className="text-[20px]">
            Enter the minimum number of volunteers needed to take action
          </p>
          <div className="flex items-center  mt-[10px]">
            <input
              type="number"
              className="h-[35px] w-[200px] p-[10px] mr-[15px] text-[20px] text-center"
              value={voluns}
              onChange={(e) => {
                const value = e.target.value;
                if (value >= 0) {
                  setVoluns(value);
                }
              }}
            />
            <p className="text-[20px]">Volunteers</p>
          </div>
          <button
            className="bg-[#000] text-[#fff] py-[10px] px-[20px] rounded-md mt-[30px]"
            onClick={() => {
              if (
                title !== "" &&
                summary !== "" &&
                description !== "" &&
                selectedImage !== null &&
                category !== "" &&
                votes >= 50 &&
                voluns >= 0
              ) {
                console.log(
                  title,
                  summary,
                  description,
                  selectedImage,
                  category,
                  votes,
                  voluns
                );
              } else {
                setSomeError(true);
              }
            }}
          >
            Publish
          </button>
          {someError && (
            <p className="mt-[20px] text-[#FF0202]">
              ** You left some fields blank... **
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Page;
