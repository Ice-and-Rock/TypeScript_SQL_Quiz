import React from "react";

function Functions() {
  return (
    <div className="flex-col m-10 shadow text-xs md:text-lg">
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

        {/*  */}

        <div className="mx-">
  <p className="p-4 text-center">JavaScript functions allow you to encapsulate reusable code. Let's dive into the world of functions:</p>
  <div className="flex mt-4 flex-col md:flex-row">
    <div className="w-full md:w-1/2 pl-2">
      <h2 className="text-lg p-2 font-semibold">Function Basics</h2>
      <ul className="list-disc pl-6">
        <li>Declaring and defining functions</li>
        <li>Parameters and arguments: {'function greet(name) { ... }'}</li>
        <li>Return statements: {'return result;'}</li>
        <li>Function expressions: {'const greet = function(name) { ... }'}</li>
        <li>Arrow functions: {'const add = (a, b) => a + b;'}</li>
      </ul>
    </div>
    <div className="w-full md:w-1/2 pl-2 border-t md:border-t-0 md:border-l border-gray-300 mt-4 md:mt-0">
      <h2 className="text-lg p-2 font-semibold">Using Functions</h2>
      <ul className="list-disc pl-6">
        <li>Calling functions with arguments: {'greet("Alice");'}</li>
        <li>Reusing code with functions: {'function calculateTotal(items) { ... }'}</li>
        <li>Passing functions as callbacks: {'array.map(item => process(item));'}</li>
        <li>Scope and closures: {'function outer() { const inner = () => { ... } }'}</li>
        <li>Error handling and exceptions: {'try { ... } catch (error) { ... }'}</li>
      </ul>
    </div>
  </div>
  <p className="p-4 ">Harness the power of functions to create organized and modular JavaScript code!</p>
</div>



        {/*  */}
      </main>
    </div>
  );
}

export default Functions;
