import React from "react";

function Variables() {
  return (
    <div className="flex-col m-10 shadow text-xs md:text-lg">
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

        {/*  */}

        <div className="mx-">
  <p className="p-4 text-center">JavaScript variables allow you to store and manage data. Let's explore how to work with variables:</p>
  <div className="flex mt-4 flex-col md:flex-row">
    <div className="w-full md:w-1/2 pl-2">
      <h2 className="text-lg p-2 font-semibold">Variable Types</h2>
      <ul className="list-disc pl-6">
        <li>Declaring variables</li>
        <li>Assigning values</li>
        <li>Data types (e.g., string, number, boolean)</li>
        <li>Scope and hoisting</li>
        <li>Constants and let</li>
      </ul>
    </div>
    <div className="w-full md:w-1/2 pl-2 border-t md:border-t-0 md:border-l border-gray-300 mt-4 md:mt-0">
      <h2 className="text-lg p-2 font-semibold">How to Use Variables</h2>
      <ul className="list-disc pl-6">
        <li>Use var, let, or const keywords</li>
        <li>Assign values and modify them</li>
        <li>Concatenate strings: {'"Hello, " + name'}</li>
        <li>Perform arithmetic operations: {'total = num1 + num2'}</li>
        <li>Boolean comparisons and logic: {'if (age >= 18) { ... }'}</li>
      </ul>
    </div>
  </div>
  <p className="p-4 ">Master variables to store and manipulate data effectively in JavaScript!</p>
</div>


{/*  */}

      </main>
    </div>
  );
}

export default Variables;
