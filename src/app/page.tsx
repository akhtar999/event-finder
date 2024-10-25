import Navbar from "@/components/Navbar";
// import { Input } from "@/components/ui/input";
import React from "react";

const Home = () => {
  return (
    <main className="">
      {/* NAVBAR */}
      <Navbar />
      <div className="pt-28 mx-64">
        <h1 className="text-3xl text-[#00509d] font-extralight">
          Explore events in San Francisco
        </h1>

        {/* EVENT SEARCH BAR */}
        <div className="relative mt-5">
          <input
            type="text"
            className="w-full text-xl placeholder:text-slate-400 text-slate-700 border border-slate-200 rounded-[50px] pl-6 pr-10 py-3 transition duration-300 ease focus:outline-none hover:border-slate-300 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]"
            placeholder="Search for events"
          />
          <button
            className="absolute right-1 top-1 rounded-[50px] bg-[#fdc500] p-1.5 border border-transparent text-center text-sm text-white transition-all focus:bg-slate-700 focus:shadow-none active:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-40 h-8"
            >
              <path
                fill-rule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </main>
  );
};

export default Home;
