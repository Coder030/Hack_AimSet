import { auth, currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import LocationComponent from "../components/GetLocation/page";
import { IoSearch } from "react-icons/io5";
import Over from "../components/DashboardComponents/Dash/over/page";

export default async function Page() {
  const { userId } = auth();

  const user = await currentUser();
  return (
    <>
      <div className="bg-[#374853] py-[30px] flex items-center border-b-[1px] border-[#FFFFFF] sticky top-0 left-0 z-50	">
        <div className="flex w-[100%] items-center">
          <p className="text-[#FFFFFF] ml-[3%] text-[25px]">Logo</p>
          <button className="text-[#FFFFFF] text-[15px] ml-[6%] focus:bg-gradient-to-l from-[#627F92] to-[#374853] p-[15px] rounded-full px-[35px]">
            Initiative feed
          </button>
          <button className="text-[#FFFFFF] text-[15px] ml-[0.1%] focus:bg-gradient-to-l from-[#627F92] to-[#374853] p-[15px] px-[35px] rounded-full">
            Dashboard
          </button>
        </div>

        <div className="px-[25px] flex">
          <input
            type="text"
            className="w-[400px] h-[50px] rounded-md focus:outline-none px-[15px]	"
            placeholder="🔎   Search the initiative..."
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
          Welcome back, {user.firstName} {user.lastName}!{" "}
        </p>
        <div className="flex mt-[15px]">
          <p className="mr-[30px] text-[#FFFFFF] hover:cursor-pointer">
            Overview
          </p>
          <p className="mr-[30px] text-[#FFFFFF] hover:cursor-pointer">About</p>
          <p className="mr-[30px] text-[#FFFFFF] hover:cursor-pointer">
            Archive
          </p>
        </div>
      </div>
      <div className="bg-[#374853] p-[15px] px-[15px]"></div>
      <Over />
    </>
  );
}
