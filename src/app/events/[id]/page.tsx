// app/events/[id]/page.tsx

import { notFound } from "next/navigation";
import Image from "next/image";
import { Poppins } from "next/font/google";
import eventsData from "@/data/events.json"; // Adjust path if necessary

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
});

// type Event = {
//   id: number;
//   image: string;
//   title: string;
//   date: string;
//   time: string;
// };

export default function EventDetail({ params }: { params: { id: string } }) {
  const event = eventsData.find((event) => event.id === parseInt(params.id));

  if (!event) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-4xl pt-8">
      <Image
        src={event.image}
        alt={event.title}
        width={800}
        height={400}
        className="rounded-lg"
      />
      <h1
        className={`${poppins.className} text-3xl font-semibold mt-4 text-[#00509d]`}
      >
        {event.title}
      </h1>
      <p className="text-gray-500 mt-2">{`${event.date}, ${event.time}`}</p>
      {/* Add additional event details as needed */}
    </div>
  );
}
