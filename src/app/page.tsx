"use client";
import Navbar from "@/components/Navbar";
import EventCard from "@/components/EventCard";
import Category from "@/components/Category";
import SearchEvent from "@/components/SearchEvent";
import eventsData from "@/data/events.json";
import { useState } from "react";

const Home = () => {
  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total pages
  const totalPages = Math.ceil(eventsData.length / itemsPerPage);

  // Get events to display for current page
  const currentEvents = eventsData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Pagination handlers
  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <main className="">
      {/* NAVBAR */}
      <Navbar />
      <div className="pt-28 mx-64">
        <h1 className="text-3xl text-[#00509d] font-extralight">
          Explore events in San Francisco
        </h1>

        {/* EVENT SEARCH BAR */}
        <SearchEvent />

        {/* CATEGORY FILTERS */}
        <Category />

        {/* EVENT CARDS */}
        <div className="mt-8">
          <EventCard events={currentEvents} />
        </div>

        {/* PAGINATION CONTROLS */}
        <div className="flex items-center justify-end mt-8 gap-8">
          <button
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            className={`p-3 rounded-full transition duration-200 ease-in-out ${
              currentPage === 1
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-[#4ca2f3] text-white"
            }`}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polyline
                fill="none"
                stroke="#fff"
                stroke-width="2"
                points="7 2 17 12 7 22"
                transform="matrix(-1 0 0 1 24 0)"
              />
            </svg>
          </button>
          <span className="text-lg">
            <span className="text-[#4ca2f3] mr-2">
              {currentPage}
            </span>
            {"  "}
            of {totalPages}
          </span>
          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className={`p-3 rounded-full transition duration-200 ease-in-out ${
              currentPage === totalPages
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-[#4ca2f3] text-white"
            }`}
          >
            <svg
              fill="#fff"
              height="20"
              width="20"
              version="1.1"
              id="XMLID_287_"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g id="next">
                <g>
                  <polygon points="6.8,23.7 5.4,22.3 15.7,12 5.4,1.7 6.8,0.3 18.5,12 		" />
                </g>
              </g>
            </svg>
          </button>
        </div>
      </div>
    </main>
  );
};

export default Home;
