import Link from "next/link";
import React from "react";

const HeroNavbar = () => {
  return (
    <div
      className="bg-[#374853] w-12/12 h-[70px] p-4
    flex justify-between items-center mx-auto sticky top-0 z-50 border-b text-[#FFFFFF]"
    >
      {/* logo */}
      <Link href="/">
        <button className="nunito font-black text-white">Logo</button>
      </Link>

      {/* links */}
      <div className="flex items-center md:gap-8 text-white gap-1">
        <button>Success stories</button>
        <button>About</button>
      </div>

      {/* button */}
      <Link
        href="https://pleasing-ringtail-59.accounts.dev/sign-in?redirect_url=http%3A%2F%2Flocalhost%3A3000%2Fdashboard"
        className="text-white bg-[#282828] w-fit
        py-2 px-4 rounded-md"
      >
        Sign In
      </Link>
    </div>
  );
};

export default HeroNavbar;
