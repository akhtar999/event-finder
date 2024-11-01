import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Poppins } from "next/font/google";

// Define the Poppins font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
});

// Define the type for each event
type Event = {
  id: number;
  image: string;
  title: string;
  date: string;
  time: string;
};

// Define the props type for EventCard
interface EventCardProps {
  events: Event[];
}

const EventCard: React.FC<EventCardProps> = ({ events }) => {
  return (
    <div>
      <div className="grid grid-cols-4 gap-5 mt-8">
        {events.map((event) => (
          <Link key={event.id} href={`/events/${event.id}`} passHref>
            <div className="hover:scale-105 transform transition duration-300 ease-in-out cursor-pointer">
              {/* Image container with gradient overlay and title */}
              <div className="relative rounded-t-xl w-full h-32 overflow-hidden">
                <Image
                  width={50}
                  height={100}
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent from-20% opacity-80"></div>

                {/* Event title on image */}
                <div className="flex items-center gap-2 absolute top-3 left-3 text-gray-100 text-base z-10">
                  <div className="h-6 w-[2px] bg-[#3491e8]"></div>
                  <h2 className={poppins.className}>{event.title}</h2>
                </div>

                {/* Event date and time in bottom-right corner */}
                <div
                  className={`${poppins.className} absolute rounded-tl-xl bg-white px-2 py-2 bottom-0 right-0 text-gray-500 text-sm shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]`}
                >
                  <p className="bg-gradient-to-r from-[#6c757d] via-[#495057] to-[#343a40] inline-block text-transparent bg-clip-text">
                    {event.date}, {event.time}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EventCard;
