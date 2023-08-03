import React from "react";

function Arrays() {
  return (
    <div className="flex-col m-10 shadow">
      <header className="flex items-center">
        <div className="mx-auto max-w-xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            Arrays
          </h1>
        </div>
      </header>
      <main className="p-3 shadow">
        <div className="mx-auto text-justify max-w-7xl py-6 sm:px-6 lg:px-8">
          Arrays are data structures that store multiple values in a single,
          ordered collection. Each value, or element, in an array is assigned a
          unique index, starting with zero for the first element. Arrays can
          hold various data types such as numbers, strings, objects, or even
          other arrays (creating multidimensional arrays). They are versatile
          and commonly used in programming languages, including JavaScript, to
          organize and manipulate data efficiently. Operations such as adding,
          removing, or accessing elements can be performed using built-in array
          methods or by referencing the elements' indices directly.
        </div>
        <div className='flex justify-center '>
          <img
          className="max-h-45"
            src="https://imgs.search.brave.com/at_I0l315xw_OtEmdg-juXwRE6Rv5mgsNdUNVS4Ye8Y/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC52/cUFGaVZUZnNWTHZy/QjRtVUNoNDhRSGFF/byZwaWQ9QXBp"
            alt="arrays"
          />
        </div>
      </main>

    </div>
  );
}

export default Arrays;
