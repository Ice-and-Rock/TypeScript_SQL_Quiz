import React from "react";
import Header from "./Header";

export default function Home() {
  return (
    <div>
      <Header />
      
        <header className="bg-white shadow mx-8">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Welcome to my Educational App!
            </h1>
            <h3>Feel free to choose a topic above and test yourself!</h3>
          </div>
        </header>
     
    </div>
  );
}
