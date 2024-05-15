"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { PiThumbsUpBold } from "react-icons/pi";
import { LuShare2 } from "react-icons/lu";
import { toast } from "sonner";

import Image from "next/image";

function Page(params) {
  const router = useRouter();
  const [voted, setVoted] = useState(false);
  const [main, setMain] = useState({});
  const [others, setOthers] = useState([]);
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
      UserImageUrl:
        "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18yZzhSWTE3R28zTENJcERUVGRYTEhoT3lKSDAifQ",
      CreatedAt: "Apr 09, 2024",
      Heading: "Voter 1",
      SubDescription:
        "Corrupti fugit temporibus. Aspernatur eos reiciendis quis. Dolorem suscipit distinctio doloribus est est quam. Nesciunt ut sed quae et tenetur sunt maiores. Quam minus qui qui ipsa illum. Velit cum veniam modi doloremque nemo.",
      Description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacinia eu erat venenatis elementum. Proin non dolor dapibus, posuere risus ac, tempus erat. Nullam porta lacus a risus mattis, at dapibus risus sodales. Aenean tincidunt massa nulla, non mollis dolor sagittis vel. In hac habitasse platea dictumst. Praesent maximus tincidunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacinia eu erat venenatis elementum. Proin non dolor dapibus, posuere risus ac, tempus erat. Nullam porta lacus a risus mattis, at dapibus risus sodales. Aenean tincidunt massa nulla, non mollis dolor sagittis vel. In hac habitasse platea dictumst. Praesent maximus tincidunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacinia eu erat venenatis elementum. Proin non dolor dapibus, posuere risus ac, tempus erat. Nullam porta lacus a risus mattis, at dapibus risus sodales. Aenean tincidunt massa nulla, non mollis dolor sagittis vel. In hac habitasse platea dictumst. Praesent maximus tincidunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacinia eu erat venenatis elementum. Proin non dolor dapibus, posuere risus ac, tempus erat. Nullam porta lacus a risus mattis, at dapibus risus sodales. Aenean tincidunt massa nulla, non mollis dolor sagittis vel. In hac habitasse platea dictumst. Praesent maximus tincidunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacinia eu erat venenatis elementum. Proin non dolor dapibus, posuere risus ac, tempus erat. Nullam porta lacus a risus mattis, at dapibus risus sodales. Aenean tincidunt massa nulla, non mollis dolor sagittis vel. In hac habitasse platea dictumst. Praesent maximus tincidunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacinia eu erat venenatis elementum. Proin non dolor dapibus, posuere risus ac, tempus erat. Nullam porta lacus a risus mattis, at dapibus risus sodales. Aenean tincidunt massa nulla, non mollis dolor sagittis vel. In hac habitasse platea dictumst. Praesent maximus tincidunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacinia eu erat venenatis elementum. Proin non dolor dapibus, posuere risus ac, tempus erat. Nullam porta lacus a risus mattis, at dapibus risus sodales. Aenean tincidunt massa nulla, non mollis dolor sagittis vel. In hac habitasse platea dictumst. Praesent maximus tincidunt.",
      topic: "Animal",
      voters: ["userName1", "userName2", "userName3", "userName4"],
      votes: 5,
      required: 60,
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1667419102563-e212046376c4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGxhbnR8ZW58MHx8MHx8fDA%3D",
      CreatedAt: "2023-01-01T00:00:00.000Z",
      id: "1",
    },
    {
      MadeByName: "Kartik Garg",
      Description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacinia eu erat venenatis elementum. Proin non dolor dapibus, posuere risus ac, tempus erat. Nullam porta lacus a risus mattis, at dapibus risus sodales. Aenean tincidunt massa nulla, non mollis dolor sagittis vel. In hac habitasse platea dictumst. Praesent maximus tincidunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacinia eu erat venenatis elementum. Proin non dolor dapibus, posuere risus ac, tempus erat. Nullam porta lacus a risus mattis, at dapibus risus sodales. Aenean tincidunt massa nulla, non mollis dolor sagittis vel. In hac habitasse platea dictumst. Praesent maximus tincidunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacinia eu erat venenatis elementum. Proin non dolor dapibus, posuere risus ac, tempus erat. Nullam porta lacus a risus mattis, at dapibus risus sodales. Aenean tincidunt massa nulla, non mollis dolor sagittis vel. In hac habitasse platea dictumst. Praesent maximus tincidunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacinia eu erat venenatis elementum. Proin non dolor dapibus, posuere risus ac, tempus erat. Nullam porta lacus a risus mattis, at dapibus risus sodales. Aenean tincidunt massa nulla, non mollis dolor sagittis vel. In hac habitasse platea dictumst. Praesent maximus tincidunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacinia eu erat venenatis elementum. Proin non dolor dapibus, posuere risus ac, tempus erat. Nullam porta lacus a risus mattis, at dapibus risus sodales. Aenean tincidunt massa nulla, non mollis dolor sagittis vel. In hac habitasse platea dictumst. Praesent maximus tincidunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacinia eu erat venenatis elementum. Proin non dolor dapibus, posuere risus ac, tempus erat. Nullam porta lacus a risus mattis, at dapibus risus sodales. Aenean tincidunt massa nulla, non mollis dolor sagittis vel. In hac habitasse platea dictumst. Praesent maximus tincidunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacinia eu erat venenatis elementum. Proin non dolor dapibus, posuere risus ac, tempus erat. Nullam porta lacus a risus mattis, at dapibus risus sodales. Aenean tincidunt massa nulla, non mollis dolor sagittis vel. In hac habitasse platea dictumst. Praesent maximus tincidunt.",
      MadeByUserName: "kartik",
      UserImageUrl:
        "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18yZzhSWTE3R28zTENJcERUVGRYTEhoT3lKSDAifQ",
      CreatedAt: "Apr 09, 2 024",
      Heading: "Creator 2",
      SubDescription:
        "Corrupti fugit temporibus. Aspernatur eos reiciendis quis. Dolorem suscipit distinctio doloribus est est quam. Nesciunt ut sed quae et tenetur sunt maiores. Quam minus qui qui ipsa illum. Velit cum veniam modi doloremque nemo.",
      topic: "Animal",
      voters: ["userName1", "userName2", "userName3", "userName4"],
      votes: 4,
      required: 60,
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1667419102563-e212046376c4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGxhbnR8ZW58MHx8MHx8fDA%3D",
      CreatedAt: "2023-02-01T00:00:00.000Z",
      id: "2",
    },
    {
      MadeByName: "User Name",
      Description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacinia eu erat venenatis elementum. Proin non dolor dapibus, posuere risus ac, tempus erat. Nullam porta lacus a risus mattis, at dapibus risus sodales. Aenean tincidunt massa nulla, non mollis dolor sagittis vel. In hac habitasse platea dictumst. Praesent maximus tincidunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacinia eu erat venenatis elementum. Proin non dolor dapibus, posuere risus ac, tempus erat. Nullam porta lacus a risus mattis, at dapibus risus sodales. Aenean tincidunt massa nulla, non mollis dolor sagittis vel. In hac habitasse platea dictumst. Praesent maximus tincidunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacinia eu erat venenatis elementum. Proin non dolor dapibus, posuere risus ac, tempus erat. Nullam porta lacus a risus mattis, at dapibus risus sodales. Aenean tincidunt massa nulla, non mollis dolor sagittis vel. In hac habitasse platea dictumst. Praesent maximus tincidunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacinia eu erat venenatis elementum. Proin non dolor dapibus, posuere risus ac, tempus erat. Nullam porta lacus a risus mattis, at dapibus risus sodales. Aenean tincidunt massa nulla, non mollis dolor sagittis vel. In hac habitasse platea dictumst. Praesent maximus tincidunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacinia eu erat venenatis elementum. Proin non dolor dapibus, posuere risus ac, tempus erat. Nullam porta lacus a risus mattis, at dapibus risus sodales. Aenean tincidunt massa nulla, non mollis dolor sagittis vel. In hac habitasse platea dictumst. Praesent maximus tincidunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacinia eu erat venenatis elementum. Proin non dolor dapibus, posuere risus ac, tempus erat. Nullam porta lacus a risus mattis, at dapibus risus sodales. Aenean tincidunt massa nulla, non mollis dolor sagittis vel. In hac habitasse platea dictumst. Praesent maximus tincidunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacinia eu erat venenatis elementum. Proin non dolor dapibus, posuere risus ac, tempus erat. Nullam porta lacus a risus mattis, at dapibus risus sodales. Aenean tincidunt massa nulla, non mollis dolor sagittis vel. In hac habitasse platea dictumst. Praesent maximus tincidunt.",
      MadeByUserName: "UserName",
      UserImageUrl:
        "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18yZzhSWTE3R28zTENJcERUVGRYTEhoT3lKSDAifQ",
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
      required: 60,
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1667419102563-e212046376c4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGxhbnR8ZW58MHx8MHx8fDA%3D",
      CreatedAt: "2023-03-01T00:00:00.000Z",
      latitude: 14.949843,
      longitude: 75.506604,
      id: "3",
    },
    {
      MadeByName: "User Name",
      Description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacinia eu erat venenatis elementum. Proin non dolor dapibus, posuere risus ac, tempus erat. Nullam porta lacus a risus mattis, at dapibus risus sodales. Aenean tincidunt massa nulla, non mollis dolor sagittis vel. In hac habitasse platea dictumst. Praesent maximus tincidunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacinia eu erat venenatis elementum. Proin non dolor dapibus, posuere risus ac, tempus erat. Nullam porta lacus a risus mattis, at dapibus risus sodales. Aenean tincidunt massa nulla, non mollis dolor sagittis vel. In hac habitasse platea dictumst. Praesent maximus tincidunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacinia eu erat venenatis elementum. Proin non dolor dapibus, posuere risus ac, tempus erat. Nullam porta lacus a risus mattis, at dapibus risus sodales. Aenean tincidunt massa nulla, non mollis dolor sagittis vel. In hac habitasse platea dictumst. Praesent maximus tincidunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacinia eu erat venenatis elementum. Proin non dolor dapibus, posuere risus ac, tempus erat. Nullam porta lacus a risus mattis, at dapibus risus sodales. Aenean tincidunt massa nulla, non mollis dolor sagittis vel. In hac habitasse platea dictumst. Praesent maximus tincidunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacinia eu erat venenatis elementum. Proin non dolor dapibus, posuere risus ac, tempus erat. Nullam porta lacus a risus mattis, at dapibus risus sodales. Aenean tincidunt massa nulla, non mollis dolor sagittis vel. In hac habitasse platea dictumst. Praesent maximus tincidunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacinia eu erat venenatis elementum. Proin non dolor dapibus, posuere risus ac, tempus erat. Nullam porta lacus a risus mattis, at dapibus risus sodales. Aenean tincidunt massa nulla, non mollis dolor sagittis vel. In hac habitasse platea dictumst. Praesent maximus tincidunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacinia eu erat venenatis elementum. Proin non dolor dapibus, posuere risus ac, tempus erat. Nullam porta lacus a risus mattis, at dapibus risus sodales. Aenean tincidunt massa nulla, non mollis dolor sagittis vel. In hac habitasse platea dictumst. Praesent maximus tincidunt.",
      MadeByUserName: "UserName",
      UserImageUrl:
        "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18yZzhSWTE3R28zTENJcERUVGRYTEhoT3lKSDAifQ",
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
      required: 60,
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1667419102563-e212046376c4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGxhbnR8ZW58MHx8MHx8fDA%3D",
      CreatedAt: "2023-04-01T00:00:00.000Z",
      latitude: 28.576639,
      longitude: 77.388474,
      id: "4",
    },
  ]);
  const id = params["params"]["id"];
  useEffect(() => {
    if (initiatives) {
      initiatives.map((initiative) => {
        if (initiative.id === id) {
          setMain(initiative);
        }
      });
    }
  });
  useEffect(() => {
    if (initiatives && main.required !== undefined) {
      initiatives.map((initiative) => {
        console.log(initiative.topic, main.topic);
        if (initiative.topic === main.topic && initiative.id !== main.id) {
          // others.push(initiative);
          setOthers((others) => [...others, initiative]);
        }
      });
      console.log(others);
    }
  }, [initiatives, main]);
  useEffect(() => {
    if (main.voters !== undefined) {
      if (main.voters.includes(user2.username)) {
        setVoted(true);
      } else {
        setVoted(false);
      }
    }
  }, [main]);
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
      <div className="bg-[#374853] p-[25px] px-[15px]"></div>
      <div className="bg-[#E0E7EB] min-h-[700px] mx-[20px] relative bottom-[30px] rounded-lg flex items-center z-1">
        <div className="min-h-[620px] mx-[40px] bg-[#fff] w-[1305px] rounded-lg wrap py-[35px] my-[30px]">
          <div className="flex items-center w-[100%] justify-center">
            <Image
              src={main.UserImageUrl}
              alt="profile image"
              height={40}
              width={60}
              className="rounded-full mr-[15px]"
            />
            <p className="text-[25px]">{main.MadeByName}</p>
          </div>
          <p className="text-center text-[25px] mt-[40px]">{main.Heading}</p>
          <p className="px-[20px] text-center bg-[#58AEE4] mx-[590px] text-center m-0 py-[5px] rounded-3xl my-[17px] text-[#fff]">
            {main.topic}
          </p>
          <p className="mx-[140px]">{main.Description}</p>
          <div className="flex justify-center mt-[40px]">
            <Image src={main.imageUrl} width={500} height={500} />
          </div>
          <div className="flex justify-center mt-[60px]">
            <div className="w-[500px] h-[10px] bg-[#0F766E] relative rounded-lg">
              <div
                className="absolute left-0 top-0 h-full bg-[#99F6E4]  rounded-lg"
                style={{
                  width: `${(main.votes / main.required) * 100}%`,
                }}
              ></div>
            </div>
          </div>
          <div className="flex justify-center mt-[10px]">
            <p className="mr-[240px] text-[#0F766E]">{main.votes} supporters</p>
            <p className="text-[#627F92]">
              {main.required - main.votes} more needed
            </p>
          </div>
          <div className="flex justify-center mt-[40px]">
            {!voted && (
              <button
                className="flex mr-[30px] items-center"
                onClick={() => {
                  main.voters.push(user2.username);
                  setVoted(true);
                }}
              >
                {" "}
                <PiThumbsUpBold className="rounded-full h-[40px] w-[40px] bg-[#8D8D8D] p-[5px] text-[#fff] mr-[10px]" />{" "}
                Upvote
              </button>
            )}
            {voted && (
              <button
                className="flex mr-[30px] items-center"
                onClick={() => {
                  main.voters = main.voters.filter(
                    (voter) => voter !== user2.username
                  );
                  setVoted(false);
                }}
              >
                {" "}
                <PiThumbsUpBold className="rounded-full h-[40px] w-[40px] bg-[#84b7fa] p-[5px] text-[#fff] mr-[10px]" />{" "}
                Upvote
              </button>
            )}
            <button
              className="flex items-center"
              onClick={() => {
                var url = `http://localhost:3000/details/${main.id}`;
                navigator.clipboard.writeText(url);
                toast("The link has been copied to the clipboard.", {
                  action: {
                    label: "Okay",
                    onClick: () => console.log("Okay"),
                  },
                });
              }}
            >
              {" "}
              <LuShare2 className="rounded-full h-[40px] w-[40px] bg-[#8D8D8D] p-[9px] text-[#fff] mr-[10px]" />{" "}
              Share
            </button>
          </div>
        </div>
      </div>
      <p className="text-[30px] text-center mb-[20px] mt-[30px]">
        Related Initiatives
      </p>
      <div className="bg-[#E0E7EB] h-fit mx-[25px] rounded-lg text-center p-[30px]">
        <div className="flex flex-wrap justify-center">
          {others &&
            others.map((other, index) => {
              return (
                <div
                  key={index}
                  className="rounded-b-3xl flex flex-col mb-[30px] mr-[40px] justify-start"
                >
                  <Image
                    src={other.imageUrl}
                    className="m-0 rounded-t-3xl"
                    width={500}
                    height={300}
                  />
                  {/* desc */}
                  <div className="bg-[#F9FAFB] rounded-b-3xl p-8 w-[500px]">
                    <h6
                      className="text-[20px] font-bold
                             text-[#000000] text-start"
                    >
                      {other.Heading}
                    </h6>
                    <p className="text-start my-3 font-bold">
                      Category - {other.topic}
                    </p>
                    <p className="text-start">{other.SubDescription}</p>
                    <div className="text-start">
                      <button
                        className="text-[#F9FAFB] bg-[#282828] p-3 rounded-md mt-4"
                        onClick={() => {
                          router.push(`/details/${other.id}`);
                        }}
                      >
                        Read more
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Page;
