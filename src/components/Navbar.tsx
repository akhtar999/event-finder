import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Abril_Fatface } from "next/font/google";

const ShadowsIntoLight = Abril_Fatface({
  subsets: ["latin"],
  weight: ["400"],
});

const Navbar = () => {
  return (
    <nav className="py-4 fixed w-full px-52 top-0 backdrop-blur-sm left-0 ">
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <svg
            width="50"
            height="50"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.99502 4H14.005C17.7856 4 19.6759 4 20.8504 5.17157C21.6591 5.97823 21.911 7.12339 21.9894 8.98947C22.005 9.35954 22.0128 9.54458 21.9437 9.66803C21.8746 9.79147 21.5987 9.94554 21.0469 10.2537C20.4341 10.5959 20.0199 11.2497 20.0199 12C20.0199 12.7503 20.4341 13.4041 21.0469 13.7463C21.5987 14.0545 21.8746 14.2085 21.9437 14.332C22.0128 14.4554 22.005 14.6405 21.9894 15.0105C21.911 16.8766 21.6591 18.0218 20.8504 18.8284C19.6759 20 17.7856 20 14.005 20H9.99502C6.21438 20 4.32407 20 3.14958 18.8284C2.34091 18.0218 2.08903 16.8766 2.01058 15.0105C1.99502 14.6405 1.98724 14.4554 2.05634 14.332C2.12545 14.2085 2.40133 14.0545 2.95308 13.7463C3.56586 13.4041 3.98007 12.7503 3.98007 12C3.98007 11.2497 3.56586 10.5959 2.95308 10.2537C2.40133 9.94554 2.12545 9.79147 2.05634 9.66802C1.98724 9.54458 1.99502 9.35954 2.01058 8.98947C2.08903 7.12339 2.34091 5.97823 3.14958 5.17157C4.32407 4 6.21439 4 9.99502 4ZM15.5478 8.46967C15.8415 8.76256 15.8415 9.23744 15.5478 9.53033L9.53289 15.5303C9.23927 15.8232 8.76321 15.8232 8.46959 15.5303C8.17596 15.2374 8.17596 14.7626 8.46959 14.4697L14.4845 8.46967C14.7782 8.17678 15.2542 8.17678 15.5478 8.46967ZM14.5149 15.5C15.0686 15.5 15.5174 15.0523 15.5174 14.5C15.5174 13.9477 15.0686 13.5 14.5149 13.5C13.9613 13.5 13.5124 13.9477 13.5124 14.5C13.5124 15.0523 13.9613 15.5 14.5149 15.5ZM9.50248 10.5C10.0561 10.5 10.505 10.0523 10.505 9.5C10.505 8.94772 10.0561 8.5 9.50248 8.5C8.94882 8.5 8.49999 8.94772 8.49999 9.5C8.49999 10.0523 8.94882 10.5 9.50248 10.5Z"
              fill="#fdc500"
            />
          </svg>
          <h1
            className={`${ShadowsIntoLight.className} text-3xl text-[#00509d] font-bold`}
          >
            festiva
          </h1>
        </div>
        <div className="flex gap-5">
          <Link
            href="/create-event"
            className="relative inline-flex items-center px-12 py- overflow-hidden text-lg font-medium text-[#00509d] border-2 border-[#00509d] rounded-full hover:text-white group hover:bg-gray-50"
          >
            <span className="absolute left-0 block w-full h-0 transition-all bg-[#00509d] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
            <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
              <svg
                width="20"
                height="20"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 1V21"
                  stroke="#fff"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M1 10.9336H21"
                  stroke="#fff"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <span className="relative font-medium">Create event</span>
          </Link>{" "}
          {/* <Link
            href="/create-event"
            className="relative items-center justify-center inline-block text-lg px-6 py-3 overflow-hidden text-[#fdc500] font-medium rounded-full group"
          >
            <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-[#1a659e] rounded-full blur-md ease"></span>
            <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
              <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-[#001d3d] rounded-full blur-md"></span>
              <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-[#00f5d4] rounded-full blur-md"></span>
            </span>
            <span className="relative text-white"> Create Event</span>
          </Link> */}
          {/* <Button
              className="px-6 py-6 bg-[#00509d] text-[#fff] hover:bg-[#fff] hover:text-[#00509d] transition-colors duration-300 ease-in-out "
              variant={"event"}
            >
              Create Event
            </Button>{" "} */}
          <Link href="/help">
            <Button
              className="px-6 py-6 font-extralight hover:scale-105 transform transition duration-300 ease-in-out
 "
              variant={"event"}
            >
              <svg
                width="100"
                height="100"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 5V1H7V5L4.5 7.5L8.5 11.5L11 9H15V15H11C5.47715 15 1 10.5228 1 5Z"
                  fill="#00509d"
                />
              </svg>
              help
            </Button>{" "}
          </Link>
          {/* <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#00296b] from-10% via-[#003f88] via-30% via-[#00509d] via-20% to-emerald-500 to-70%"></div> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
