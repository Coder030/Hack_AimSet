import React from "react";
import "./style.css";
import Hero1 from "./components/HomeComponents/hero1/page";
import Hero2 from "./components/HomeComponents/hero2/page";
import HeroNavbar from "./components/HomeComponents/HeroNavbar";

export default function Home() {
  return (
    <>
      <HeroNavbar />
      <Hero1 />
      <Hero2 />
    </>
  );
}
