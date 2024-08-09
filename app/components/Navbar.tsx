"use client";

import * as React from "react";
import Link from "next/link";

const MainNav = () => {
  const [state, setState] = React.useState(false);

  const menus = [
    { title: "About", path: "#about" },
    { title: "Portfolio", path: "#portfolio" },
    { title: "Experience", path: "#experience" },
    { title: "Testimonials", path: "#testimonials" },
    { title: "Contact", path: "#contact" },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <button
        className="pr-2 absolute md:hidden right-0 top-4"
        title="menu"
        onClick={() => setState(!state)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      <header className="py-3 shadow flex justify-between bg-white px-[7.5rem]">
        {!state ? (
          <Link
            href="/"
            aria-label="Back to homepage"
            className="flex md:justify-center justify-start items-center gap-3"
          >
            <img className="w-32" src="/logo.png" alt="logo" />
          </Link>
        ) : null}
        <div className="flex justify-between">
          <div className="flex">
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                state ? "block" : "hidden"
              }`}
            >
              <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0 mt-2 ml-5">
                {menus.map((item, idx) => (
                  <li
                    key={idx}
                    className="relative group hover:text-green-800 text-md"
                  >
                    <Link href={item.path}>{item.title}</Link>
                    <span className="absolute left-0 right-0  h-[2px] bg-green-800 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out -bottom-1"></span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default MainNav;
