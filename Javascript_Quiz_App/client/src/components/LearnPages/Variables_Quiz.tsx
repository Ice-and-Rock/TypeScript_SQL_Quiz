import React from "react";

function Variables() {
  return (
    <div className="flex-col m-10 shadow">
      <header className="flex items-center">
        <div className="mx-auto max-w-xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            Variables
          </h1>
        </div>
      </header>
      <main className="p-3 shadow">
        <div className="mx-auto text-justify max-w-7xl py-6 sm:px-6 lg:px-8">
          JavaScript variables are containers used to store and manage data in a
          program. They can hold various data types such as numbers, strings,
          objects, and arrays. To declare a variable, you use the keywords
          'var', 'let', or 'const', with 'let' and 'const' being the preferred
          choice in modern JavaScript due to their improved scoping rules.
          Variables can be assigned values using the equal sign (=) and can be
          referenced and manipulated throughout the code. Proper use of
          variables makes JavaScript code more efficient, organized, and easier
          to understand.
        </div>
        <div className="flex justify-center ">
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

export default Variables;
