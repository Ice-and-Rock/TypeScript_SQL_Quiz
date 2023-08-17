import React, { useState } from "react";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon, HeartIcon } from "@heroicons/react/24/outline";
import "../styles/tailwind.css";
import Nick from "../images/Nick_imageV2.png";
import { Link } from "react-router-dom";
import DropDownMobile from "./DropdownMobile";

// Create ain interface for a user
// interface User {
//   name: string;
//   email: string;
//   imageUrl: string;
// }
// const user: User = {
//   name: 'Tom Cook',
//   email: 'tom@example.com',
//   imageUrl:
//     'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
// }

// Create an interface for the Navigation
interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}
const navigation: NavigationItem[] = [
  { name: "Home", href: "/", current: true },
  { name: "Arrays", href: "/arrays", current: false },
  { name: "Functions", href: "/Functions", current: false },
  { name: "Variables", href: "/variables", current: false },
  { name: "Quiz Questions", href: "/quiz-questions", current: false },
];

// Create an interface for the UserNavigation
interface UserNavigationItem {
  name: string;
  href: string;
}
const userNavigation: UserNavigationItem[] = [
  { name: "Github", href: "https://github.com/Ice-and-Rock" },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/nicholas-valente-electrics/",
  },
  { name: "Email", href: "mailto:nicholas@valente-engineering.com" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [navItems, setNavItems] = useState<NavigationItem[]>(navigation);

  const handleNavItemClick = (clickedItem: NavigationItem) => {
    setNavItems((prevNavItems) =>
      prevNavItems.map((item) =>
        item.name === clickedItem.name
          ? { ...item, current: true }
          : { ...item, current: false }
      )
    );
  };

  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-gray-800">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-center justify-between">
<div className="md:hidden flex items-center">
<DropDownMobile />
</div>
                    
                  <div className="flex items-center">
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navItems.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            onClick={() => handleNavItemClick(item)}
                            className={classNames(
                              item.current
                                ? "bg-gradient-to-b from-pink-300 to-pink-500 text-white"
                                : "text-gray-300 hover:bg-gray-700 hover:text-white",
                              "rounded-md px-3 py-2 text-sm font-medium"
                            )}
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                      {/* Send some love, button */}
                      <button
                        type="button"
                        className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      >
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Send some love!</span>
                        <HeartIcon className="h-6 w-6"  />
                      </button>

                      {/* Profile dropdown */}
                      <Menu as="div" className="relative ml-3">
                        <div>
                          <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">Open user menu</span>
                            <img
                              className="h-8 w-8 rounded-full"
                              src={Nick}
                              alt="nick"
                            />
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <a
                                    href={item.href}
                                    className={classNames(
                                      active ? "bg-gray-100" : "",
                                      "block px-4 py-2 text-sm text-gray-700"
                                    )}
                                  >
                                    {item.name}
                                  </a>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">

                    {/* Mobile menu burger button */}
                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-gray-900 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>


              <Disclosure.Panel className=" md:hidden bg-gray-700 border-t border-gray-700">


    {/*  */}
                <div className="border-2 rounded-xl  bg-pink-700 border-gray-700 pb-3 pt-4 hover:bg-pink-600
              hover:transition ease-out duration-500">
                  <div className="flex items-center px-5">


                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={Nick}
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none text-white">
                        Nick Valente
                      </div>
                      <div className="text-xs font-medium leading-none text-gray-300 sm:text-sm">
                        nicholas@valente-engineering.com
                      </div>
                    </div>
                    
                    <button
                      type="button"
                      className="relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-2 mx-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      onClick={() => {
                        const email = 'nicholas@valente-engineering.com';
                        navigator.clipboard.writeText(email)
                          .then(() => {
                            // Clipboard successfully set
                            console.log('Email address copied to clipboard:', email);
                          })
                          .catch((error) => {
                            // Clipboard write failed
                            console.error('Unable to copy email address:', error);
                          });
                      }}
                    >
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Copy email address</span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />

                      </svg>
                    </button>

                  </div>
                </div>
                 
              </Disclosure.Panel>
              
            </>
          )}
        </Disclosure>
      </div>
    </>
  );
}
