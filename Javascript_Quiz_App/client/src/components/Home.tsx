import React from "react";
import Logo from "../images/V3_Logo.png";

export default function Home() {
  return (
    <div className="homePage">
      <header className="bg-white shadow mx-8">
        <div className="flex items-center justify-center ">
          <img className="" src={Logo} alt="logo" />
        </div>
        <div className="mx-8 pb-8  flex items-center justify-center flex-col ">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Welcome to my Educational App!
          </h1>
          <h3 className="p-3">Feel free to choose a topic above and test yourself.</h3>
        </div>
      </header>
    </div>
  );
}
