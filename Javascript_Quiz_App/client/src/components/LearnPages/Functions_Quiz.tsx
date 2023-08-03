import React from "react";

function Functions() {
  return (
    <div className="flex-col m-10 shadow">
      <header className="flex items-center">
        <div className="mx-auto max-w-xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            Functions
          </h1>
        </div>
      </header>
      <main className="p-3 shadow">
        <div className="mx-auto text-justify max-w-7xl py-6 sm:px-6 lg:px-8">
          JavaScript functions are reusable blocks of code that perform a
          specific task. They can accept inputs called parameters and return
          values that can be used in other parts of the program. Functions can
          be defined using the 'function' keyword followed by the function name
          and parameter list. When a function is called, the code inside the
          function is executed, and the result is returned to the caller.
          Functions make code modular and help reduce repetition, making it
          easier to maintain and scale.
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

export default Functions;
