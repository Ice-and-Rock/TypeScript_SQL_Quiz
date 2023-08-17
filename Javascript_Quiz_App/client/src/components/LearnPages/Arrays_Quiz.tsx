import React from "react";

function Arrays() {
  return (
    <div className="flex-col m-10 shadow text-xs md:text-lg">
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
    {/*  */}
 



        {/*  */}

        <div className="mx-">
  <p className="p-4 text-center">JavaScript arrays are versatile data structures that hold collections of items. Let's explore some basic array operations:</p>
  <div className="flex mt-4 flex-col md:flex-row"> {/* Use flex-col for smaller screens, and flex-row for larger screens */}
    <div className="w-full md:w-1/2 pl-2"> {/* Full width on small screens, half width on larger screens */}
      <h2 className="text-lg p-2 font-semibold">Array Actions</h2>
      <ul className="list-disc pl-6">
        <li>Accessing elements</li>
        <li>Updating an element</li>
        <li>Adding elements</li>
        <li>Removing elements</li>
        <li>Finding index</li>
        <li>Slicing an array</li>
        <li>Iterating</li>
      </ul>
    </div>
    <div className="w-full md:w-1/2 pl-2 border-t md:border-t-0 md:border-l border-gray-300 mt-4 md:mt-0"> {/* Full width on small screens, half width on larger screens */}
      <h2 className="text-lg p-2 font-semibold">How to Do It</h2>
      <ul className="list-disc pl-6">
        <li>Use index, e.g., fruits[0]</li>
        <li>Assign new value, e.g., fruits[1] = 'pear'</li>
        <li>push() to add to end, unshift() to beginning</li>
        <li>pop() to remove end, shift() to remove beginning</li>
        <li>indexOf('orange') returns index</li>
        <li>slice(start, end) for new array</li>
        <li>Loop with for...of to iterate</li>
      </ul>
    </div>
  </div>
  <p className="p-4 ">Experiment with arrays to manage and manipulate data efficiently in your JavaScript applications!</p>
</div>

        {/*  */}
      </main>

    </div>
  );
}

export default Arrays;
