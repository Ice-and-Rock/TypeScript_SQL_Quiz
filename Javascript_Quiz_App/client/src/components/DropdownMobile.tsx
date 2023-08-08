import { useState } from "react"
import { Link } from "react-router-dom";

export default function DropDownMobile () {
    const [dropDownMobileOpen, setDropDownMobileOpen] = useState(false);

    const toggleMenu = () => {
        setDropDownMobileOpen(!dropDownMobileOpen)
    };

    return(

<div className="relative rounded-md bg-gray-900 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">

    
  <button type="button" className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-white" aria-expanded="false" onClick={toggleMenu}>
    <span>Quiz Options</span>
    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
    </svg>
  </button>

{/* Conditionally render the menu if state is true */}

{dropDownMobileOpen && (
 <div className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
 <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
   <div className="p-4">
     <div className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
       <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
         <svg className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
           <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
           <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
         </svg>
       </div>
       <div>
         <a href="/arrays" className="font-semibold text-gray-900">
           Arrays
           <span className="absolute inset-0"></span>
         </a>
         <p className="mt-1 text-gray-600">Explore arrays and their properties</p>
       </div>
     </div>
     <div className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
       <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
         <svg className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
           <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
         </svg>
       </div>
       <div>
         <a href="/functions" className="font-semibold text-gray-900">
           Functions
           <span className="absolute inset-0"></span>
         </a>
         <p className="mt-1 text-gray-600">Learn about JavaScript functions</p>
       </div>
     </div>
     <div className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
       <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
         <svg className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
           <path strokeLinecap="round" strokeLinejoin="round" d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33" />
         </svg>
       </div>
       <div>
         <a href="/variables" className="font-semibold text-gray-900">
           Variables
           <span className="absolute inset-0"></span>
         </a>
         <p className="mt-1 text-gray-600">Understand variable declarations</p>
       </div>
     </div>
     <div className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
       <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
         <svg className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
           <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
         </svg>
       </div>
       <div>
         <a href="quiz-questions" className="font-semibold text-gray-900">
           Quiz Questions
           <span className="absolute inset-0"></span>
         </a>
         <p className="mt-1 text-gray-600">Test your knowledge with quiz questions</p>
       </div>
     </div>
   </div>
   <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
     <a href="/" className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100">
       <svg className="h-5 w-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
         <path fillRule="evenodd" d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm6.39-2.908a.75.75 0 01.766.027l3.5 2.25a.75.75 0 010 1.262l-3.5 2.25A.75.75 0 018 12.25v-4.5a.75.75 0 01.39-.658z" clipRule="evenodd" />
       </svg>
       Watch demo
     </a>
     <a href="/" className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100">
       
       
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 flex-none text-gray-400">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
</svg>

       Contact me!
     </a>
   </div>
 </div>
</div>

    )}
</div>)
}