import React from "react";
import Logo from "../images/V3_Logo.png";

export default function Home() {
  return (
    <div className="homePage">
      <header className="bg-white m-8 sm:p-8 shadow mx-8 rounded-xl">
        <div className="flex items-center justify-center ">
          <img className="" src={Logo} alt="logo" />
        </div>
        <div className="mx-8 pb-8  flex items-center justify-center flex-col ">
          <h1 className="text-3xl text-center font-bold tracking-tight text-gray-900">
            Welcome to my Educational App!
          </h1>
          <h3 className="p-3 text-center">Feel free to choose a topic above and test yourself.</h3>
          <span></span>
          <h4 className="pt-9">for Mobile & Desktop.</h4>
        </div>
      </header>
    </div>
  );
}
