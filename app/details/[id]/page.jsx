"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { PiThumbsUpBold } from "react-icons/pi";
import { LuShare2 } from "react-icons/lu";
import { toast } from "sonner";

import Image from "next/image";
import moment, { now } from "moment";

function Page(params) {
  const [isOpen, setIsOpen] = useState(false);
  const [wanna, setWanna] = useState(false);

  const onClose = () => {
    setIsOpen(false);
    setVoted(false);
    main.volunteers -= 1;
    main.votes -= 1;
  };
  const router = useRouter();
  const [diff, setDiff] = useState(null);
  const [voted, setVoted] = useState(false);
  const [main, setMain] = useState({});
  const [others, setOthers] = useState([]);
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
  const [initiatives, setInitiatives] = useState([
    {
      MadeByName: "User Name",
      MadeByUserName: "UserName",
      MadeByEmails: "garg2012030@gmail.com",
      UserImageUrl:
        "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18yZzhSWTE3R28zTENJcERUVGRYTEhoT3lKSDAifQ",
      Heading: "Voter 1",
      SubDescription:
        "Corrupti fugit temporibus. Aspernatur eos reiciendis quis. Dolorem suscipit distinctio doloribus est est quam. Nesciunt ut sed quae et tenetur sunt maiores. Quam minus qui qui ipsa illum. Velit cum veniam modi doloremque nemo.",
      Description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacinia eu erat venenatis elementum. Proin non dolor dapibus, posuere risus ac, tempus erat. Nullam porta lacus a risus mattis, at dapibus risus sodales. Aenean tincidunt massa nulla, non mollis dolor sagittis vel. In hac habitasse platea dictumst. Praesent maximus tincidunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacinia eu erat venenatis elementum. Proin non dolor dapibus, posuere risus ac, tempus erat. Nullam porta lacus a risus mattis, at dapibus risus sodales. Aenean tincidunt massa nulla, non mollis dolor sagittis vel. In hac habitasse platea dictumst. Praesent maximus tincidunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacinia eu erat venenatis elementum.  ",
      topic: "Animal",
      voters: ["userName1", "userName2", "userName3", "userName4"],
      votes: 5,
      volunteers: 5,
      requiredVoluns: 10,
      required: 7,
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1667419102563-e212046376c4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGxhbnR8ZW58MHx8MHx8fDA%3D",
      CreatedAt: "2023-01-01T00:00:00.000Z",
      id: "1",
    },
    {
      MadeByName: "Kartik Garg",
      MadeByEmails: "garg2012030@gmail.com",
      Description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacinia eu erat venenatis elementum. Proin non dolor dapibus, posuere risus ac, tempus erat. Nullam porta lacus a risus mattis, at dapibus risus sodales. Aenean tincidunt massa nulla, non mollis dolor sagittis vel. In hac habitasse platea dictumst. Praesent maximus tincidunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacinia eu erat venenatis elementum. Proin non dolor dapibus, posuere risus ac, tempus erat. Nullam porta lacus a risus mattis, at dapibus risus sodales. Aenean tincidunt massa nulla, non mollis dolor sagittis vel. In hac habitasse platea dictumst. Praesent maximus tincidunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacinia eu erat venenatis elementum.  ",
      MadeByUserName: "kartik",
      UserImageUrl:
        "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18yZzhSWTE3R28zTENJcERUVGRYTEhoT3lKSDAifQ",
      Heading: "Creator 2",
      SubDescription:
        "Corrupti fugit temporibus. Aspernatur eos reiciendis quis. Dolorem suscipit distinctio doloribus est est quam. Nesciunt ut sed quae et tenetur sunt maiores. Quam minus qui qui ipsa illum. Velit cum veniam modi doloremque nemo.",
      topic: "Animal",
      voters: ["userName1", "userName2", "userName3", "userName4"],
      votes: 4,
      volunteers: 5,
      requiredVoluns: 10,
      required: 60,
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1667419102563-e212046376c4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGxhbnR8ZW58MHx8MHx8fDA%3D",
      CreatedAt: "2023-02-01T00:00:00.000Z",
      id: "2",
    },
    {
      MadeByName: "User Name",
      MadeByEmails: "garg2012030@gmail.com",
      Description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacinia eu erat venenatis elementum. Proin non dolor dapibus, posuere risus ac, tempus erat. Nullam porta lacus a risus mattis, at dapibus risus sodales. Aenean tincidunt massa nulla, non mollis dolor sagittis vel. In hac habitasse platea dictumst. Praesent maximus tincidunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacinia eu erat venenatis elementum. Proin non dolor dapibus, posuere risus ac, tempus erat. Nullam porta lacus a risus mattis, at dapibus risus sodales. Aenean tincidunt massa nulla, non mollis dolor sagittis vel. In hac habitasse platea dictumst. Praesent maximus tincidunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacinia eu erat venenatis elementum.  ",
      MadeByUserName: "UserName",
      UserImageUrl:
        "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18yZzhSWTE3R28zTENJcERUVGRYTEhoT3lKSDAifQ",
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
      volunteers: 5,
      requiredVoluns: 10,
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
      MadeByEmails: "garg2012030@gmail.com",
      Description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacinia eu erat venenatis elementum. Proin non dolor dapibus, posuere risus ac, tempus erat. Nullam porta lacus a risus mattis, at dapibus risus sodales. Aenean tincidunt massa nulla, non mollis dolor sagittis vel. In hac habitasse platea dictumst. Praesent maximus tincidunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacinia eu erat venenatis elementum. Proin non dolor dapibus, posuere risus ac, tempus erat. Nullam porta lacus a risus mattis, at dapibus risus sodales. Aenean tincidunt massa nulla, non mollis dolor sagittis vel. In hac habitasse platea dictumst. Praesent maximus tincidunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacinia eu erat venenatis elementum.  ",
      MadeByUserName: "UserName",
      UserImageUrl:
        "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18yZzhSWTE3R28zTENJcERUVGRYTEhoT3lKSDAifQ",
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
      volunteers: 5,
      requiredVoluns: 10,
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
  useEffect(() => {
    if (main.required !== undefined) {
      var today = moment(now());
      var created = moment(main.CreatedAt);
      var dayDif = today.diff(created, "days");
      setDiff(dayDif);
    }
  }, [main, diff]);
  return (
    <div>
      <div
        className={`fixed z-50 inset-0 overflow-y-auto ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity" aria-hidden="true">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>

          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <div className="bg-[#fff] px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              {/* Insert your modal content here */}
              {!wanna && (
                <>
                  <h1 className="text-lg font-bold">
                    Are you sure you want to be a volunteer?
                  </h1>
                  <div className="bg-[#fff] px-6 py-3">
                    <button
                      onClick={onClose}
                      type="button"
                      className="border-1 mr-[20px] bg-[#000] text-[#fff] py-[10px] px-[20px] rounded-md mt-[10px]"
                    >
                      No...
                    </button>
                    <button
                      type="button"
                      className="border-[1px] mr-[20px] bg-[#fff] text-[#000] py-[10px] px-[20px] rounded-md mt-[10px]"
                      onClick={() => {
                        setWanna(true);
                      }}
                    >
                      Yes!
                    </button>
                  </div>
                </>
              )}
              {wanna && (
                <>
                  <h1 className="text-[25px] font-bold">Emails</h1>
                  <p className="text-[20px] font-light">
                    The email of the initiative organiser is given below. Please
                    don't misuse it.
                  </p>
                  <p className="font-bold">{main.MadeByEmails}</p>
                  <p className="text-[20px] font-light">
                    You use this to tell the organiser that you have volunteered
                    and are ready to help.
                  </p>
                  <button
                    onClick={() => {
                      setIsOpen(false);
                    }}
                    className="border-[1px] bg-[#000] text-[#fff] py-[10px] px-[20px] rounded-md mt-[10px]"
                  >
                    Close
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
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
      <div className="bg-[#E0E7EB] min-h-[700px] mx-[60px] relative bottom-[30px] rounded-lg flex items-center justify-center z-1">
        <div className="min-h-[620px] bg-[#fff] w-[1180px] rounded-lg wrap py-[35px] my-[30px]">
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
          <p className="text-center text-[45px] mt-[20px]">{main.Heading}</p>
          <p className="bg-[#58AEE4] w-[100px] py-[5px] px-[10px] text-center mx-[540px] rounded-3xl mt-[20px] text-[#fff]">
            {main.topic}
          </p>
          <div className="flex justify-center mt-[40px]">
            <Image src={main.imageUrl} width={1200} height={600} />
          </div>
          <div className="flex">
            <div className="mx-[80px] w-[50%] mt-[30px]">
              {" "}
              <p className="text-[#606060]">Created: {diff} days ago </p> <br />
              <p className="text-[#374853]">{main.Description}</p>
            </div>
            <div>
              <div className="mr-[50px] mt-[30px]">
                <div className="flex justify-center">
                  <div className="w-[300px] h-[30px] bg-[#99F6E4] relative rounded-full">
                    <div
                      className="absolute left-0 top-0 h-full bg-[#0F766E] rounded-full"
                      style={{
                        width: `${(main.votes / main.required) * 100}%`,
                      }}
                    ></div>
                  </div>
                </div>
                <div className="flex justify-center mt-[10px]">
                  <p className="mr-[80px] text-[#0F766E]">
                    {main.votes} supporters
                  </p>
                  <p className="text-[#627F92]">
                    {main.required - main.votes} more needed
                  </p>
                </div>
              </div>
              <div className="mr-[50px] mt-[100px]">
                <div className="flex justify-center">
                  <div className="w-[300px] h-[30px] bg-[#FFD6B0] relative rounded-full">
                    <div
                      className="absolute left-0 top-0 h-full bg-[#EF9F03] rounded-full"
                      style={{
                        width: `${
                          (main.volunteers / main.requiredVoluns) * 100
                        }%`,
                      }}
                    ></div>
                  </div>
                </div>
                <div className="flex justify-center mt-[10px]">
                  <p className="mr-[80px] text-[#0F766E]">
                    {main.volunteers} volunteers
                  </p>
                  <p className="text-[#627F92]">
                    {main.requiredVoluns - main.volunteers} more needed
                  </p>
                </div>
              </div>
              {!wanna && (
                <div className="flex justify-center w-[200px] mx-[50px] mt-[30px] bg-[#FFA800] py-[10px] rounded-lg text-[#fff] hover:bg-[#fac04b]">
                  <button
                    onClick={() => {
                      main.voters.push(user2.username);
                      main.votes += 1;
                      setVoted(true);
                      main.volunteers += 1;
                      setIsOpen(true);
                    }}
                  >
                    I want to volunteer
                  </button>
                </div>
              )}
            </div>
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
